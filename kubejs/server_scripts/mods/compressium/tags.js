// priority: 1
ServerEvents.tags('block', event => {
	const pickaxeBlocks = [
        CP("experience"), CP("zinc"), CP("andesite_alloy"), CP("brass"), CP("fluorite"), CP("steel"), CP("salt"),
        CP("charcoal"), CP("bronze"), CP("uranium"), CP("lead"), CP("tin"), CP("osmium"), CP("desh"), CP("ostrum"),
        CP("calorite"), CP("crystaltine"), CP("fluix"), CP("soul_soil"), CP("nether_star"), CP("flux_star"),
        CP("sky_stone"), CP("ender_star"), CP("certus_quartz"), CP("cheese"), CP("ender_pearl"), CP("hay"),
    ]
    pickaxeBlocks.forEach(block => {
        for (let i = 1; i <= 9; i++) {
            event.add(MC('mineable/pickaxe'), `${block}_${i}`)
            event.add(MC('needs_iron_tool'), `${block}_${i}`)
        }
    })
})