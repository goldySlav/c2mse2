// priority: 0

ServerEvents.recipes((event) => {
	removeRecipeByInputOutput(event, [
		TS("book_of_recycling"),
		TS("book_of_repairing"),
		TS("voodoo_poppet"),
		TS("dust_of_vanishing"),
		TS("book_of_magic_impregnation"),
		TS("book_of_disenchantment"),
		TS("bone_needle"),
		TS("smoke_ball"),
		TS("impregnated_diamond"),
		TS("familiar_receptacle"),
		TS("fishing_rod_of_misadventure"),
		TS("colored_smoke"),
		TS("strange_scroll"),
		TS("strange_tablet"),
		TS("ankh_of_pray"),
		TS("ankh_of_prayer"),
		TS("soul_receptacle"),
		TS("book_of_oblivion"),
	])
})