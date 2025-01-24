WorldgenEvents.remove(event => {
  event.removeOres(props => {
    props.worldgenLayer = 'underground_ores';
    props.blocks = [
      "draconicevolution:nether_draconium_ore",
      "draconicevolution:overworld_draconium_ore",
      "draconicevolution:deepslate_draconium_ore",
	  
	  "powah:uraninite_ore",
	  "powah:uraninite_ore_poor",
	  "powah:uraninite_ore_dense",
	  "powah:deepslate_uraninite_ore",
	  "powah:deepslate_uraninite_ore_poor",
	  "powah:deepslate_uraninite_ore_dense",
	  
	  "rftoolsbase:dimensionalshard_overworld",
	  "rftoolsbase:dimensionalshard_nether",
	  "rftoolsbase:dimensionalshard_end",
	  
	  "sgjourney:nether_naquadah_ore",
    ]
  })
})