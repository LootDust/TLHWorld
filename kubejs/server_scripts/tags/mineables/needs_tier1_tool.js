// priority: 1
/** @type RegistryTypes.Block[] */
const tier1_blocks = [
    '#c:stones',
    'minecraft:smooth_stone'
]

ServerEvents.tags("block", event => {
    event.add("tlhworld:needs_tier1_tool", tier1_blocks);
})