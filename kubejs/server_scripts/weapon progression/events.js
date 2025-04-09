EntityEvents.death(e => {
    if (e.source.getType() == "player") {
        let player = e.source.player;
        let item = player.getMainHandItem();
        let itemTag = item.getOrCreateTag();

        for (const [weaponType, properties] of Object.entries(global.weapons)) {
            properties.forEach(property => {
                if (property.method == "itemstack"){
                    if (item.id == property.id && property.progress && property.progress_list) {

                        let currentTaskIndex = property.progress_list.findIndex(task => {
                            let kills = itemTag.get(`${task.target.split(":")[1]}_kills`) || 0;
                            return kills < task.count;
                        });
    
                        if (currentTaskIndex !== -1) {

                            let currentTask = property.progress_list[currentTaskIndex];
                            let taskTarget = currentTask.target;
                            let taskType = currentTask.target.split(":")[1];
                            let taskKills = itemTag.get(`${taskType}_kills`) || 0;
    

                            if (e.entity.getType() == taskTarget) {

                                itemTag.putInt(`${taskType}_kills`, parseInt(taskKills) + 1);
    
                                if (parseInt(taskKills) + 1 >= currentTask.count) {
                                    
                                    if (currentTask.reward == "random_enchant") {
                                        let availableEnchantments = [
                                            "minecraft:sharpness",
                                            "minecraft:unbreaking",
                                            "minecraft:looting",
                                            "minecraft:fire_aspect"
                                        ];
                                        let randomEnchantment = availableEnchantments[Math.floor(Math.random() * availableEnchantments.length)];
                                        
                                        let currentLevel = item.getEnchantmentLevel(randomEnchantment);
                                        let level = 1;

                                        if (currentLevel > 0) {
                                            level += currentLevel;
                                        }

                                        let enchantName = randomEnchantment.split(":")[1];
                                        console.log(enchantName)

                                        item.enchantStack(randomEnchantment, level)
                                        player.tell(Text.of("Your sword has been blessed with additional ").white()
                                            .append(Text.of(`${enchantName.charAt(0).toUpperCase() + enchantName.slice(1)} enchantment (+1 level)`)).color(0x007BEC)
                                        )
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }
    }
});