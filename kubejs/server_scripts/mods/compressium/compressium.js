//priority: 0

ServerEvents.recipes(event => {
    let block_materials = [
		{ material: "hay", block: "hay_block", mod: MC() }, { material: "experience", block: "experience_block", mod: CR() },
		{ material: "zinc", block: "zinc_block", mod: CR() }, { material: "andesite_alloy", block: "andesite_alloy_block", mod: CR() },
		{ material: "brass", block: "brass_block", mod: CR() }, { material: "salt", block: "block_salt", mod: M() },
		{ material: "fluorite", block: "block_fluorite", mod: M() }, { material: "steel", block: "block_steel", mod: M() },
		{ material: "charcoal", block: "block_charcoal", mod: M() }, { material: "bronze", block: "block_bronze", mod: M() },
		{ material: "uranium", block: "block_uranium", mod: M() }, { material: "lead", block: "block_lead", mod: M() },
		{ material: "tin", block: "block_tin", mod: M() }, { material: "osmium", block: "block_osmium", mod: M() },
		{ material: "cheese", block: "cheese_block", mod: AA() }, { material: "desh", block: "desh_block", mod: AA() },
		{ material: "ostrum", block: "ostrum_block", mod: AA() }, { material: "calorite", block: "calorite_block", mod: AA() },
		{ material: "crystaltine", block: "crystaltine_block", mod: EC() },
		{ material: "ender_pearl", block: "ender_pearl_block", mod: MU() }, { material: "fluix", block: "fluix_block", mod: AE2() },
		{ material: "soul_soil", block: "soul_soil", mod: MC() }, { material: "nether_star", block: "nether_star_block", mod: EC() },
		{ material: "ender_star", block: "ender_star_block", mod: EC() }, { material: "flux_star", block: "flux_star_block", mod: EC() },
		{ material: "sky_stone", block: "sky_stone_block", mod: AE2() }
	]

	block_materials.forEach(e => {
		const { material, block, mod } = e
		//first compress
		event.shapeless(CP(`${material}_1`), [Item.of(`${mod}:${block}`, 9)])

		//other compresses
		for (let i = 2; i < 10; i++) {
			event.shapeless(CP(`${material}_${i}`), [Item.of(CP(`${material}_${i - 1}`), 9)])
		}

		//first decompress
		event.shapeless(Item.of(`${mod}:${block}`, 9), [CP(`${material}_1`)])

		//other decompresses
		for (let i = 9; i > 1; i--) {
			event.shapeless(Item.of(CP(`${material}_${i - 1}`), 9), [CP(`${material}_${i}`)])
		}
	})
})