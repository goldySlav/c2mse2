//priority: 1

ServerEvents.tags("item", (event) => {
	function addBaseTool(item) {
		event.add(F("tools"), item)
		event.add(MC("tools"), item)
		event.add(MC("breaks_decorated_pots"), item)
	}
	
	toolTypes.forEach(tool => {
		addBaseTool(PET(`pure_emerald_${tool}`))
		event.add(MC(`${tool}s`), PET(`pure_emerald_${tool}`));
		event.add(MC(`${tool}s`), PET(`emerald_netherite_${tool}`));
	})
	
	function addBaseArmor(item) {
		event.add(F("armors"), item)
		event.add(F("armor"), item)
	}
	armorPieces.vanilla.forEach(piece => {
		addBaseArmor(PET(`pure_emerald_armor_${piece}`))
	})
	event.add(F("helmets"), PET("pure_emerald_armor_helmet"));
	event.add(F("armors/helmets"), PET("pure_emerald_armor_helmet"));
	event.add(F("helmets"), PET("emerald_netherite_armor_helmet"));
	event.add(F("armors/helmets"), PET("emerald_netherite_armor_helmet"));
	event.add(F("chestplates"), PET("pure_emerald_armor_chestplate"));
	event.add(F("armors/chestplates"), PET("pure_emerald_armor_chestplate"));
	event.add(F("chestplates"), PET("emerald_netherite_armor_chestplate"));
	event.add(F("armors/chestplates"), PET("emerald_netherite_armor_chestplate"));
	event.add(F("leggings"), PET("pure_emerald_armor_leggings"));
	event.add(F("armors/leggings"), PET("pure_emerald_armor_leggings"));
	event.add(F("leggings"), PET("emerald_netherite_armor_leggings"));
	event.add(F("armors/leggings"), PET("emerald_netherite_armor_leggings"));
	event.add(F("boots"), PET("pure_emerald_armor_boots"));
	event.add(F("armors/boots"), PET("pure_emerald_armor_boots"));
	event.add(F("boots"), PET("emerald_netherite_armor_boots"));
	event.add(F("armors/boots"), PET("emerald_netherite_armor_boots"));
});
