// priority: 0

ServerEvents.recipes((event) => {
  	//removals
	removeRecipeByOutput(event, [
		FCD("framed_trim"),
		FCD("framed_full_one"),
		FCD("framed_full_two"),
		FCD("framed_full_four"),
		FCD("framed_half_one"),
		FCD("framed_half_two"),
		FCD("framed_half_four"),
	])

	event.shaped(FCD("framed_trim"), [
		'SSS',
		'SMS',
		'SSS'
	], {
		S: MC("stick"),
		M: SD('#trim')
	})

	event.shaped(FCD("framed_full_one"), [
		'SSS',
		'SMS',
		'SSS'
	], {
		S: MC("stick"),
		M: SD('#drawers/full/1')
	})

	event.shaped(FCD("framed_full_two"), [
		'SSS',
		'SMS',
		'SSS'
	], {
		S: MC("stick"),
		M: SD('#drawers/full/2')
	})

	event.shaped(FCD("framed_full_four"), [
		'SSS',
		'SMS',
		'SSS'
	], {
		S: MC("stick"),
		M: SD('#drawers/full/4')
	})

	event.shaped(FCD("framed_half_one"), [
		'SSS',
		'SMS',
		'SSS'
	], {
		S: MC("stick"),
		M: SD('#drawers/half/1')
	})

	event.shaped(FCD("framed_half_two"), [
		'SSS',
		'SMS',
		'SSS'
	], {
		S: MC("stick"),
		M: SD('#drawers/half/2')
	})

	event.shaped(FCD("framed_half_four"), [
		'SSS',
		'SMS',
		'SSS'
	], {
		S: MC("stick"),
		M: SD('#drawers/half/4')
	})
})
