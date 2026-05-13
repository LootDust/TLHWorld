ServerEvents.recipes(event => {
    event.custom({
        "type": "twilightforest:drying",
        "filter_time": 3600,
        "input": {
            "item": "regions_unexplored:steppe_shrub"
        },
        "result": {
            "count": 1,
            "id": "regions_unexplored:dead_steppe_shrub"
        }
    })
})