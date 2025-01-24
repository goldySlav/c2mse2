
ServerEvents.tags("item", (event) => {
	woodTypes.minecraft.log.concat(woodTypes.minecraft.stem).concat(woodTypes.minecraft.block).forEach(wood => {
		event.add(SD("trim"), SD(`${wood}_trim`))
		event.add(SD(`drawers/full`), SD(`${wood}_full_drawers_1`))
		event.add(SD(`drawers/full/1`), SD(`${wood}_full_drawers_1`))
		event.add(SD(`drawers/full`), SD(`${wood}_full_drawers_2`))
		event.add(SD(`drawers/full/2`), SD(`${wood}_full_drawers_2`))
		event.add(SD(`drawers/full`), SD(`${wood}_full_drawers_4`))
		event.add(SD(`drawers/full/4`), SD(`${wood}_full_drawers_4`))
		event.add(SD(`drawers/half`), SD(`${wood}_half_drawers_1`))
		event.add(SD(`drawers/half/1`), SD(`${wood}_half_drawers_1`))
		event.add(SD(`drawers/half`), SD(`${wood}_half_drawers_2`))
		event.add(SD(`drawers/half/2`), SD(`${wood}_half_drawers_2`))
		event.add(SD(`drawers/half`), SD(`${wood}_half_drawers_4`))
		event.add(SD(`drawers/half/4`), SD(`${wood}_half_drawers_4`))
	})
})