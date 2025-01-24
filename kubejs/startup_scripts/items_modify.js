// priority: 3900

ItemEvents.modification(event => {
	event.modify('avaritia:cosmic_meatballs', item => {
		item.foodProperties = food => {
			food.hunger(400)
			food.saturation(0.5)
			food.meat(true)
			food.alwaysEdible(false)
			food.fastToEat(false)
			food.effect('speed', 600, 0, 1)
			food.effect('regeneration', 600, 1, 1)
			food.effect('resistance', 600, 1, 1)
			food.effect('fire_resistance', 600, 1, 1)
			food.effect('absorption', 600, 3, 1)
		}
	})

	event.modify('avaritia:ultimate_stew', item => {
		item.foodProperties = food => {
			food.hunger(800)
			food.saturation(0.75)
			food.meat(true)
			food.alwaysEdible(false)
			food.fastToEat(false)
			food.effect('speed', 600, 1, 1)
			food.effect('regeneration', 600, 2, 1)
			food.effect('resistance', 600, 1, 2)
			food.effect('fire_resistance', 600, 2, 1)
			food.effect('absorption', 600, 3, 1)
		}
	})
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

})