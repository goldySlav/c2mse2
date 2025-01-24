//priority: 1000

//Registry containing all crop-like growables.
const cropRegistry = [
    {
        type: 'cactus',
        crops: [
            {
                seed: 'minecraft:cactus',
                render: 'minecraft:cactus',
                plant: 'minecraft:cactus',
                substrate: 'sand'
            },
            {
                seed: 'pamhc2crops:cactusfruitseeditem',
                render: 'pamhc2crops:pamcactusfruitcrop',
                plant: 'pamhc2crops:cactusfruititem',
                substrate: 'coarse_dirt'
            },
            {
                seed: 'pamhc2crops:agaveseeditem',
                render: 'pamhc2crops:pamagavecrop',
                plant: 'pamhc2crops:agaveitem',
                substrate: 'coarse_dirt'
            }
        ]
    },
    {
        type: 'cane_like',
        crops: [
            {
                seed: 'minecraft:bamboo',
                render: 'minecraft:bamboo',
                plant: 'minecraft:bamboo',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:sugar_cane',
                render: 'minecraft:sugar_cane',
                plant: 'minecraft:sugar_cane',
                substrate: 'sand'
            }
        ]
    },
    {
        type: 'coral',
        crops: [
            {
                seed: 'minecraft:brain_coral',
                render: 'minecraft:brain_coral',
                plant: 'minecraft:brain_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:brain_coral_block',
                render: 'minecraft:brain_coral_block',
                plant: 'minecraft:brain_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:brain_coral_fan',
                render: 'minecraft:brain_coral_fan',
                plant: 'minecraft:brain_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'minecraft:bubble_coral',
                render: 'minecraft:bubble_coral',
                plant: 'minecraft:bubble_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:bubble_coral_block',
                render: 'minecraft:bubble_coral_block',
                plant: 'minecraft:bubble_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:bubble_coral_fan',
                render: 'minecraft:bubble_coral_fan',
                plant: 'minecraft:bubble_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'minecraft:fire_coral',
                render: 'minecraft:fire_coral',
                plant: 'minecraft:fire_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:fire_coral_block',
                render: 'minecraft:fire_coral_block',
                plant: 'minecraft:fire_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:fire_coral_fan',
                render: 'minecraft:fire_coral_fan',
                plant: 'minecraft:fire_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'minecraft:horn_coral',
                render: 'minecraft:horn_coral',
                plant: 'minecraft:horn_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:horn_coral_block',
                render: 'minecraft:horn_coral_block',
                plant: 'minecraft:horn_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:horn_coral_fan',
                render: 'minecraft:horn_coral_fan',
                plant: 'minecraft:horn_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'minecraft:tube_coral',
                render: 'minecraft:tube_coral',
                plant: 'minecraft:tube_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:tube_coral_block',
                render: 'minecraft:tube_coral_block',
                plant: 'minecraft:tube_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:tube_coral_fan',
                render: 'minecraft:tube_coral_fan',
                plant: 'minecraft:tube_coral_fan',
                substrate: 'water'
            }
        ]
    },
    {
        type: 'crop_fiber',
        crops: [
            {
                seed: 'pamhc2crops:cottonseeditem',
                render: 'pamhc2crops:pamcottoncrop',
                plant: 'pamhc2crops:cottonitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:flaxseeditem',
                render: 'pamhc2crops:pamflaxcrop',
                plant: 'pamhc2crops:flaxitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:juteseeditem',
                render: 'pamhc2crops:pamjutecrop',
                plant: 'pamhc2crops:juteitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:kenafseeditem',
                render: 'pamhc2crops:pamkenafcrop',
                plant: 'pamhc2crops:kenafitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:juteitem',
                render: 'pamhc2crops:pamjutecrop',
                plant: 'pamhc2crops:juteitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:sisalitem',
                render: 'pamhc2crops:pamsisalcrop',
                plant: 'pamhc2crops:sisalitem',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_fruit',
        crops: [
            {
                seed: 'minecraft:chorus_flower',
                render: 'minecraft:chorus_flower',
                plant: 'minecraft:chorus_fruit',
                substrate: 'end_stone'
            },
            {
                seed: 'pamhc2crops:strawberryseeditem',
                render: 'pamhc2crops:pamstrawberrycrop',
                plant: 'pamhc2crops:strawberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:raspberryseeditem',
                render: 'pamhc2crops:pamraspberrycrop',
                plant: 'pamhc2crops:raspberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:pineappleseeditem',
                render: 'pamhc2crops:pampineapplecrop',
                plant: 'pamhc2crops:pineappleitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:mulberryseeditem',
                render: 'pamhc2crops:pammulberrycrop',
                plant: 'pamhc2crops:mulberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:kiwiseeditem',
                render: 'pamhc2crops:pamkiwicrop',
                plant: 'pamhc2crops:kiwiitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:juniperberryseeditem',
                render: 'pamhc2crops:pamjuniperberrycrop',
                plant: 'pamhc2crops:juniperberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:huckleberryseeditem',
                render: 'pamhc2crops:pamhuckleberrycrop',
                plant: 'pamhc2crops:huckleberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:greengrapeseeditem',
                render: 'pamhc2crops:pamgreengrapecrop',
                plant: 'pamhc2crops:greengrapeitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:grapeseeditem',
                render: 'pamhc2crops:pamgrapecrop',
                plant: 'pamhc2crops:grapeitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:elderberryseeditem',
                render: 'pamhc2crops:pamelderberrycrop',
                plant: 'pamhc2crops:elderberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:cranberryseeditem',
                render: 'pamhc2crops:pamcranberrycrop',
                plant: 'pamhc2crops:cranberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:candleberryseeditem',
                render: 'pamhc2crops:pamcandleberrycrop',
                plant: 'pamhc2crops:candleberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:blueberryseeditem',
                render: 'pamhc2crops:pamblueberrycrop',
                plant: 'pamhc2crops:blueberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:blackberryseeditem',
                render: 'pamhc2crops:pamblackberrycrop',
                plant: 'pamhc2crops:blackberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:tomatoseeditem',
                render: 'pamhc2crops:pamtomatocrop',
                plant: 'pamhc2crops:tomatoitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:tomatilloseeditem',
                render: 'pamhc2crops:pamtomatillocrop',
                plant: 'pamhc2crops:tomatilloitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:cauliflowerseeditem',
                render: 'pamhc2crops:pamcauliflowercrop',
                plant: 'pamhc2crops:caulifloweritem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:rhubarbseeditem',
                render: 'pamhc2crops:pamrhubarbcrop',
                plant: 'pamhc2crops:rhubarbitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:sisalseeditem',
                render: 'pamhc2crops:pamsisalcrop',
                plant: 'pamhc2crops:sisalitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:bellpepperseeditem',
                render: 'pamhc2crops:pambellpeppercrop',
                plant: 'pamhc2crops:bellpepperitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:broccoliseeditem',
                render: 'pamhc2crops:pambroccolicrop',
                plant: 'pamhc2crops:broccoliitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:chilipepperseeditem',
                render: 'pamhc2crops:pamchilipeppercrop',
                plant: 'pamhc2crops:chilipepperitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:wintersquashseeditem',
                render: 'pamhc2crops:pamwintersquashcrop',
                plant: 'pamhc2crops:wintersquashitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:zucchiniseeditem',
                render: 'pamhc2crops:pamzucchinicrop',
                plant: 'pamhc2crops:zucchiniitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:eggplantseeditem',
                render: 'pamhc2crops:pameggplantcrop',
                plant: 'pamhc2crops:eggplantitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:cantaloupeseeditem',
                render: 'pamhc2crops:pamcantaloupecrop',
                plant: 'pamhc2crops:cantaloupeitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:cucumberseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:cucumberitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:alfalfaseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:alfalfaitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:aloeseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:aloeitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:barrelcactusseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:barrelcactusitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:canolaseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:canolaitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:cattailseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:cattailitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:chiaseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:chiaitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:cloudberryseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:cloudberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:lotusseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:lotusitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:nettlesseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:nettlesitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:nopalesseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:nopalesitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:sorghumseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:sorghumitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:truffleseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:truffleitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:wolfberryseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:wolfberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:yuccaseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:yuccaitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:bokchoyseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:bokchoy',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:calabashseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:calabashitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:guaranaseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:guaranaitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:papyrusseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:papyrusitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:sunchokeseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:sunchokeitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2foodcore:sunflowerseedsitem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'minecraft:sunflower',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_gourd',
        crops: [
            {
                seed: 'minecraft:pumpkin_seeds',
                render: 'minecraft:pumpkin',
                plant: 'minecraft:pumpkin',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_grain',
        crops: [
            {
                seed: 'minecraft:wheat_seeds',
                render: 'minecraft:wheat',
                plant: 'minecraft:wheat',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:barleyseeditem',
                render: 'pamhc2crops:pambarleycrop',
                plant: 'pamhc2crops:barleyitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:milletseeditem',
                render: 'pamhc2crops:pammilletcrop',
                plant: 'pamhc2crops:milletitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:oatsseeditem',
                render: 'pamhc2crops:pamoatscrop',
                plant: 'pamhc2crops:oatsitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:quinoaseeditem',
                render: 'pamhc2crops:pamquinoacrop',
                plant: 'pamhc2crops:quinoaitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:riceseeditem',
                render: 'pamhc2crops:pamricecrop',
                plant: 'pamhc2crops:riceitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:ryeseeditem',
                render: 'pamhc2crops:pamryecrop',
                plant: 'pamhc2crops:ryeitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:amaranthseeditem',
                render: 'pamhc2crops:pamamaranthcrop',
                plant: 'pamhc2crops:amaranthitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:cornseeditem',
                render: 'pamhc2crops:pamcorncrop',
                plant: 'pamhc2crops:cornitem',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_leafy',
        crops: [
            {
                seed: 'pamhc2crops:cabbageseeditem',
                render: 'pamhc2crops:pamcabbagecrop',
                plant: 'pamhc2crops:cabbageitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:kaleseeditem',
                render: 'pamhc2crops:pamkalecrop',
                plant: 'pamhc2crops:kaleitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:lettuceseeditem',
                render: 'pamhc2crops:pamlettucecrop',
                plant: 'pamhc2crops:lettuceitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:spinachseeditem',
                render: 'pamhc2crops:pamspinachcrop',
                plant: 'pamhc2crops:spinachitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:tealeafseeditem',
                render: 'pamhc2crops:pamtealeafcrop',
                plant: 'pamhc2crops:tealeafitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:spiceleafseeditem',
                render: 'pamhc2crops:pamspiceleafcrop',
                plant: 'pamhc2crops:spiceleafitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:kohlrabiseeditem',
                render: 'pamhc2crops:pamkohlrabicrop',
                plant: 'pamhc2crops:kohlrabiitem',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_legume',
        crops: [
            {
                seed: 'pamhc2crops:beanseeditem',
                render: 'pamhc2crops:pambeancrop',
                plant: 'pamhc2crops:beanitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:chickpeaseeditem',
                render: 'pamhc2crops:pamchickpeacrop',
                plant: 'pamhc2crops:chickpeaitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:lentilseeditem',
                render: 'pamhc2crops:pamlentilcrop',
                plant: 'pamhc2crops:lentilitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:soybeanseeditem',
                render: 'pamhc2crops:pamsoybeancrop',
                plant: 'pamhc2crops:soybeanitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:okraseeditem',
                render: 'pamhc2crops:pamokracrop',
                plant: 'pamhc2crops:okraitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:peasseeditem',
                render: 'pamhc2crops:pampeascrop',
                plant: 'pamhc2crops:peasitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:peanutseeditem',
                render: 'pamhc2crops:pampeanutcrop',
                plant: 'pamhc2crops:peanutitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:coffeebeanseeditem',
                render: 'pamhc2crops:pamcoffeebeancrop',
                plant: 'pamhc2crops:coffeebeanitem',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_melon',
        crops: [
            {
                seed: 'minecraft:melon_seeds',
                render: 'minecraft:melon',
                plant: 'minecraft:melon',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_root',
        crops: [
            {
                seed: 'minecraft:beetroot_seeds',
                render: 'minecraft:beetroots',
                plant: 'minecraft:beetroot',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:carrot',
                render: 'minecraft:carrots',
                plant: 'minecraft:carrot',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:potato',
                render: 'minecraft:potatoes',
                plant: 'minecraft:potato',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:arrowrootseeditem',
                render: 'pamhc2crops:pamarrowrootcrop',
                plant: 'pamhc2crops:arrowrootitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:cassavaseeditem',
                render: 'pamhc2crops:pamcassavacrop',
                plant: 'pamhc2crops:cassavaitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:garlicseeditem',
                render: 'pamhc2crops:pamgarliccrop',
                plant: 'pamhc2crops:garlicitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:jicamaseeditem',
                render: 'pamhc2crops:pamjicamacrop',
                plant: 'pamhc2crops:jicamaitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:onionseeditem',
                render: 'pamhc2crops:pamonioncrop',
                plant: 'pamhc2crops:onionitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:parsnipseeditem',
                render: 'pamhc2crops:pamparsnipcrop',
                plant: 'pamhc2crops:parsnipitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:radishseeditem',
                render: 'pamhc2crops:pamradishcrop',
                plant: 'pamhc2crops:radishitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:sweetpotatoseeditem',
                render: 'pamhc2crops:pamsweetpotatocrop',
                plant: 'pamhc2crops:sweetpotatoitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:taroseeditem',
                render: 'pamhc2crops:pamtarocrop',
                plant: 'pamhc2crops:taroitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:rutabagaseeditem',
                render: 'pamhc2crops:pamrutabagacrop',
                plant: 'pamhc2crops:rutabagaitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:turnipseeditem',
                render: 'pamhc2crops:pamturnipcrop',
                plant: 'pamhc2crops:turnipitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:waterchestnutseeditem',
                render: 'pamhc2crops:pamwaterchestnutcrop',
                plant: 'pamhc2crops:waterchestnutitem',
                substrate: 'water'
            },
            {
                seed: 'pamhc2crops:celeryseeditem',
                render: 'pamhc2crops:pamcelerycrop',
                plant: 'pamhc2crops:celeryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:asparagusseeditem',
                render: 'pamhc2crops:pamasparaguscrop',
                plant: 'pamhc2crops:asparagusitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:artichokeseeditem',
                render: 'pamhc2crops:pamartichokecrop',
                plant: 'pamhc2crops:artichokeitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:leekseeditem',
                render: 'pamhc2crops:pamleekcrop',
                plant: 'pamhc2crops:leekitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:scallionseeditem',
                render: 'pamhc2crops:pamscallioncrop',
                plant: 'pamhc2crops:scallionitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:brusselsproutseeditem',
                render: 'pamhc2crops:pambrusselsproutcrop',
                plant: 'pamhc2crops:brusselsproutitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:gingerseeditem',
                render: 'pamhc2crops:pamgingercrop',
                plant: 'pamhc2crops:gingeritem',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_seed',
        crops: [
            {
                seed: 'pamhc2crops:mustardseedsseeditem',
                render: 'pamhc2crops:pammustardseedscrop',
                plant: 'pamhc2crops:mustardseedsitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:sesameseedsseeditem',
                render: 'pamhc2crops:pamsesameseedscrop',
                plant: 'pamhc2crops:sesameseedsitem',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_vine',
        crops: [

        ]
    },
    {
        type: 'flower',
        crops: [
            {
                seed: 'minecraft:allium',
                render: 'minecraft:allium',
                plant: 'minecraft:allium',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:azure_bluet',
                render: 'minecraft:azure_bluet',
                plant: 'minecraft:azure_bluet',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:blue_orchid',
                render: 'minecraft:blue_orchid',
                plant: 'minecraft:blue_orchid',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:cornflower',
                render: 'minecraft:cornflower',
                plant: 'minecraft:cornflower',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:dandelion',
                render: 'minecraft:dandelion',
                plant: 'minecraft:dandelion',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:lilac',
                render: 'minecraft:lilac',
                plant: 'minecraft:lilac',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:lily_of_the_valley',
                render: 'minecraft:lily_of_the_valley',
                plant: 'minecraft:lily_of_the_valley',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:orange_tulip',
                render: 'minecraft:orange_tulip',
                plant: 'minecraft:orange_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:oxeye_daisy',
                render: 'minecraft:oxeye_daisy',
                plant: 'minecraft:oxeye_daisy',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:peony',
                render: 'minecraft:peony',
                plant: 'minecraft:peony',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:pink_tulip',
                render: 'minecraft:pink_tulip',
                plant: 'minecraft:pink_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:poppy',
                render: 'minecraft:poppy',
                plant: 'minecraft:poppy',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:red_tulip',
                render: 'minecraft:red_tulip',
                plant: 'minecraft:red_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:rose_bush',
                render: 'minecraft:rose_bush',
                plant: 'minecraft:rose_bush',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:white_tulip',
                render: 'minecraft:white_tulip',
                plant: 'minecraft:white_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:wither_rose',
                render: 'minecraft:wither_rose',
                plant: 'minecraft:wither_rose',
                substrate: 'soul_sand'
            }
        ]
    },
    {
        type: 'grass_like',
        crops: [
            {
                seed: 'minecraft:crimson_roots',
                render: 'minecraft:crimson_roots',
                plant: 'minecraft:crimson_roots',
                substrate: 'crimson_nylium'
            },
            {
                seed: 'minecraft:fern',
                render: 'minecraft:fern',
                plant: 'minecraft:fern',
                substrate: 'grass'
            },
            {
                seed: 'minecraft:large_fern',
                render: 'minecraft:large_fern',
                plant: 'minecraft:large_fern',
                substrate: 'grass'
            },
            {
                seed: 'minecraft:grass',
                render: 'minecraft:grass',
                plant: 'minecraft:grass',
                substrate: 'grass'
            },
            {
                seed: 'minecraft:nether_sprouts',
                render: 'minecraft:nether_sprouts',
                plant: 'minecraft:nether_sprouts',
                substrate: 'nether'
            },
            {
                seed: 'minecraft:seagrass',
                render: 'minecraft:seagrass',
                plant: 'minecraft:seagrass',
                substrate: 'water'
            },
            {
                seed: 'minecraft:warped_roots',
                render: 'minecraft:warped_roots',
                plant: 'minecraft:warped_roots',
                substrate: 'warped_nylium'
            }
        ]
    },
    {
        type: 'kelp_like',
        crops: [
            {
                seed: 'minecraft:kelp',
                render: 'minecraft:kelp_plant',
                plant: 'minecraft:kelp',
                substrate: 'water'
            },
        ]
    },
    {
        type: 'lily_like',
        crops: [
            {
                seed: 'minecraft:lily_pad',
                render: 'minecraft:lily_pad',
                plant: 'minecraft:lily_pad',
                substrate: 'water'
            }
        ]
    },
    {
        type: 'shroom',
        crops: [
            {
                seed: 'minecraft:nether_wart',
                render: 'minecraft:nether_wart',
                plant: 'minecraft:nether_wart',
                substrate: 'soul_sand'
            },
            {
                seed: 'minecraft:sea_pickle',
                render: 'minecraft:sea_pickle',
                plant: 'minecraft:sea_pickle',
                substrate: 'water'
            },
            {
                seed: 'pamhc2crops:whitemushroomseeditem',
                render: 'pamhc2crops:pamwhitemushroomcrop',
                plant: 'pamhc2crops:whitemushroomitem',
                substrate: 'mushroom'
            },
        ]
    },
    {
        type: 'shrub',
        crops: [
            {
                seed: 'minecraft:sweet_berries',
                render: 'minecraft:sweet_berry_bush',
                plant: 'minecraft:sweet_berries',
                substrate: 'dirt'
            },
        ]
    },
    {
        type: 'vine',
        crops: [
            {
                seed: 'minecraft:twisting_vines',
                render: 'minecraft:twisting_vines_plant',
                plant: 'minecraft:twisting_vines',
                substrate: 'warped_nylium'
            },
            {
                seed: 'minecraft:vine',
                render: 'minecraft:vine',
                plant: 'minecraft:vine',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:weeping_vines',
                render: 'minecraft:weeping_vines_plant',
                plant: 'minecraft:weeping_vines',
                substrate: 'crimson_nylium'
            }
        ]
    }
];
