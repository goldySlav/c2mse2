
const drawerSizes = [1, 2, 4]
const drawerWoodTypes = woodTypes.minecraft.log.concat(woodTypes.minecraft.stem)

ServerEvents.tags("item", (event) => {
	drawerSizes.forEach(size => {
		drawerWoodTypes.forEach(wood => {
			event.add(FS(`drawer/${size}`), FS(`${wood}_${size}`))
		})
	})
})