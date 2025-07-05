// priority: 3900

ItemEvents.modification(event => {
	event.modify('mekanism:yellow_cake_uranium', item => {
		item.foodProperties = food => {
			food.hunger(-100)
			food.saturation(-0.5)
			food.meat(false)
			food.alwaysEdible(true)
			food.fastToEat(false)
			food.effect('instant_damage', 600, 100, 1)
		}
	})
	event.modify(`create:chromatic_compound`, item => {
		item.maxStackSize = 64
	})
	event.modify(`industrialrenewal:battery`, item => {
		item.maxStackSize = 64
	})
	event.modify(`industrialrenewal:battery_lithium`, item => {
		item.maxStackSize = 64
	})
	event.modify('industrialrenewal:screwdriver', item => {
		item.maxDamage = 1024
		item.rarity = 'uncommon'
	})

	const tools = ["shovel", "axe", "pickaxe", "sword", "hoe"]
	tools.forEach(tool => {
		event.modify(`minecraft:golden_${tool}`, item => {
			item.tier = tier => {
				tier.level = 2
			}
		})
	})

    let starComponents = ["ein", "zwei", "drei", "vier", "sphere"]
    starComponents.forEach(component => {
        event.modify(`projecte:klein_star_${component}`, item => {
            item.maxStackSize = 64
        })
        event.modify(`projectexpansion:magnum_star_${component}`, item => {
            item.maxStackSize = 64
        })
        event.modify(`projectexpansion:colossal_star_${component}`, item => {
            item.maxStackSize = 64
        })
        event.modify(`projectexpansion:gargantuan_star_${component}`, item => {
            item.maxStackSize = 64
        })
    })
	event.modify('rftoolsbase:filter_module', item => {
		item.maxStackSize = 8
	})
})