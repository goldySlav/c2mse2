// priority: 0

function emiHideItems() {
  console.info("Hiding items from EMI...");

  let obj = {
    removed: [],
  };
  
  //manually input list
  
  const itemsToHide = [
	//"fluid:mod:fluid_id"
	//"item:mod:item_id"
  ]

  itemsToHide.forEach((i) => {
    obj.removed.push(i);
  });
  
  //remove by regex
  
  function addByRegex(regex, mod) {
	Ingredient.of(mod)
	  .getStacks()
	  .forEach((item) => {
	  if (regex.test(item.getId())) {
		obj.removed.push(`item:${item.getId()}`);
	  }
	});
  }
  
  addByRegex(/quark:(lootr_)?(ancient|azalea|blossom|oak|spruce|birch|jungle|acacia|dark_oak|crimson|warped|mangrove|bamboo|cherry|nether_brick|purpur|prismarine)(_trapped)?_chest/, "@quark")
  addByRegex(/quark:(ancient|azalea|blossom)(_chest)?_boat/, "@quark")
  addByRegex(/quark:(ancient|azalea|blossom|oak|spruce|birch|jungle|acacia|dark_oak|crimson|warped|mangrove|bamboo|cherry)_ladder/, "@quark")
  addByRegex(/quark:(\w+_)?ancient*/, "@quark")
  addByRegex(/quark:(\w+_)?blossom*/, "@quark")
  addByRegex(/quark:(\w+_)?azalea*/, "@quark")
  addByRegex(/quark:(\w+_)?shard*/, "@quark")
  addByRegex(/quark:(\w+_)?stool*/, "@quark")
  addByRegex(/quark:(\w+_)?framed_glass*/, "@quark")
  addByRegex(/quark:(\w+_)?corundum*/, "@quark")
  addByRegex(/quark:vertical_\w+_planks/, "@quark")
  addByRegex(/quark:\w+_bookshelf/, "@quark")
  addByRegex(/quark:\w+_post/, "@quark")
  addByRegex(/quark:\w+_crate/, "@quark")
  addByRegex(/quark:\w+_sack/, "@quark")
  addByRegex(/quark:\w+_hedge/, "@quark")
  addByRegex(/quark:\w+_leaf_carpet/, "@quark")
  addByRegex(/quark:music_disc/, "@quark")
  addByRegex(/quark:\w+_crystal_lamp/, "@quark")

  obj.removed = obj.removed.filter((v, i, a) => a.indexOf(v) === i); //remove duplicates
  JsonIO.write("kubejs/assets/emi/index/stacks/hidden_stacks.json", obj);
}

//emiHideItems(); //run only once, then disable