<!--如仅查看请用预览模式，VSCode在安装Markdown扩展以后预览按钮在右上角-->
<!--占位-->
<!--占位-->
<!--占位-->
# 整合包开发笔记
><font color="yellow">目录</font>  
[1.数据组件与数据包](#数据组件与数据包)  
[1.1.数据组件(Data Components, aka. newer NBT system)](#数据组件)  
[1.2.配方和标签(Recipes & Tags)](#配方和标签)  
[1.2.1.配方](#配方)  
[1.2.2.标签](#标签)  
[1.3.维度与地形生成(Dimensions & Worldgen)](#维度与世界生成)  
[1.3.1.维度](#维度)  
[1.3.2.生物群系](#生物群系)  
[1.3.3.噪声设置](#噪声设置)  
[1.3.4.地物与结构](#地物与结构)  
[1.3.5.实体生成](#实体生成)  
[2.KubeJS](#kubejs)  
[2.1.如何安装KubeJS](#如何安装kubejs)

## 数据组件与数据包
在光鲜亮丽的Minecraft世界之下的黑暗里，代码涌动着构成了一切的基底。而在没那么黑的灰暗处，数据组件和数据包向我们提供了一些不需要多少编程知识就能应用到实际的自定义整个世界的手段。

---
---

### 数据组件
><font color="red">WIP</font>

---
---

### 配方和标签
这一节主要概述一下配方和标签系统，但是不会去过多深入。相比垃圾的原版数据驱动，在整合包制作中我们主要使用[KubeJS](#KubeJS)去增删改查这两者，虽然底层原理上来说没什么区别，但是在批量化制作配方和填充标签的时候，你也不想要一个个JSON翻过去吧。

话虽如此，了解一下这套系统是怎么运作的仍然很有必要。在此我们不介绍模组中的配方和标签，需要时请复制jar将其转为zip自行查询其data文件夹下示例配方文件或查询各百科。

---

#### 配方
>参考链接：  
[中文Minecraft Wiki - 配方](https://zh.minecraft.wiki/w/配方)

游戏中的一切配方（除了少数几个有特殊效用的，酿造配方则是在Minecraft 26.3版本数据驱动化了，不过考虑到我们也不需要自定义什么药水效果所以无所谓），全部都是直接或间接依赖数据驱动的，这便于我们直接编写数据包进行配方自定义。

但是注意一点，Minecraft的原版是不支持筛选配方输入物的数据组件的，感谢NeoForge吧。

对于Minecraft1.21.1版本，配方JSON文件全部位于数据包内`data/<namespace>/recipe`文件夹下，允许在`recipe`文件夹下的子文件夹内放置配方JSON文件。

##### 有序合成
简单来说，就是最普通最常见的把物品放入2×2或3×3的合成栏里进行的合成，并且这种合成要求合成时各个输入需要符合一定的排列方式。

下为一个用安山合金等材料制作物理组装器的自定义有序合成案例：
```JSON5
{
    "type": "minecraft:crafting_shaped", // 这一行是固定的，表明是有序合成类配方
    "group": "a_recipe_group", // （默认为空）可选，同一组配方在合成书里合并显示
    "category": "misc", // （默认为misc）可选，在TLHWorld整合包环境下无用
    "show_notification": false, // （默认为false）可选
    "key": { // 一个映射表，键为下文pattern中字符，值为一种原料类型
        "A": "create:andesite_alloy", // 原版物品式原料，这里是安山合金
        "L": "#c:logs", // 原版标签式原料，这里是c:logs这个物品标签
        // 下为原版列表式原料，表明可选列表中的任一种作为原料
        "I": ["create:zinc_ingot", "create:brass_ingot"],
        // 下为NeoForge提供的物品式原料，这里是圆石
        "C": {
            // 类似原版，这里键改成tag就是标签式原料
            "item": "minecraft:cobblestone"
        },
        // 下为NeoForge提供的数据组件式原料，这里是无法破坏的扳手
        "W": {
            "type": "neoforge:components",
            "items": "create:wrench",
            "components": {
                // 这里的组件记得写时带上完整命名空间
                "minecraft:unbreakable": {}
            }
        }
    },
    "pattern": { // 输入物图案，简单说就是定义合成栏里怎么摆原料
        // 注意，可以只有一行或一列，但是每列都要等长
        " W ",
        "ALI",
        " C "
    },
    "result": { // 输出的产物
        "id": "simulated:physics_assembler",
        "count": 1, // （默认为1）可选，单次合成产物数量
        "components" : {} // 可选，表示产物的数据组件
    }
}
```

##### 烧炼配方
><font color="red">WIP</font>

##### 切石机配方
><font color="red">WIP</font>

##### 锻造配方
><font color="red">WIP</font>

---

#### 标签
>参考链接：  
[中文Minecraft Wiki - Java版标签](https://zh.minecraft.wiki/w/Java版标签)

标签源自古早时期Forge的矿物辞典系统，在Minecraft 1.13版本，ojng吸纳了这一思想，加入了标签系统。简单来说，标签是一类具有相同功效的对象的集合，是一种对于方块、物品等游戏资源的分组。

通过使用标签，我们可以快捷地对多个游戏资源进行分组与统一调用，例如在上文配方中使用标签，就可以将一类相似的物品作为同一种原料使用。

由于标签种类极多，建议自行前往中文Minecraft Wiki进行查询。

---
---

### 维度与世界生成
><font color="red">WIP</font>

从生成步骤上来看，Minecraft首先确定有哪些维度需要生成，然后从维度定义格式文件里读取维度类型和区块生成器，其中区块生成器包括了这个维度里的[生物群系源](#生物群系)和[噪声设置](#噪声设置)（当然`debug`类型的区块生成器没有这两项，`flat`类型也就是超平坦世界的区块生成器用的是[超平坦生成设置](https://zh.minecraft.wiki/w/Template:Nbt_inherit/flat_generator_settings)而不是噪声设置），而世界生成的主要基础，就是这两个属性。

下面按生成步骤拆分叙述。

---

#### 维度
>参考链接：  
[中文Minecraft Wiki - 维度定义格式](https://zh.minecraft.wiki/w/维度定义格式)  
[中文Minecraft Wiki - 维度类型](https://zh.minecraft.wiki/w/维度类型)

维度这一步其实没什么好说的，就是一些基础的维度效果设置，比如昼夜更替、天空光照之类的。考虑到在绝大部分时候整合包自定义一个维度都是希望做出一个类似主世界的世界，因此直接在维度定义格式的`type`字段里照搬`minecraft:overworld`这个原版维度类型就好，这里不多赘述了。

（而且1.21.1也没法依靠数据包搞出什么特别的维度效果）

---

#### 生物群系
>参考链接：  
[中文Minecraft Wiki - 维度定义格式#生物群系源](https://zh.minecraft.wiki/w/维度定义格式#生物群系源)  
[中文Minecraft Wiki - 世界生成#生物群系产生源](https://zh.minecraft.wiki/w/世界生成#生物群系产生源)  
[中文Minecraft Wiki - 生物群系定义格式](https://zh.minecraft.wiki/w/生物群系定义格式)

生物群系是自定义世界生成里的极其重要的一步。

---

#### 噪声设置
>参考链接：  
[中文Minecraft Wiki - 噪声设置](https://zh.minecraft.wiki/w/噪声设置)

---

#### 地物与结构
><font color="red">WIP</font>

---

#### 实体生成
><font color="red">WIP</font>

---
---

## KubeJS
>参考链接：  
[MC百科 - KubeJS](https://www.mcmod.cn/class/2450.html)  
[KubeJS官网](https://kubejs.com/)  
[CrychicDoc by PickAID - KubeJS文档](https://docs.mihono.cn/zh/modpack/kubejs/Catalogue)

KubeJS，也被熟知为KJS，是一个通过基于Rhino引擎的JavaScript对Minecraft的游戏内容进行自定义更改的模组。其作用原理主要是基于Rhino引擎将整合包作者编写的JavaScript脚本转译为可运行的Java程序并在运行时部署到Minecraft游戏内，同时KubeJS也有作为全局资源包与数据包加载器的功能，在KubeJS系统下编写的数据包和资源包将能轻松地加载到所有游戏存档。

如若没有特殊说明，以下KubeJS教程均面向Minecraft 1.21.1、KubeJS 7.2的版本。

### 如何安装KubeJS
这里我们只以整合包制作者的角度描述如何安装KubeJS，对于常规整合包玩家而言KubeJS是没有必要安装的，因为KubeJS其本身并不能像AI Agent一样自动帮你实现你想要的魔改。

#### 游戏侧
游戏内的KubeJS安装非常简单，只要在启动器里正常下载KubeJS模组与其前置Rhino模组即可。

然而，作为一个合格的整合包制作者，你应当额外安装ProbeJS模组，这个模组将会和下文提到的VSCode ProbeJS扩展相结合，为你提供开发时详尽的代码补全功能。

#### 编辑器侧
>参考链接：  
[Microsoft Visual Studio Code官网](https://code.visualstudio.com/)

给Minecraft安装好KubeJS模组并至少运行一次游戏以后，你就能在版本文件夹里看到`kubejs`文件夹了。虽然这时候你已经可以在这个文件夹里编写`.js`脚本文件了，但是用记事本（或者Notepad++，鬼知道为什么会有人选择这玩意写JavaScript）编写脚本是极其吃力且易于出错的，在这里（以及几乎所有提及KubeJS的其他教程）我们推荐你使用Microsoft VSCode作为你的KubeJS脚本编辑器（这玩意是PC端的，移动设备老实用你的MT管理器去）。

关于VSCode的安装与汉化配置在此不多赘述，我们接下来要做的是，在左侧边栏的扩展菜单里下载并安装Prunoideae的ProbeJS扩展。

安装完成ProbeJS后，点击VSCode顶层左侧工具栏中的`文件(F)`按钮（没有汉化的请自行下载汉化），并在下拉菜单中选择`打开文件夹`，找到你的整合包所在版本文件夹并选择它，确保信任整个文件夹而不是让VSCode处于受限模式。完成以上操作后，左边的资源管理器里应该能显示版本文件夹内包含的各类`config`、`logs`、`mods`等文件夹和包括`版本名.jar`在内的一众文件。

那么接下来，我们就即将正式开始了解并编写KubeJS脚本了。
