// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByID(event, [
		M_E("processing/naquadah/ore/end_from_raw"),
		M_E("expand_radioactive_waste_barrel"),
	])

	const mekaExtrasTiers = ["absolute", "supreme", "cosmic", "infinite"]
	
	//tier upgrades
	const alloyTierEq = [M_E("alloy_radiance"), M_E("alloy_thermonuclear"), M_E("alloy_shining"), M_E("alloy_spectrum")]
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
			inputFluid: `{FluidName:\"${IF("ether_gas")}\",Amount:10}`,
			processingTime: 60,
			output: {
			  item: M_E(`${tier}_tier_installer`),
			  count: 1
			},
			type: IF("dissolution_chamber")
		})
	})
	
	//bins
	removeRecipeByOutput(event, [
		M_E("absolute_bin"),
		M_E("supreme_bin"),
		M_E("cosmic_bin"),
		M_E("infinite_bin"),
	])
	event.recipes.create.item_application(M_E("absolute_bin"), [M("ultimate_bin"), M_E(`absolute_tier_installer`)])
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
	event.recipes.create.item_application(M_E("absolute_fluid_tank"), [M("ultimate_fluid_tank"), M_E(`absolute_tier_installer`)])
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
	event.recipes.create.item_application(M_E("absolute_chemical_tank"), [M("ultimate_chemical_tank"), M_E(`absolute_tier_installer`)])
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
	event.recipes.create.item_application(M_E("absolute_energy_cube"), [M("ultimate_energy_cube"), M_E(`absolute_tier_installer`)])
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