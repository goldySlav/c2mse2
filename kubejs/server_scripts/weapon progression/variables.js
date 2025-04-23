global.weapons = {
    minecraft: [
        {
            method: "itemstack",
            id: MC("wooden_sword"),
            progress: true,
            progress_list: [
                {
                    task: "kill",
                    title: "Zombie Kills",
                    target: "minecraft:zombie",
                    count: 50,
                    reward: "random_enchant"
                },
            ]
        },
        {
            method: "itemstack",
            id: MC("stone_sword"),
            progress: true,
            progress_list: [
                {
                    task: "kill",
                    title: "Skeleton Kills",
                    target: "minecraft:skeleton",
                    count: 100,
                    reward: "random_enchant"
                },
            ]
        },
        {
            method: "itemstack",
            id: MC("iron_sword"),
            progress: true,
            progress_list: [
                {
                    task: "kill",
                    title: "Spider Kills",
                    target: "minecraft:spider",
                    count: 150,
                    reward: "random_enchant"
                },
            ]
        },
        {
            method: "itemstack",
            id: MC("golden_sword"),
            progress: true,
            progress_list: [
                {
                    task: "kill",
                    title: "Creeper Kills",
                    target: "minecraft:creeper",
                    count: 200,
                    reward: "random_enchant"
                },
            ]
        },
        {
            method: "itemstack",
            id: MC("diamond_sword"),
            progress: true,
            progress_list: [
                {
                    task: "kill",
                    title: "Zombified Piglin Kills",
                    target: "minecraft:zombified_piglin",
                    count: 250,
                    reward: "random_enchant"
                },
                {
                    task: "kill",
                    title: "Piglin Kills",
                    target: "minecraft:piglin",
                    count: 300,
                    reward: "random_enchant"
                },
            ]
        },
        {
            method: "itemstack",
            id: PET("pure_emerald_sword"),
            progress: true,
            progress_list: [
                {
                    task: "kill",
                    title: "Piglin Brute Kills",
                    target: "minecraft:piglin_brute",
                    count: 350,
                    reward: "random_enchant"
                },
            ]
        },
        {
            method: "itemstack",
            id: MC("netherite_sword"),
            progress: true,
            progress_list: [
                {
                    task: "kill",
                    title: "Ghast Kills",
                    target: "minecraft:ghast",
                    count: 400,
                    reward: "random_enchant"
                },
            ]
        },
        {
            method: "itemstack",
            id: PET("emerald_netherite_sword"),
            progress: true,
            progress_list: [
                {
                    task: "kill",
                    title: "Blaze Kills",
                    target: "minecraft:blaze",
                    count: 450,
                    reward: "random_enchant"
                },
                {
                    task: "kill",
                    title: "Evoker Kills",
                    target: "minecraft:evoker",
                    count: 500,
                    reward: "random_enchant"
                },
                {
                    task: "kill",
                    title: "Wither Kills",
                    target: "minecraft:wither",
                    count: 50,
                    reward: "random_enchant"
                },
            ]
        },
    ]
}