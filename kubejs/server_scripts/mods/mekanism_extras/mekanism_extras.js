// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		M_E("processing/naquadah/ore/end_from_raw"),
		M_E("expand_radioactive_waste_barrel"),
		M_E("rotary/polonium_containing"),
		M_E("rotary/polonium-208"),
	])


	// make it so the naquadah reactor doesn't need  absurd amounts of rotary condensers to fully handle it's output of polonium containing steam


	// this one is for steam to solution, normally it goes at 1mb/tick , this would mean you would need 1,500,000 rotary condensers to keep up with the naquadah reactor, and that is absurd
	// this adjusts it to 5000mb/tick per machine, this lowers it to only needing 300 , this is still a lot but a lot more manageable , also this is assuming max level machines, 16 speed and 16 energy upgrades
	// no watch of flowing time is taken into account for this , not sure if it affect condensors but it might
	customRecipes.mekanism.condensentrating(event,"mekanism_extras:polonium_containing_solution",5000,"mekanism_extras:polonium_containing_steam",5000)

	// this is for going from the liquid polonium 208 to the gas form, this is after the evaporation chamber machine thingy, normally this is again at 1mb/tick per machine
	// but with a flow rate of 15,000 mb/tick needed, well, 15,000 condensers is again insane, so adjusting them to 300mb/tick per machine means you only need 50 of them for full flow
	customRecipes.mekanism.condensentrating(event,"mekanism_extras:polonium-208",300,"mekanism_extras:polonium-208",300)

	const mekaExtrasTiers = ["absolute", "supreme", "cosmic", "infinite"]
	
	//tiered machines BULK
	const tieredList = [
		"smelting", "enriching", "crushing", "compressing", "combining",
		"purifying", "injecting", "infusing", "sawing",
	]

	tieredList.forEach(tiered => {
		mekaExtrasTiers.forEach((tier, i) => {
			const id = M_E(`${tier}_${tiered}_factory`)
			const prevIdStr = `${mekaExtrasTiers[i - 1]}_${tiered}_factory`
			const ultStr = `ultimate_${tiered}_factory`
			const tierId = M_E(`${tier}_tier_installer`)

			removeRecipeByOutput(event, [
				id,
			])
			event.shapeless(id, [i ? M_E(prevIdStr) : M(ultStr), tierId])
		})
	})
	
	//tier upgrades
	const alloyTierEq = [M_E("alloy_radiance"), M_E("alloy_thermonuclear"), M_E("alloy_shining"), M_E("alloy_spectrum")]
	const liquidInfusionEq = [KJ("liquid_radiance"), KJ("liquid_thermonuclear"), KJ("liquid_shining"), KJ("liquid_spectrum")]
	mekaExtrasTiers.forEach( (tier, i) => {
		removeRecipeByOutput(event, [
			M_E(`${tier}_tier_installer`),
		])

		const inputArr = [
			{ tag: F('storage_blocks/steel') },
			{ tag: F('storage_blocks/steel') },
			{ tag: F('storage_blocks/steel') },
			{ item: alloyTierEq[i] },
			{ item: alloyTierEq[i] },
			{ item: M_E(`${tier}_control_circuit`) },
		]
		inputArr.push(i ? { item: M_E(`${mekaExtrasTiers[i - 1]}_tier_installer`) } : { item: M("ultimate_tier_installer") })
		inputArr.push({ item: M_E(`${tier}_control_circuit`) })

		event.custom({
			input: inputArr,
			inputFluid: `{FluidName:\"${liquidInfusionEq[i]}\",Amount:10}`,
			processingTime: 60,
			output: {
			  item: M_E(`${tier}_tier_installer`),
			  count: 1
			},
			type: IF("dissolution_chamber")
		})
	})
	
	//enriched stuff
	customRecipes.industrialforegoing.dissolution(event, M_E(`enriched_radiance`), [IF("dryrubber")], KJ("liquid_radiance"), 100, 60)
	customRecipes.industrialforegoing.dissolution(event, M_E(`enriched_thermonuclear`), [IF("dryrubber")], KJ("liquid_thermonuclear"), 100, 60)
	customRecipes.industrialforegoing.dissolution(event, M_E(`enriched_shining`), [IF("dryrubber")], KJ("liquid_shining"), 100, 60)
	customRecipes.industrialforegoing.dissolution(event, M_E(`enriched_spectrum`), [IF("dryrubber")], KJ("liquid_spectrum"), 100, 60)
	
	//bins
	removeRecipeByOutput(event, [
		M_E("absolute_bin"),
		M_E("supreme_bin"),
		M_E("cosmic_bin"),
		M_E("infinite_bin"),
	])
	event.shapeless(M_E("absolute_bin"), [M("ultimate_bin"), M_E(`absolute_tier_installer`)])
	event.shapeless(M_E("supreme_bin"), [M_E("absolute_bin"), M_E(`supreme_tier_installer`)])
	event.shapeless(M_E("cosmic_bin"), [M_E("supreme_bin"), M_E(`cosmic_tier_installer`)])
	event.shapeless(M_E("infinite_bin"), [M_E("cosmic_bin"), M_E(`infinite_tier_installer`)])

	//fluid tanks
	removeRecipeByOutput(event, [
		M_E("absolute_fluid_tank"),
		M_E("supreme_fluid_tank"),
		M_E("cosmic_fluid_tank"),
		M_E("infinite_fluid_tank"),
	])
	event.shapeless(M_E("absolute_fluid_tank"), [M("ultimate_fluid_tank"), M_E(`absolute_tier_installer`)])
	event.shapeless(M_E("supreme_fluid_tank"), [M_E("absolute_fluid_tank"), M_E(`supreme_tier_installer`)])
	event.shapeless(M_E("cosmic_fluid_tank"), [M_E("supreme_fluid_tank"), M_E(`cosmic_tier_installer`)])
	event.shapeless(M_E("infinite_fluid_tank"), [M_E("cosmic_fluid_tank"), M_E(`infinite_tier_installer`)])

	//chemical tanks
	removeRecipeByOutput(event, [
		M_E("absolute_chemical_tank"),
		M_E("supreme_chemical_tank"),
		M_E("cosmic_chemical_tank"),
		M_E("infinite_chemical_tank"),
	])
	event.shapeless(M_E("absolute_chemical_tank"), [M("ultimate_chemical_tank"), M_E(`absolute_tier_installer`)])
	event.shapeless(M_E("supreme_chemical_tank"), [M_E("absolute_chemical_tank"), M_E(`supreme_tier_installer`)])
	event.shapeless(M_E("cosmic_chemical_tank"), [M_E("supreme_chemical_tank"), M_E(`cosmic_tier_installer`)])
	event.shapeless(M_E("infinite_chemical_tank"), [M_E("cosmic_chemical_tank"), M_E(`infinite_tier_installer`)])

	//cubes
	removeRecipeByOutput(event, [
		M_E("absolute_energy_cube"),
		M_E("supreme_energy_cube"),
		M_E("cosmic_energy_cube"),
		M_E("infinite_energy_cube"),
	])
	event.shapeless(M_E("absolute_energy_cube"), [M("ultimate_energy_cube"), M_E(`absolute_tier_installer`)])
	event.shapeless(M_E("supreme_energy_cube"), [M_E("absolute_energy_cube"), M_E(`supreme_tier_installer`)])
	event.shapeless(M_E("cosmic_energy_cube"), [M_E("supreme_energy_cube"), M_E(`cosmic_tier_installer`)])
	event.shapeless(M_E("infinite_energy_cube"), [M_E("cosmic_energy_cube"), M_E(`infinite_tier_installer`)])

	//absolute induction cell
	removeRecipeByOutput(event, [
		M_E("absolute_induction_cell"),
	])
	event.recipes.extendedcrafting.shaped_table(M_E("absolute_induction_cell"), [
		'BBHHJHHBB',
		'BKIGGGIKB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HILFFFLIH',
		'BKIGGGIKB',
		'BBHHJHHBB',
	], {
		B: M_E('alloy_radiance'),
		H: F('#storage_blocks/steel'),
		J: EC('flux_star'),
		I: F('#storage_blocks/osmium'),
		G: M_E('absolute_control_circuit'),
		D: M("ultimate_induction_cell"),
		E: singularityId('charged_certus_quartz'),
		F: M('energy_tablet'),
		A: M_E('absolute_energy_cube'),
		K: M('hdpe_sheet'),
		L: M('energy_tablet'),
	})

	//supreme induction cell
	removeRecipeByOutput(event, [
		M_E("supreme_induction_cell"),
	])
	event.recipes.extendedcrafting.shaped_table(M_E("supreme_induction_cell"), [
		'BBHHJHHBB',
		'BKIGGGIKB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HILFFFLIH',
		'BKIGGGIKB',
		'BBHHJHHBB',
	], {
		B: M_E('alloy_thermonuclear'),
		H: F('#storage_blocks/steel'),
		J: EC('flux_star'),
		I: F('#storage_blocks/osmium'),
		G: M_E('supreme_control_circuit'),
		D: M_E("absolute_induction_cell"),
		E: singularityId('charged_certus_quartz'),
		F: M('energy_tablet'),
		A: M_E('supreme_energy_cube'),
		K: M('hdpe_sheet'),
		L: M('energy_tablet'),
	})

	//cosmic induction cell
	removeRecipeByOutput(event, [
		M_E("cosmic_induction_cell"),
	])
	event.recipes.extendedcrafting.shaped_table(M_E("cosmic_induction_cell"), [
		'BBHHJHHBB',
		'BKIGGGIKB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HILFFFLIH',
		'BKIGGGIKB',
		'BBHHJHHBB',
	], {
		B: M_E('alloy_shining'),
		H: F('#storage_blocks/steel'),
		J: EC('flux_star'),
		I: F('#storage_blocks/osmium'),
		G: M_E('cosmic_control_circuit'),
		D: M_E("supreme_induction_cell"),
		E: singularityId('charged_certus_quartz'),
		F: M('energy_tablet'),
		A: M_E('cosmic_energy_cube'),
		K: M('hdpe_sheet'),
		L: M('energy_tablet'),
	})

	//cosmic induction cell
	removeRecipeByOutput(event, [
		M_E("infinite_induction_cell"),
	])
	event.recipes.extendedcrafting.shaped_table(M_E("infinite_induction_cell"), [
		'BBHHJHHBB',
		'BKIGGGIKB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HILFFFLIH',
		'BKIGGGIKB',
		'BBHHJHHBB',
	], {
		B: M_E('alloy_spectrum'),
		H: F('#storage_blocks/steel'),
		J: EC('flux_star'),
		I: F('#storage_blocks/osmium'),
		G: M_E('infinite_control_circuit'),
		D: M_E("cosmic_induction_cell"),
		E: singularityId('charged_certus_quartz'),
		F: M('energy_tablet'),
		A: M_E('infinite_energy_cube'),
		K: M('hdpe_sheet'),
		L: M('energy_tablet'),
	})

	//absolute induction provider
	removeRecipeByOutput(event, [
		M_E("absolute_induction_provider"),
	])
	event.recipes.extendedcrafting.shaped_table(M_E("absolute_induction_provider"), [
		'BBHHJHHBB',
		'BKIGGGIKB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HILFFFLIH',
		'BKIGGGIKB',
		'BBHHJHHBB',
	], {
		B: M_E('alloy_radiance'), //
		H: F('#storage_blocks/steel'),
		J: M_E('absolute_universal_cable'), //
		I: F('#storage_blocks/osmium'),
		G: M_E('absolute_control_circuit'), //
		D: M("ultimate_induction_provider"), //
		E: singularityId('fluix'),
		F: M('energy_tablet'),
		A: M_E('absolute_energy_cube'), //
		K: M('hdpe_sheet'),
		L: M('energy_tablet'),
	})

	//supreme induction provider
	removeRecipeByOutput(event, [
		M_E("supreme_induction_provider"),
	])
	event.recipes.extendedcrafting.shaped_table(M_E("supreme_induction_provider"), [
		'BBHHJHHBB',
		'BKIGGGIKB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HILFFFLIH',
		'BKIGGGIKB',
		'BBHHJHHBB',
	], {
		B: M_E('alloy_thermonuclear'), //
		H: F('#storage_blocks/steel'),
		J: M_E('supreme_universal_cable'), //
		I: F('#storage_blocks/osmium'),
		G: M_E('supreme_control_circuit'), //
		D: M_E("absolute_induction_provider"), //
		E: singularityId('fluix'),
		F: M('energy_tablet'),
		A: M_E('supreme_energy_cube'), //
		K: M('hdpe_sheet'),
		L: M('energy_tablet'),
	})

	//cosmic induction provider
	removeRecipeByOutput(event, [
		M_E("cosmic_induction_provider"),
	])
	event.recipes.extendedcrafting.shaped_table(M_E("cosmic_induction_provider"), [
		'BBHHJHHBB',
		'BKIGGGIKB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HILFFFLIH',
		'BKIGGGIKB',
		'BBHHJHHBB',
	], {
		B: M_E('alloy_shining'), //
		H: F('#storage_blocks/steel'),
		J: M_E('cosmic_universal_cable'), //
		I: F('#storage_blocks/osmium'),
		G: M_E('cosmic_control_circuit'), //
		D: M_E("supreme_induction_provider"), //
		E: singularityId('fluix'),
		F: M('energy_tablet'),
		A: M_E('cosmic_energy_cube'), //
		K: M('hdpe_sheet'),
		L: M('energy_tablet'),
	})

	//infinite induction provider
	removeRecipeByOutput(event, [
		M_E("infinite_induction_provider"),
	])
	event.recipes.extendedcrafting.shaped_table(M_E("infinite_induction_provider"), [
		'BBHHJHHBB',
		'BKIGGGIKB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'JGFDADFGJ',
		'HGFEDEFGH',
		'HILFFFLIH',
		'BKIGGGIKB',
		'BBHHJHHBB',
	], {
		B: M_E('alloy_spectrum'), //
		H: F('#storage_blocks/steel'),
		J: M_E('infinite_universal_cable'), //
		I: F('#storage_blocks/osmium'),
		G: M_E('infinite_control_circuit'), //
		D: M_E("cosmic_induction_provider"), //
		E: singularityId('fluix'),
		F: M('energy_tablet'),
		A: M_E('infinite_energy_cube'), //
		K: M('hdpe_sheet'),
		L: M('energy_tablet'),
	})

	//naquadah reactor frame
	removeRecipeByOutput(event, [
		M_E("naquadah_reactor_casing"),
	])
	event.recipes.extendedcrafting.shaped_table(Item.of(M_E("naquadah_reactor_casing"), 2), [
		'BBHHHHHBB',
		'BMMGGGMMB',
		'HMKFFFKMH',
		'HGFEDEFGH',
		'HGFDADFGH',
		'HGFEDEFGH',
		'HMLFFFLMH',
		'BMMGGGMMB',
		'BBHHHHHBB',
	], {
		D: M('steel_casing'),
		E: M('reprocessed_fissile_fragment'),
		F: M("hdpe_stick"),
		G: CP('emerald_3'),
		B: F('#storage_blocks/naquadah'),
		H: M_E('alloy_shining'),
		M: M_E('cosmic_control_circuit'),
		A: M('reprocessed_fissile_fragment'),
		K: M("hdpe_stick"),
		L: M("hdpe_stick"),
	})

	//fusion reactor controller
	removeRecipeByOutput(event, [
		M_E("naquadah_reactor_controller"),
	])
	event.recipes.extendedcrafting.shaped_table(M_E("naquadah_reactor_controller"), [
		'BBHHHHHBB',
		'BIIGGGIIB',
		'HILFFFLIH',
		'HGFEDEFGH',
		'HGFDADFGH',
		'HGFEDEFGH',
		'HIMFFFMIH',
		'BIIGGGIIB',
		'BBHHHHHBB',
	], {
		B: F('#storage_blocks/naquadah'),
		H: M_E('alloy_shining'),
		G: CP('emerald_3'),
		I: M_E('cosmic_control_circuit'),
		D: AE2('controller'),
		E: M_E("naquadah_reactor_casing"),
		F: M('reprocessed_fissile_fragment'),
		A: M_E('absolute_chemical_tank'),
		L: M('hdpe_stick'),
		M: M('hdpe_stick'),
	})

	//induction casing
	removeRecipeByOutput(event, [
		M_E("reinforced_induction_casing"),
	])
	event.recipes.extendedcrafting.shaped_table(Item.of(M_E("reinforced_induction_casing"), 4), [
		'BBBBGBBBB',
		'BHHCCCHHB',
		'BHFFFFFHB',
		'BCFEDEFCB',
		'GCFDADFCG',
		'BCFEDEFCB',
		'BHFFFFFHB',
		'BHHCCCHHB',
		'BBBBGBBBB',
	], {
		A: M('steel_casing'),
		B: M('hdpe_sheet'),
		C: F('#storage_blocks/naquadah'),
		D: M('induction_casing'),
		E: F('#dusts/lithium'),
		F: M('energy_tablet'),
		G: M_E('cosmic_universal_cable'),
		H: CP('diamond_3'),
	})
})
