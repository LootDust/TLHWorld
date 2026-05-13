// 在其他文件开头用“/// <reference path=".reference.js"/>”以调用此引用文件
// 注意相对路径


// priority: 10

/// <reference path=".config/js"/>

/** @import { $List } from "java.util.List" */
const $List = Java.loadClass("java.util.List");
/** @import { $ArrayList } from "java.util.ArrayList" */
const $ArrayList = Java.loadClass("java.util.ArrayList");



/** @import { $CommandSourceStack } from "net.minecraft.commands.CommandSourceStack" */
const $CommandSourceStack = Java.loadClass("net.minecraft.commands.CommandSourceStack");
/** @import { $BlockPos } from "net.minecraft.core.BlockPos" */
const $BlockPos = Java.loadClass("net.minecraft.core.BlockPos");
/** @import { $NonNullList } from "net.minecraft.core.NonNullList" */
const $NonNullList = Java.loadClass("net.minecraft.core.NonNullList");
/** @import { $CompoundTag } from "net.minecraft.nbt.CompoundTag" */
const $CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag");
/** @import { $ListTag } from "net.minecraft.nbt.ListTag" */
const $ListTag = Java.loadClass("net.minecraft.nbt.ListTag");
/** @import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation" */
const $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
/** @import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer" */
const $ServerPlayer = Java.loadClass("net.minecraft.server.level.ServerPlayer");
/** @import { $InteractionHand } from "net.minecraft.world.InteractionHand" */
const $InteractionHand = Java.loadClass("net.minecraft.world.InteractionHand");
/** @import { $Player } from "net.minecraft.world.entity.player.Player" */
const $Player = Java.loadClass("net.minecraft.world.entity.player.Player");
/** @import { $RecipeHolder } from "net.minecraft.world.item.crafting.RecipeHolder" */
const $RecipeHolder = Java.loadClass("net.minecraft.world.item.crafting.RecipeHolder");


/** @import { $ItemStackHandler } from "net.neoforged.neoforge.items.ItemStackHandler" */
const $ItemStackHandler = Java.loadClass("net.neoforged.neoforge.items.ItemStackHandler");


/** @import { $RPCEvent } from "com.lowdragmc.lowdraglib2.gui.sync.rpc.RPCEvent" */
const $RPCEvent = Java.loadClass("com.lowdragmc.lowdraglib2.gui.sync.rpc.RPCEvent");
/** @import { $Button } from "com.lowdragmc.lowdraglib2.gui.ui.elements.Button" */
const $Button = Java.loadClass("com.lowdragmc.lowdraglib2.gui.ui.elements.Button");
/** @import { $UIEvent } from "com.lowdragmc.lowdraglib2.gui.ui.event.UIEvent" */
const $UIEvent = Java.loadClass("com.lowdragmc.lowdraglib2.gui.ui.event.UIEvent");
