console.log('server_scripts: test.js: This is a test log.');

ServerEvents.recipes(event => {
    test_func('minecraft:air')
})

/**
 * 
 * @param {"probejs$$tag$$minecraft:item"} itemTag 
 */
const test_func = (itemTag) => {
    // do sth.
}
