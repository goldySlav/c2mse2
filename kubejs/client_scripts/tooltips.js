// priority: 0
ItemEvents.tooltip(event => {
	/*colors
    §1 - dark blue
    §2 - dark green
    §3 - dark aqua
    §4 - dark red
    §5 - purple
    §6 - orange
    §8 - dark gray
    §9 - blue
    §0 - black
    §a - light green
    §b - light aqua
    §c - light red
    §d - pink
    §e - light yellow
    §f - white*/

    //compressium
    for (let i = 1; i <= 9; i++) {
        event.add(
            RegExp(`compressium.*_${i}`),
            Text.gray(
                `Contains ${Math.pow(9, i)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} blocks`
            )
        )
    }
	
	//ae2
    event.add('ae2:facade', 'Using the same recipe, you can make a facade out of almost any block')

    //cobblefordays
    //ticks are stored in defaultconfigs/cobblefordays-server.toml
	const amounts = {
		tier1: 1,
        tier2: 1,
        tier3: 1,
        tier4: 1,
        tier5: 1
	}
    const ticks = {
        tier1: 200,
        tier2: 100,
        tier3: 50,
        tier4: 20,
        tier5: 5
    }
    const items = [
        "cobblefordays:tier_1", "cobblefordays:tier_2", "cobblefordays:tier_3", "cobblefordays:tier_4", "cobblefordays:tier_5"
    ]
    items.forEach((item, i) => {
		const amount = amounts[`tier${i + 1}`]
        const tick = ticks[`tier${i + 1}`]
        event.add(item, `§7Generates §6${amount} §7cobblestone per §6${tick / 20} §7second(s)`)
    })

    //cloud in a bottle
    event.add('quark:bottled_cloud', '§6Angel Block §7alternative. Reach clouds and fill the bottle with it.')

    //end portal frame
    event.add('minecraft:end_portal_frame', '§8Can be broken with a §7Silk Touch§8.')
	
	//remove PREXP wiki tooltip
	event.addAdvanced("projectexpansion:compact_sun", (item, advanced, text) => {
		text.removeIf(line => line.getString().includes("github"))
	})

	event.add("projectexpansion:compact_sun", [
        Text.blue("This block can be placed above collectors/below power flowers to multiply their output by 10 times!"),
        Text.yellow("Make sure to not look at it for too long..."),
    ]);

    //miniutilities
    event.add('miniutilities:unstable_ingot', [
		Text.green('Will slow you while you hold it, maybe it will even explode and KILL you if you hold it too long...')
	])
	
	//gem dust
    event.add('apotheosis:gem_dust', '§8Can be crafted by dropping anvil on an Apotheosis Gem')
	
	//enderman head
    event.add('enderio:enderman_head', '§8Can be dropped from Enderman killed with "The Ender"')

  //pipez
  event.add('pipez:item_pipe', [
    [Text.of('Default:'), ' ', Text.of('4'), ' ', Text.of('items/20t')],
    [Text.of('Basic:'), ' ', Text.of('8'), ' ', Text.of('items/15t')],
    [Text.of('Improved:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/10t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/5t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()]
  ])
  event.add('pipez:fluid_pipe', [
    [Text.of('Default:'), ' ', Text.of('50'), ' ', Text.of('mB/t')],
    [Text.of('Basic:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
  ])
  event.add('pipez:gas_pipe', [
    [Text.of('Default:'), ' ', Text.of('200'), ' ', Text.of('mB/t')],
    [Text.of('Basic:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()]
  ])
  event.add('pipez:energy_pipe', [
    [Text.of('Default:'), ' ', Text.of('256'), ' ', Text.of('FE/t')],
    [Text.of('Basic:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()]
  ])

  //pipez upgrades
  event.add('pipez:basic_upgrade', [
    [Text.of('Item:'), ' ', Text.of('8'), ' ', Text.of('items/15t')],
    [Text.of('Fluid:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('Gas:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('Energy:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
  ])
  event.add('pipez:improved_upgrade', [
    [Text.of('Item:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/10t').gold()],
    [Text.of('Fluid:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Gas:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Energy:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
  ])
  event.add('pipez:advanced_upgrade', [
    [Text.of('Item:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/5t').darkAqua()],
    [Text.of('Fluid:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Gas:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Energy:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
  ])
  event.add('pipez:ultimate_upgrade', [
    [Text.of('Item:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
    [Text.of('Fluid:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Gas:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Energy:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
  ])

	//mechanisms
	let main_assembly = (id, stage) => event.add(id, [`§7Main Assembly: §6Chapter ${stage}`, '§8Consider automating this item'])
	main_assembly('kubejs:kinetic_mechanism', "1")
	main_assembly('kubejs:sealed_mechanism', "2")
	main_assembly('create:precision_mechanism', "3")
	main_assembly('kubejs:inductive_mechanism', "4")
	main_assembly('kubejs:calculation_mechanism', "5")
	main_assembly('kubejs:abstruse_mechanism', "6")
	main_assembly('kubejs:integrated_mechanism', "7")
	main_assembly('kubejs:embedded_mechanism', "8")
	main_assembly('kubejs:portable_mechanism', "9")
	main_assembly('kubejs:electric_mechanism', "10")

	//machines
	let machineTooltip = (id, stage) => event.add(id, [`§7Age closing machine from §6Chapter ${stage}`])
	machineTooltip('kubejs:andesite_machine', "1")
	machineTooltip('kubejs:copper_machine', "2")
	machineTooltip('kubejs:brass_machine', "3")
	machineTooltip('kubejs:inductive_machine', "4")
	machineTooltip('ae2:not_so_mysterious_cube', "5")
	machineTooltip('kubejs:abstruse_machine', "6")
	machineTooltip('kubejs:integrated_machine', "7")
	machineTooltip('extendedcrafting:frame', "8")
	machineTooltip('kubejs:portable_machine', "9")
	machineTooltip('mekanism:steel_casing', "10")
	
	//eyes
	event.addAdvanced('endrem:black_eye', (item, advanced, text) => {
		text.removeIf(line => line.getString().includes("Pirates"))
	})
    event.add('endrem:black_eye', 'Progression based: §6Chapter 2')
	
	event.addAdvanced('endrem:cold_eye', (item, advanced, text) => {
		text.removeIf(line => line.getString().includes("Iceologers"))
	})
    event.add('endrem:cold_eye', 'Progression based: §6Chapter 3')
	
	event.addAdvanced('endrem:lost_eye', (item, advanced, text) => {
		text.removeIf(line => line.getString().includes("blacksmiths"))
	})
    event.add('endrem:lost_eye', 'Progression based: §6Chapter 4')
	
	event.addAdvanced('endrem:nether_eye', (item, advanced, text) => {
		text.removeIf(line => line.getString().includes("Aether"))
	})
    event.add('endrem:nether_eye', 'Progression based: §6Chapter 5')
	
	event.addAdvanced('endrem:rogue_eye', (item, advanced, text) => {
		text.removeIf(line => line.getString().includes("ancestors"))
	})
    event.add('endrem:rogue_eye', 'Progression based: §6Chapter 6')
	
	event.addAdvanced('endrem:cursed_eye', (item, advanced, text) => {
		text.removeIf(line => line.getString().includes("Piglins"))
	})
    event.add('endrem:cursed_eye', 'Progression based: §6Chapter 7')
	
	event.addAdvanced('endrem:exotic_eye', (item, advanced, text) => {
		text.removeIf(line => line.getString().includes("Atlantis"))
	})
    event.add('endrem:exotic_eye', 'Progression based: §6Chapter 8')
	
	event.addAdvanced('endrem:evil_eye', (item, advanced, text) => {
		text.removeIf(line => line.getString().includes("talisman"))
	})
    event.add('endrem:evil_eye', 'Progression based: §6Chapter 9')
	
	event.addAdvanced('endrem:corrupted_eye', (item, advanced, text) => {
		text.removeIf(line => line.getString().includes("solitude"))
	})
    event.add('endrem:corrupted_eye', 'Progression based: §6Chapter 10')
	
	event.addAdvanced('endrem:cryptic_eye', (item, advanced, text) => {
		text.removeIf(line => line.getString().includes("youtube"))
	})
    event.add('endrem:cryptic_eye', 'Progression based: §6Experience')
	
	event.addAdvanced('endrem:magical_eye', (item, advanced, text) => {
		text.removeIf(line => line.getString().includes("Evoker"))
	})
    event.add('endrem:magical_eye', 'Progression based: §6Mob Farming')
	
	event.addAdvanced('endrem:guardian_eye', (item, advanced, text) => {
		text.removeIf(line => line.getString().includes("warriors"))
	})
    event.add('endrem:guardian_eye', 'Progression based: §6Applied Energistics 2')
	
	event.addAdvanced('endrem:wither_eye', (item, advanced, text) => {
		text.removeIf(line => line.getString().includes("destruction"))
	})
    event.add('endrem:wither_eye', 'Progression based: §6Crop Farming \& Cooking')
	
	event.addAdvanced('endrem:witch_eye', (item, advanced, text) => {
		text.removeIf(line => line.getString().includes("brewing"))
	})
    event.add('endrem:witch_eye', 'Progression based: §6Treasure Hunting')
	
	
	
	//pure emerald
	event.addAdvanced('pureemeraldtools:pure_emerald', (item, advanced, text) => {
		text.removeIf(line => line.getString().includes("Ore"))
	})



	//swiftwolf's rending gale
    event.add('projecte:swiftwolf_rending_gale', '§7Requires §6Mobius Fuel §7or a charged star for creative flight')
})
