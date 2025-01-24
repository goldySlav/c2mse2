// priority: 0

ServerEvents.recipes(e => {
	const vanillaMats = ["wooden", "stone", "iron", "golden", "diamond"]

	function convertMat(mat) {
		let craftMat

		switch (mat) {
			case "wooden":
				craftMat = MC("#planks");
				break;
			case "stone":
				craftMat = F("#stone");
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

		toolTypes.forEach(type => {
			removeRecipeByOutput(e, [
				MC(`${currMat}_${type}`)
			])
		})

		//shovel
		shapedSaveNBT(e, MC(`${currMat}_shovel`), [
			'B',
			'A',
		], {
			A: MC(`${prevMat}_shovel`),
			B: convertMat(currMat),
		})

		//pickaxe
		shapedSaveNBT(e, MC(`${currMat}_pickaxe`), [
			'BBB',
			' A ',
		], {
			A: MC(`${prevMat}_pickaxe`),
			B: convertMat(currMat),
		})

		//axe
		shapedSaveNBT(e, MC(`${currMat}_axe`), [
			'BB',
			'BA',
		], {
			A: MC(`${prevMat}_axe`),
			B: convertMat(currMat),
		})

		//sword
		shapedSaveNBT(e, MC(`${currMat}_sword`), [
			'B',
			'B',
			'A',
		], {
			A: MC(`${prevMat}_sword`),
			B: convertMat(currMat),
		})

		//hoe
		shapedSaveNBT(e, MC(`${currMat}_hoe`), [
			'BB',
			'A ',
		], {
			A: MC(`${prevMat}_hoe`),
			B: convertMat(currMat),
		})
	}
})