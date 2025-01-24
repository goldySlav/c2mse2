// priority: 0

ServerEvents.recipes(e => {
	const vanillaMats = ["leather", "chainmail", "iron", "golden", "diamond"]

	function convertMat(mat) {
		let craftMat

		switch (mat) {
			case "chainmail":
				craftMat = MC("chain");
				break;
			case "iron":
				craftMat = F(`#ingots/${mat}`);
				break;
			case "golden":
				craftMat = F(`#ingots/gold`);
				break;
			default:
				craftMat = MC(mat);
				break;
		}
		return craftMat
	}

	for (let i = 1; i < vanillaMats.length; i++) {
		let currMat = vanillaMats[i]
		let prevMat = vanillaMats[i - 1]

		armorPieces.vanilla.forEach(piece => {
			removeRecipeByOutput(e, [
				MC(`${currMat}_${piece}`)
			])
		})

		//helmet
		shapedSaveNBT(e, MC(`${currMat}_helmet`), [
			'BBB',
			'BAB'
		], {
			A: MC(`${prevMat}_helmet`),
			B: convertMat(currMat),
		})

		//chestplate
		shapedSaveNBT(e, MC(`${currMat}_chestplate`), [
			'BAB',
			'BBB',
			'BBB',
		], {
			A: MC(`${prevMat}_chestplate`),
			B: convertMat(currMat),
		})

		//leggings
		shapedSaveNBT(e, MC(`${currMat}_leggings`), [
			'BBB',
			'BAB',
			'B B'
		], {
			A: MC(`${prevMat}_leggings`),
			B: convertMat(currMat),
		})

		//boots
		shapedSaveNBT(e, MC(`${currMat}_boots`), [
			'BAB',
			'B B'
		], {
			A: MC(`${prevMat}_boots`),
			B: convertMat(currMat),
		})
	}
})