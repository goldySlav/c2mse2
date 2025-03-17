//priority: 2

JEIEvents.hideItems(event => {
	event.hide(/ae2:(white|orange|light_blue|lime|pink|gray|light_gray|cyan|purple|brown)_paint_ball/)
	event.hide(/ae2:\b.*_lumen_paint_ball/)
	event.hide(/ae2:(white|orange|magenta|light_blue|lime|pink|gray|light_gray|cyan|purple|brown|green|blue|red|black|yellow)_(smart|covered|glass|covered_dense|smart_dense)_cable/)
	event.hide(/enderio:clear_glass*/)
	event.hide(/enderio:fused_quartz*/)
	event.hide(/enderio:clear_glass_(p|np|m|nm|a|na|d|dp|dnp|dm|dnm|da|dna|e|ep|enp|em|enm|ea|ena)*/)
	event.hide(/enderio:fused_quartz_(p|np|m|nm|a|na|d|dp|dnp|dm|dnm|da|dna|e|ep|enp|em|enm|ea|ena)*/)
	event.hide(/enderio:broken_spawner/)
	event.hide(/tconstruct:.*_sand_cast/)
})