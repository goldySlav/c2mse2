let metal_ores_drop = (id, dust_id) => ({
    "type": "minecraft:block",
    "pools": [
        {
            "rolls": 1,
            "entries": [
                {
                    "type": "minecraft:alternatives",
                    "children": [
                        {
                            "type": "minecraft:item",
                            "conditions": [
                                {
                                    "condition": "minecraft:match_tool",
                                    "predicate": {
                                        "enchantments": [
                                            {
                                                "enchantment": "minecraft:silk_touch",
                                                "levels": {
                                                    "min": 1
                                                }
                                            }
                                        ]
                                    }
                                }
                            ],
                            "name": id
                        },
                        {
                            "type": "minecraft:item",
                            "name": dust_id,
                            "functions": [
                                {
                                    "function": "minecraft:explosion_decay"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "rolls": 1,
            "entries": [
                {
                    "type": "minecraft:item",
                    "conditions": [
                        {
                            "condition": "minecraft:table_bonus",
                            "enchantment": "minecraft:fortune",
                            "chances": [
                                0.0,
                                0.125,
                                0.25,
                                0.35,
                                0.5
                            ]
                        }
                    ],
                    "name": dust_id
                }
            ]
        }
    ]
})

ServerEvents.blockLootTables(event => {
    //event.addJson(TUR('titanium_ore'), metal_ores_drop(TUR('titanium_ore'), M_C('raw_titanium'))) - example
	
	const customCompressedBlocks = [
		CP("experience"), CP("zinc"), CP("andesite_alloy"), CP("brass"), CP("fluorite"), CP("steel"), CP("salt"),
        CP("charcoal"), CP("bronze"), CP("uranium"), CP("lead"), CP("tin"), CP("osmium"), CP("desh"), CP("ostrum"),
        CP("calorite"), CP("crystaltine"), CP("fluix"), CP("soul_soil"), CP("nether_star"), CP("flux_star"),
        CP("sky_stone"), CP("ender_star"), CP("certus_quartz"), CP("cheese"), CP("ender_pearl"), CP("hay"),
	]
	for (let i = 1; i < 10; i++) {
		customCompressedBlocks.forEach(block => {
			const blockId = `${block}_${i}`
			event.addJson(blockId, metal_ores_drop(blockId, blockId))
		})
	}
	event.addJson(MC("emerald_ore"), metal_ores_drop(MC("emerald_ore"), MC("emerald")))
	event.addJson(MC("deepslate_emerald_ore"), metal_ores_drop(MC("deepslate_emerald_ore"), MC("emerald")))
})

LootJS.modifiers(event => {
	//remove flint drop from gravel (manually)
    event.addBlockLootModifier(MC("gravel")).replaceLoot(MC("flint"), MC("gravel"))
});