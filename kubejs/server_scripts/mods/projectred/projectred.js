// priority: 0

ServerEvents.recipes((event) => {
	//removals
	removeRecipeByID(event, [
		PR_C("draw_plate"), PR_C("electrotine_ingot"), PR_C("electrotine_generator"), PR_C("electrotine_dust"),
		PR_C("conductive_plate"), PR_C("wired_plate"), PR_C("bundled_plate"), PR_C("anode"), PR_C("cathode"),
		PR_C("pointer"), PR_C("silicon_chip"), PR_C("energized_silicon_chip"), PR_C("sand_coal_comp"),
		PR_C("red_iron_comp"), PR_C("electrotine_iron_comp"), PR_C("sail"), PR_C("woven_cloth"), PR_C("motor"),
		PR_C("gold_coil"), PR_C("iron_coil"), PR_C("copper_coil"), PR_C("electrotine_silicon"), PR_C("energized_silicon"),
		PR_C("infused_silicon"), PR_C("electrotine_silicon_comp"), PR_C("glow_silicon_comp"), PR_C("red_silicon_comp"),
		PR_C("silicon"), PR_C("boule"), PR_C("plate"),
	])
	removeRecipeByInput(event, [
		PR_C('plate'), PR_C("conductive_plate"), PR_C("cathode"),
	])

	//circuits
	event.remove({ output: PR_C('red_ingot') })
	event.remove({ output: PR_C('red_iron_comp') })
	event.remove({ mod: 'projectred-illumination' })
	event.recipes.createCompacting([PR_C('red_ingot')], [F('#ingots/copper'), Fluid.of(KJ("liquid_redstone"), 250)])
	event.shaped(PR_C('platformed_plate'), [
		'BBB',
		'AAA',
	], {
		A: F('#plates/iron'),
		B: PR_T('red_alloy_wire')
	})

	let convert = (c, id) => {
		event.shapeless(PR_I(c + "_inverted" + id), [PR_I(c + id)])
		event.shapeless(PR_I(c + id), [PR_I(c + "_inverted" + id)])
	}

	colours.forEach(c => {
		event.shaped(PR_I(c + '_illumar_lamp', 1), [
			'G',
			'C',
			'S'
		], {
			G: F('#glass/colorless'),
			C: PR_C(c + '_illumar'),
			S: MC('redstone')
		})

		event.stonecutting(PR_I(c + '_fixture_light', 4), PR_I(c + '_illumar_lamp'))
		event.stonecutting(PR_I(c + '_fallout_light', 4), PR_I(c + '_illumar_lamp'))
		event.stonecutting(PR_I(c + '_lantern', 4), PR_I(c + '_illumar_lamp'))
		event.stonecutting(PR_I(c + '_cage_light', 4), PR_I(c + '_illumar_lamp'))
		convert(c, '_illumar_lamp')
		convert(c, '_fallout_light')
		convert(c, '_lantern')
		convert(c, '_cage_light')
		convert(c, '_fixture_light')
	})

	let circuit = (id, override) => {
		if (override)
			event.remove({ output: id })
		event.stonecutting(Item.of(id, 1), PR_C('platformed_plate'))
	}

	let p_circuit = (id) => circuit(`${PR_INT(id)}_gate`, true)

	circuit(MC("repeater"), false)
	circuit(MC("comparator"), false)
	circuit(CR("pulse_repeater"), true)
	circuit(CR("pulse_extender"), true)
	circuit(CR("pulse_timer"), true)
	circuit(CR("powered_latch"), true)
	circuit(CR("powered_toggle_latch"), true)
	circuit(CR_C("sequenced_pulse_generator"), true)
	circuit(Q("redstone_randomizer"), true)
	circuit(DE("rain_sensor"), true)
	circuit(DE("potentiometer"), true)
	circuit(MI_D("player_door_sensor"), true)

	p_circuit("or")
	p_circuit("nor")
	p_circuit("not")
	p_circuit("and")
	p_circuit("nand")
	p_circuit("xor")
	p_circuit("xnor")
	p_circuit("buffer")
	p_circuit("multiplexer")
	p_circuit("pulse")
	p_circuit("repeater")
	p_circuit("randomizer")
	p_circuit("sr_latch")
	p_circuit("toggle_latch")
	p_circuit("transparent_latch")
	p_circuit("light_sensor")
	p_circuit("rain_sensor")
	p_circuit("timer")
	p_circuit("sequencer")
	p_circuit("counter")
	p_circuit("state_cell")
	p_circuit("synchronizer")
	p_circuit("bus_transceiver")
	p_circuit("null_cell")
	p_circuit("invert_cell")
	p_circuit("buffer_cell")
	p_circuit("comparator")
	p_circuit("and_cell")
	p_circuit("bus_randomizer")
	p_circuit("bus_converter")
	p_circuit("bus_input_panel")
	p_circuit("stacking_latch")
	p_circuit("segment_display")
	p_circuit("dec_randomizer")

	//low load power wire
	event.replaceInput({ id: PR_T("low_load_power_wire") }, PR_C("electrotine_ingot"), F("#ingots/cobalt"))

	//low load power wire
	event.replaceInput({ id: PR_I("illumar_smart_lamp") }, PR_C("bundled_plate"), PR_C("platformed_plate"))
})