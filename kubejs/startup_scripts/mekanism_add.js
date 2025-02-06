const $Gas = Java.loadClass('mekanism.api.chemical.gas.Gas')
const $GasBuilder = Java.loadClass('mekanism.api.chemical.gas.GasBuilder')

StartupEvents.registry('mekanism:gas', event => {
    event.createCustom('kubejs:neutron_gas', () => new $Gas($GasBuilder.builder().tint(0x000000)))
    event.createCustom('kubejs:gaseous_oil', () => new $Gas($GasBuilder.builder().tint(0x525252)))
    event.createCustom('kubejs:gaseous_fuel', () => new $Gas($GasBuilder.builder().tint(0x91553f)))
    event.createCustom('kubejs:gaseous_cryo_fuel', () => new $Gas($GasBuilder.builder().tint(0x4b8a9c)))
    event.createCustom('kubejs:depleted_ether_gas', () => new $Gas($GasBuilder.builder().tint(0x7bada3)))
    event.createCustom('kubejs:gaseous_iron_compound', () => new $Gas($GasBuilder.builder().tint(0xbababa)))
    event.createCustom('kubejs:gaseous_gold_compound', () => new $Gas($GasBuilder.builder().tint(0xc4c03b)))
    event.createCustom('kubejs:gaseous_copper_compound', () => new $Gas($GasBuilder.builder().tint(0x996139)))
    event.createCustom('kubejs:gaseous_zinc_compound', () => new $Gas($GasBuilder.builder().tint(0x43574c)))
    event.createCustom('kubejs:gaseous_brass_compound', () => new $Gas($GasBuilder.builder().tint(0xba8b49)))
    event.createCustom('kubejs:gaseous_tungsten_compound', () => new $Gas($GasBuilder.builder().tint(0x394d2f)))
    event.createCustom('kubejs:gaseous_steel_compound', () => new $Gas($GasBuilder.builder().tint(0x454545)))
    event.createCustom('kubejs:gaseous_void_steel_compound', () => new $Gas($GasBuilder.builder().tint(0x132909)))
    event.createCustom('kubejs:gaseous_certus_compound', () => new $Gas($GasBuilder.builder().tint(0x03cffc)))
    event.createCustom('kubejs:gaseous_diamond_compound', () => new $Gas($GasBuilder.builder().tint(0x009dbf)))
})


const $Slurry = Java.loadClass('mekanism.api.chemical.slurry.Slurry')
const $SlurryBuilder = Java.loadClass('mekanism.api.chemical.slurry.SlurryBuilder')

StartupEvents.registry('mekanism:slurry', event => {
    let slurry = (ore, color) => {
        event.createCustom(`kubejs:dirty_${ore}_slurry`, () => new $Slurry($SlurryBuilder.dirty().tint(color).ore(`kubejs:ore/${ore}`)))
        event.createCustom(`kubejs:clean_${ore}_slurry`, () => new $Slurry($SlurryBuilder.clean().tint(color).ore(`kubejs:ore/${ore}`)))
    }

    //slurry('test', 0xA020F0)
})


const $InfuseType = Java.loadClass('mekanism.api.chemical.infuse.InfuseType')
const $InfuseTypeBuilder = Java.loadClass('mekanism.api.chemical.infuse.InfuseTypeBuilder')

StartupEvents.registry('mekanism:infuse_type', event => {
    event.createCustom('kubejs:waste', () => new $InfuseType($InfuseTypeBuilder.builder().tint(0x295e20)))
})


const $Pigment = Java.loadClass('mekanism.api.chemical.pigment.Pigment')
const $PigmentBuilder = Java.loadClass('mekanism.api.chemical.pigment.PigmentBuilder')

StartupEvents.registry('mekanism:pigment', event => {
    //event.createCustom('kubejs:test_pigment', () => new $Pigment($PigmentBuilder.builder().tint(0xA020F0)))
})