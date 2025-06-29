// priority: 0

ServerEvents.recipes((event) => {
	//dyenamics & mekanism compat: combining
	event.recipes.mekanism.combining(Item.of(DYE('lavender_dye'), 2), F('#dyes/purple'), F('#dyes/white'))
	event.recipes.mekanism.combining(Item.of(DYE('navy_dye'), 2), F('#dyes/blue'), F('#dyes/black'))
	event.recipes.mekanism.combining(Item.of(DYE('bubblegum_dye'), 2), F('#dyes/magenta'), F('#dyes/pink'))
	event.recipes.mekanism.combining(Item.of(DYE('amber_dye'), 2), F('#dyes/orange'), F('#dyes/persimmon'))
	event.recipes.mekanism.combining(Item.of(DYE('icy_blue_dye'), 2), F('#dyes/light_blue'), F('#dyes/white'))
	event.recipes.mekanism.combining(Item.of(DYE('maroon_dye'), 2), F('#dyes/red'), F('#dyes/black'))
	event.recipes.mekanism.combining(Item.of(DYE('rose_dye'), 3), F('#dyes/bubblegum'), F('#dyes/maroon'))
	event.recipes.mekanism.combining(Item.of(DYE('peach_dye'), 2), F('#dyes/orange'), F('#dyes/white'))
	event.recipes.mekanism.combining(Item.of(DYE('aquamarine_dye'), 2), F('#dyes/cyan'), F('#dyes/blue'))
	event.recipes.mekanism.combining(Item.of(DYE('persimmon_dye'), 2), F('#dyes/red'), F('#dyes/orange'))
	
	//concrete compat
	colours_dyenamics.forEach(color => {
		//ae2
		event.recipes.ae2.transform(DYE(`${color}_concrete`), [DYE(`${color}_concrete_powder`)]).circumstance({ type: 'fluid', tag: F('water') })
		
		//tconstruct
		event.recipes.tconstruct.casting_basin(DYE(`${color}_concrete`), Fluid.of(MC("water"), 100), DYE(`${color}_concrete_powder`), true, 20)
	})
	
    //elevator from teleportation core
    colours_dyenamics.forEach(color => {
        event.replaceInput({ id: DYE_F(`${color}_elevator`) }, MC("ender_pearl"), M("teleportation_core"))
    })
})