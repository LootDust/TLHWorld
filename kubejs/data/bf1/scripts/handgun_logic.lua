local M = {}

function M.start_reload(api)
    local cache = {
        reloaded = 0,
        needed_count = api:getNeededAmmoAmount(),
        is_tactical = api:getReloadStateType() == TACTICAL_RELOAD_FEEDING,
    }
    api:cacheScriptData(cache)
    return true
end

function M.tick_reload(api)
    local tactical_feeding_time = 1900
    local empty_feeding_time = 2230
    local tactical_cooldown_time = 2200
    local empty_cooldown_time = 4300
    
    local reload_time = api:getReloadTime()
    local cache = api:getCachedScriptData()
    if (cache.is_tactical) then
        if (reload_time < tactical_feeding_time) then
            return TACTICAL_RELOAD_FEEDING, tactical_feeding_time - reload_time
        -- 当换弹时间达到了战术装填时间但是又没有完成整个流程时返回 FINISHING 和距离结束时间节点的剩余时间
        elseif (reload_time >= tactical_feeding_time and reload_time < tactical_cooldown_time) then
            -- 因为装填动作只进行一次而脚本却每一帧都在跑，所以需要一个标志位告诉我“装填”这一动作是否已经执行过了
            if (cache.reloaded ~= 1) then
                if (cache.needed_count == nil or cache.needed_count == 0) then
                    api:putAmmoInMagazine(1)
                end
                -- 不需要消耗弹药（创造）的话就直接把弹匣塞满
                api:putAmmoInMagazine(cache.needed_count)
                -- 更改装填标志位，这样脚本下一次运行的时候就知道已经装过了
                cache.reloaded = 1
            end
            -- 在这个时间段要返回 FINISHING 和剩余时间
            return TACTICAL_RELOAD_FINISHING, tactical_cooldown_time - reload_time
        else
            -- 在以上两种情况之外（已经完成换弹）返回没有在装填，剩余时间置于 -1
            return NOT_RELOADING, -1
        end
    else
        -- 当换弹时间还不到战术装填时间时返回 FEEDING 和距离装填时间节点的剩余时间
        if (reload_time < empty_feeding_time) then
            return EMPTY_RELOAD_FEEDING, empty_feeding_time - reload_time
            -- 当换弹时间达到了空仓装填时间但是又没有完成整个流程时返回 FINISHING 和距离结束时间节点的剩余时间
        elseif (reload_time >= empty_feeding_time and reload_time < empty_cooldown_time) then
            -- 检查装填标志位
            if (cache.reloaded ~= 1) then
                -- 注意空仓换弹的装填数量不能和消耗量划等号，必须 -1 ，原因下面会说（ 49 行）
                api:putAmmoInMagazine(cache.needed_count)
                -- 一把枪的子弹分为“枪管内”和“弹匣内”这两部分，上文所有操作都是针对弹匣的
                -- 假设一把枪的弹容是 30 + 1 发 ，那么弹匣容量为 30 ，枪管容量为 1
                -- 由于战术换弹时整枪一定为 x + 1 发子弹，也就是说枪管内一定是有子弹的，因此战术换弹时我们不需要对枪管操作
                -- 但是空仓时整个枪是 0 + 0 ，此时换弹需要消耗 30 发子弹把枪变成 29 + 1
                -- 因此这里的操作应该是“往弹匣内填充 29 发”，“往枪管内填充 1 发”，“消耗 30 发”
                -- 由于往弹匣内填充的量比消耗的少 1 发，所以上文（ 103 行）需要 - 1
                -- 同时下面这句的意思是往枪管内填充 1 发子弹
                api:setAmmoInBarrel(true)
                -- 更改装填标志位
                cache.reloaded = 1
            end
            -- 在这个时间段要返回 FINISHING 和剩余时间
            return EMPTY_RELOAD_FINISHING, empty_cooldown_time - reload_time
        else
            -- 在以上两种情况之外（已经完成换弹）返回没有在装填，剩余时间置于 -1
            return NOT_RELOADING, -1
        end
    end
end

return M