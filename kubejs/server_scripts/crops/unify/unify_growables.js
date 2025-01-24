//priority: 900

const basicGreenVoltage = 8

ServerEvents.recipes(event => {
	removeRecipeByType(event, [
		BP("crop"),
		BP("soil"),
	])

    soilRegistry.forEach((soil) => {
        soils_botany_pots(event, soil);
    });

    cropRegistry.forEach((cropCategories) => {
        var type = cropCategories.type;
        cropCategories.crops.forEach((crop) => {
            crops_botany_pots(event, type, crop);
        });
    });

    treeRegistry.forEach((treeCategories) => {
        var type = treeCategories.type;
        treeCategories.trees.forEach((tree) => {
            trees_botany_pots(event, type, tree);
        });
    });
});

function soils_botany_pots(event, soil) {
    var input = soil.block,
        display;

    //exceptions
    switch (input) {
        case 'minecraft:lava_bucket':
            display = { block: 'minecraft:lava' };
            break;
        case 'minecraft:water_bucket':
            display = { block: 'minecraft:water' };
            break;
        default:
            display = { block: soil.block };
    }

    if (soil.block.includes('farmland')) {
        display.properties = { moisture: 7 };
    }

    event.custom({
        type: 'botanypots:soil',
        input: { item: input },
        display: display,
        categories: soil.categories,
        growthModifier: soil.growthModifier
    });
}

function crops_botany_pots(event, type, crop) {
    // Ticks Per Day: 24000
    // Ticks Per Minute: 1200
    var baseGrowthTicks = 6400,
        growthModifier = 1.0;

    // chance, minRolls, maxRolls
    var primary = [1.0, 10, 20],
        growthTicks = baseGrowthTicks,
        plantSecondary;

    if (crop.plantSecondary) {
        plantSecondary = crop.plantSecondary;
    }
    /*
    types:  cactus, cane_like, coral, crop_fiber, crop_fruit, 
            crop_gourd, crop_grain, crop_leafy, crop_legume,  
            crop_melon, crop_root, crop_seed, crop_vine, flower, 
            grass_like, kelp_like, lily_like, shroom, shrub, vine
    */
    switch (type) {
        case 'coral':
            growthModifier = 2.0;
            break;
        case 'crop_gourd':
            growthModifier = 1.5;
            break;
        case 'crop_melon':
            growthModifier = 1.5;
            break;
        case 'crop_seed':
            primary = [1.0, 10, 30];
            break;
        case 'flower':
            growthModifier = 0.5;
            break;
        case 'grass_like':
            growthModifier = 0.25;
            break;
        case 'lily_like':
            growthModifier = 0.25;
            break;
        case 'shroom':
            primary = [1.0, 10, 30];
            break;
        case 'vine':
            growthModifier = 0.5;
            return;
        default:
        //default
    }

    var input = crop.seed,
        outputs = [
            {
                chance: primary[0],
                output: { item: crop.plant },
                minRolls: primary[1],
                maxRolls: primary[2]
            }
        ];
    if (type.includes('crop_')) {
        //add seeds to crop type output
        outputs.push({
            chance: 0.2,
            output: { item: crop.seed },
            minRolls: 1,
            maxRolls: 5
        });
    }

    if (plantSecondary) {
        //add any secondary
        outputs.push({
            chance: 0.05,
            output: { item: plantSecondary },
            minRolls: 1,
            maxRolls: 5
        });
    }

    event.custom({
        type: 'botanypots:crop',
        seed: { item: input },
        categories: [crop.substrate],
        growthTicks: growthTicks * growthModifier,
        display: { block: crop.render },
        drops: outputs
    });
}

function trees_botany_pots(event, type, tree) {
    // Ticks Per Day: 24000
    // Ticks Per Minute: 1200
    var baseGrowthTicks = 6400,
        growthModifier = 1.0;

    // chance, minRolls, maxRolls
    var saplingRate = [1.0, 3, 6],
        trunkRate = [1.0, 15, 20],
        leafRate = [1.0, 15, 20],
        stickRate = [1.0, 5, 10],
        extraDecorationRate = [0.2, 5, 10],
        fruitRate = [0.5, 5, 10],
        growthTicks = baseGrowthTicks;

    var input = tree.sapling,
        outputs = [
            {
                chance: saplingRate[0],
                output: { item: tree.sapling },
                minRolls: saplingRate[1],
                maxRolls: saplingRate[2]
            }
        ];
    /*
    types:  tree, tree_shroom
    */
    if (type == 'tree') {
        outputs.push(
            {
                chance: trunkRate[0],
                output: { item: tree.trunk },
                minRolls: trunkRate[1],
                maxRolls: trunkRate[2]
            },
            {
                chance: leafRate[0],
                output: { item: tree.leaf },
                minRolls: leafRate[1],
                maxRolls: leafRate[2]
            }
        );
        if (tree.extraDecoration) {
            outputs.push({
                chance: extraDecorationRate[0],
                output: { item: tree.extraDecoration },
                minRolls: extraDecorationRate[1],
                maxRolls: extraDecorationRate[2]
            });
        }
        var stickType = 'minecraft:stick';
        outputs.push({
            chance: stickRate[0],
            output: { item: stickType },
            minRolls: stickRate[1],
            maxRolls: stickRate[2]
        });
        if (tree.fruit) {
            //add any fruits
            outputs.push({
                chance: fruitRate[0],
                output: { item: tree.fruit },
                minRolls: fruitRate[1],
                maxRolls: fruitRate[2]
            });
        }
    }

    if (type == 'tree_shroom') {
        growthModifier = 0.5;
    }

    event.custom({
        type: 'botanypots:crop',
        seed: { item: input },
        categories: [tree.substrate],
        growthTicks: growthTicks * growthModifier,
        display: { block: input },
        drops: outputs
    });
}
