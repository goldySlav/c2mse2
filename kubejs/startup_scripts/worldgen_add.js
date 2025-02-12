let anchors

WorldgenEvents.add(event => {
	anchors = event.anchors

	//osmiumOreSpawn(event)
	//leadOreSpawn(event)
	//uraniumOreSpawn(event)
	//tinOreSpawn(event)
	//fluoriteOreSpawn(event)
	//naquadahOreSpawn(event)
})

function osmiumOreSpawn(event) {
	event.addOre(ore => {
		ore.id = KJ('osmium_ore') // (optional, but recommended) custom id for the feature
		ore.biomes = MD("mining")

		ore.addTarget(MC('#stone_ore_replaceables'), M('osmium_ore'))
		ore.addTarget(MC('deepslate'), M('deepslate_osmium_ore'))

		ore.count([5, 15])              // generate between 5 and 15 veins (chosen at random), you could use a single number here for a fixed amount of blocks
		  .squared()                    // randomly spreads the ores out across the chunk, instead of generating them in a column
		  .triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
			anchors.absolute(2),        // the lower bound
			anchors.absolute(100)	      // the upper bound
		  )

		// more, optional parameters (default values are shown here)
		ore.size = 16                            // max. vein size
		ore.noSurface = 0.1                      // chance to discard if the ore would be exposed to air (0 - 1.0)
		ore.worldgenLayer = 'underground_ores'   // what generation step the ores should be generated in (see below)
		ore.chance = 0						               // if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
	})
}

function leadOreSpawn(event) {
	event.addOre(ore => {
		ore.id = KJ('lead_ore') // (optional, but recommended) custom id for the feature
		ore.biomes = MD("mining")

		ore.addTarget(MC('#stone_ore_replaceables'), M('lead_ore'))
		ore.addTarget(MC('deepslate'), M('deepslate_lead_ore'))

		ore.count([2, 8])              // generate between 5 and 15 veins (chosen at random), you could use a single number here for a fixed amount of blocks
		  .squared()                    // randomly spreads the ores out across the chunk, instead of generating them in a column
		  .triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
			anchors.absolute(2),        // the lower bound
			anchors.absolute(100)	      // the upper bound
		  )

		// more, optional parameters (default values are shown here)
		ore.size = 8                            // max. vein size
		ore.noSurface = 0.1                      // chance to discard if the ore would be exposed to air (0 - 1.0)
		ore.worldgenLayer = 'underground_ores'   // what generation step the ores should be generated in (see below)
		ore.chance = 0						               // if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
	})
}

function uraniumOreSpawn(event) {
	event.addOre(ore => {
		ore.id = KJ('uranium_ore') // (optional, but recommended) custom id for the feature
		ore.biomes = MD("mining")

		ore.addTarget(MC('#stone_ore_replaceables'), M('uranium_ore'))
		ore.addTarget(MC('deepslate'), M('deepslate_uranium_ore'))

		ore.count([2, 8])              // generate between 5 and 15 veins (chosen at random), you could use a single number here for a fixed amount of blocks
		  .squared()                    // randomly spreads the ores out across the chunk, instead of generating them in a column
		  .triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
			anchors.absolute(2),        // the lower bound
			anchors.absolute(100)	      // the upper bound
		  )

		// more, optional parameters (default values are shown here)
		ore.size = 8                            // max. vein size
		ore.noSurface = 0.1                      // chance to discard if the ore would be exposed to air (0 - 1.0)
		ore.worldgenLayer = 'underground_ores'   // what generation step the ores should be generated in (see below)
		ore.chance = 0						               // if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
	})
}

function tinOreSpawn(event) {
	event.addOre(ore => {
		ore.id = KJ('tin_ore') // (optional, but recommended) custom id for the feature
		ore.biomes = MD("mining")

		ore.addTarget(MC('#stone_ore_replaceables'), M('tin_ore'))
		ore.addTarget(MC('deepslate'), M('deepslate_tin_ore'))

		ore.count([5, 12])              // generate between 5 and 15 veins (chosen at random), you could use a single number here for a fixed amount of blocks
		  .squared()                    // randomly spreads the ores out across the chunk, instead of generating them in a column
		  .triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
			anchors.absolute(2),        // the lower bound
			anchors.absolute(100)	      // the upper bound
		  )

		// more, optional parameters (default values are shown here)
		ore.size = 12                            // max. vein size
		ore.noSurface = 0.1                      // chance to discard if the ore would be exposed to air (0 - 1.0)
		ore.worldgenLayer = 'underground_ores'   // what generation step the ores should be generated in (see below)
		ore.chance = 0						               // if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
	})
}

function fluoriteOreSpawn(event) {
	event.addOre(ore => {
		ore.id = KJ('fluorite_ore') // (optional, but recommended) custom id for the feature
		ore.biomes = MD("mining")

		ore.addTarget(MC('#stone_ore_replaceables'), M('fluorite_ore'))
		ore.addTarget(MC('deepslate'), M('deepslate_fluorite_ore'))

		ore.count([5, 20])              // generate between 5 and 15 veins (chosen at random), you could use a single number here for a fixed amount of blocks
		  .squared()                    // randomly spreads the ores out across the chunk, instead of generating them in a column
		  .triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
			anchors.absolute(2),        // the lower bound
			anchors.absolute(100)	      // the upper bound
		  )

		// more, optional parameters (default values are shown here)
		ore.size = 12                            // max. vein size
		ore.noSurface = 0.1                      // chance to discard if the ore would be exposed to air (0 - 1.0)
		ore.worldgenLayer = 'underground_ores'   // what generation step the ores should be generated in (see below)
		ore.chance = 0						               // if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
	})
}

function naquadahOreSpawn(event) {
	event.addOre(ore => {
		ore.id = KJ('naquadah_ore') // (optional, but recommended) custom id for the feature
		ore.biomes = MD("mining")

		ore.addTarget(MC('#stone_ore_replaceables'), M_E('naquadah_ore'))
		ore.addTarget(MC('deepslate'), M('deepslate_uranium_ore'))

		ore.count([2, 8])              // generate between 5 and 15 veins (chosen at random), you could use a single number here for a fixed amount of blocks
		  .squared()                    // randomly spreads the ores out across the chunk, instead of generating them in a column
		  .triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
			anchors.absolute(2),        // the lower bound
			anchors.absolute(100)	      // the upper bound
		  )

		// more, optional parameters (default values are shown here)
		ore.size = 8                            // max. vein size
		ore.noSurface = 0.1                      // chance to discard if the ore would be exposed to air (0 - 1.0)
		ore.worldgenLayer = 'underground_ores'   // what generation step the ores should be generated in (see below)
		ore.chance = 0						               // if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
	})
}