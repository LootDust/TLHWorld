ServerEvents.recipes(event => {
    event.custom({
        "type": "create_enchantment_industry:grinding",
        "ingredients": [
            {
                "item": "undergarden:blood_globule"
            }
        ],
        "results": [
            {
                "id": "biomesoplenty:blood",
                "amount": 250
            }
        ]
    });
})