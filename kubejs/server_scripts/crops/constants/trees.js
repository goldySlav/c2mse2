//priority: 1000

const treeRegistry = [
    {
        type: 'tree',
        trees: [
            {
                sapling: 'minecraft:acacia_sapling',
                trunk: 'minecraft:acacia_log',
                leaf: 'minecraft:acacia_leaves',
                substrate: 'dirt',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'minecraft:birch_sapling',
                trunk: 'minecraft:birch_log',
                leaf: 'minecraft:birch_leaves',
                substrate: 'dirt',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'minecraft:dark_oak_sapling',
                trunk: 'minecraft:dark_oak_log',
                leaf: 'minecraft:dark_oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'minecraft:jungle_sapling',
                trunk: 'minecraft:jungle_log',
                leaf: 'minecraft:jungle_leaves',
                fruit: 'minecraft:cocoa_beans',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'minecraft:oak_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'minecraft:spruce_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'minecraft:spruce_leaves',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:apple_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:avocado_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:avocadoitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:candlenut_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:candlenutitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:cherry_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:cherryitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:chestnut_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:chestnutitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:gooseberry_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:gooseberryitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:lemon_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:lemonitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:nutmeg_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:nutmegitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:orange_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:orangeitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:peach_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:peachitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:pear_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:pearitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:plum_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:plumitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:walnut_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:walnutitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:spiderweb_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'minecraft:string',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:hazelnut_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:hazelnutitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:pawpaw_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:pawpawitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:soursop_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:soursopitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:almond_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:almonditem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:apricot_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:apricotitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:banana_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:bananaitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:cashew_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:cashewitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:cinnamon_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:cinnamonitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:coconut_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:coconutitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:date_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:dateitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:dragonfruit_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:dragonfruititem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:durian_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:durianitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:fig_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:figitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:grapefruit_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:grapefruititem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:lime_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:limeitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:mango_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:mangoitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:olive_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:oliveitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:papaya_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:papayaitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:paperbark_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'minecraft:paper',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:pecan_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:pecanitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:peppercorn_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:peppercornitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:persimmon_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:persimmonitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:pistachio_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:pistachioitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:pomegranate_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:pomegranateitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:starfruit_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:starfruititem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:vanillabean_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:vanillabeanitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:breadfruit_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:breadfruititem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:guava_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:guavaitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:jackfruit_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:jackfruititem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:lychee_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:lycheeitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:passionfruit_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:passionfruititem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:rambutan_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:rambutanitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:tamarind_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:tamarinditem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:maple_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:spruce_leaves',
                fruit: 'pamhc2trees:maplesyrupitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:pinenut_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:spruce_leaves',
                fruit: 'pamhc2trees:pinenutitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:acorn_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:acornitem',
                substrate: 'dirt',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'tconstruct:earth_slime_sapling',
                trunk: 'tconstruct:greenheart_log',
                leaf: 'tconstruct:earth_slime_leaves',
                fruit: 'minecraft:slime_ball',
                substrate: 'slime',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'tconstruct:sky_slime_sapling',
                trunk: 'tconstruct:skyroot_log',
                leaf: 'tconstruct:sky_slime_leaves',
                fruit: 'tconstruct:sky_slime_ball',
                substrate: 'slime',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'tconstruct:ender_slime_sapling',
                trunk: 'tconstruct:enderbark_log',
                leaf: 'tconstruct:ender_slime_leaves',
                fruit: 'tconstruct:ender_slime_ball',
                substrate: 'slime',
                rate: { living: 50, dead: 6 }
            },
        ]
    },
    {
        type: 'tree_shroom',
        trees: [
            {
                sapling: 'minecraft:brown_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'minecraft:brown_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:crimson_fungus',
                trunk: 'minecraft:crimson_stem',
                leaf: 'minecraft:nether_wart_block',
                substrate: 'crimson_nylium'
            },
            {
                sapling: 'minecraft:red_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'minecraft:red_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:warped_fungus',
                trunk: 'minecraft:warped_stem',
                leaf: 'minecraft:warped_wart_block',
                substrate: 'warped_nylium'
            },
        ]
    }
];
