const $TileEntityMultiblock = Java.loadClass('mekanism.common.tile.prefab.TileEntityMultiblock')
const $TileEntityMekanism = Java.loadClass('mekanism.common.tile.base.TileEntityMekanism')
const $CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag')

const mapMekanismMultiblockToTaskID = {
    "fissionReactor":"0036D38202CF0DC4",
    "industrialTurbine":"13EB4C7E62ACBB0B",
    "evaporation":"11982C1C8B95A1FF",
    "inductionMatrix":"779C3021A94ABD69",
    "fusionReactor": "5BB7AAD1FC337828",
    "sps":"79B2122EF99ED7FC",
    "dynamicTank":"",
    "thermoelectricBoiler":"",
}

const mapMekanismFluidToTaskID = {
	"mekanism:ethene": "5EE383A466E56290",
    "mekanism:heavy_water": "487C0FDEACB9FF14",
	"ad_astra:oil": "4A38F7E6144862B4",
	"ad_astra:fuel": "067A4B09D21FF720",
}

const mapMekanismGasToTaskID = {
	"mekanism:ethene": "28AC198C2C973783",
	"mekanism:oxygen": "0AD69B6498B2FF5A",
	"mekanism:hydrogen": "274BAB8649C6F7E3",
    "mekanism:water_vapor": "6FD010D55631704A",
	"mekanism:sulfur_dioxide": "7565D3D59A8D43D3",
	"mekanism:sulfur_trioxide": "6EF43F344AD049BF",
	"mekanism:uranium_oxide": "46B24E83FD493099",
	"mekanism:sulfuric_acid": "299134F8D9980D33",
	"mekanism:hydrofluoric_acid": "7E5250F7ED09C414",
	"mekanism:uranium_hexafluoride": "75C7507F8F9A44A8",
    "mekanism:fissile_fuel": "5E6F0C6ECA9046C1",
    "mekanism:lithium": "019B941A1E8248CC",
	"kubejs:gaseous_oil": "70EF78829BA2F066",
    "mekanism:plutonium": "45AFB9EE6370D724",
	"mekanism:sodium": "0B886E2BF2D757A6",
    "mekanism:polonium": "30A7A275A47D1693",
    "mekanismgenerators:tritium": "7A693D431F13C7B3",
    "mekanismgenerators:deuterium": "601204EF00EBD673",
    "mekanismgenerators:fusion_fuel": "7915236F53138E9A",
    "kubejs:gaseous_fuel": "2F26286FCC885C6E",
	"kubejs:neutron_gas": "70FB15765ACFC45E",
    "mekanism:antimatter": "2E544E1DBA9A5464",
}

const mapMekanismInfusionToTaskID = {
	"mekanism:carbon": "41523167F224E4D0",
	//"mekanism:redstone": "",
}

const mapMekanismSlurryToTaskID = {
	//"kubejs:dirty_calorite": "",
	//"kubejs:clean_calorite": "",
}

ClientEvents.tick(event => {
    if (Client.hitResult != null && Client.hitResult.getType() == 'BLOCK') {
        let block = event.level.getBlock(Client.hitResult.getBlockPos())
        if (block.id.contains('mekanism')) {
            let blockEntity = block.entity
            // Multiblock handler
            if (blockEntity && blockEntity instanceof $TileEntityMultiblock) {
                if (blockEntity.getMultiblock().isFormed()) {
                    let manager = blockEntity.getManager()
                    if (manager) {
                        let managerName = manager.getName()
                        if (managerName) {
                            let taskString = mapMekanismMultiblockToTaskID[managerName]
                            if (taskString) {
                                let tag = new $CompoundTag
                                tag.putString('task', taskString)
                                event.player.sendData('customTask', tag)
                            }
                        }
                    }
                }
            }
            // Capability TE's
            if (blockEntity instanceof $TileEntityMekanism) {
                // Handles Fluid
                if (blockEntity.canHandleFluid()) {
                    let tanks = blockEntity.getFluidTanks(null)
                    tanks.forEach(tank => {
                        let fluid = tank.serializeNBT().stored?.FluidName
                        let taskString
                        if (fluid) {
                            taskString = mapMekanismFluidToTaskID[fluid.toString()]
                        }
                        if (taskString) {
                            let tag = new $CompoundTag
                            tag.putString('task', taskString)
                            event.player.sendData('customTask', tag)
                        }
                    })
                }

                // Handles Gas
                if (blockEntity.canHandleGas()) {
                    let tanks = blockEntity.getGasTanks(null)
                    tanks.forEach(tank => {
                        let gas = tank.getStack().getTypeRegistryName()
                        let taskString = mapMekanismGasToTaskID[gas.toString()]
                        if (taskString) {
                            let tag = new $CompoundTag
                            tag.putString('task', taskString)
                            event.player.sendData('customTask', tag)
                        }
                    })
                }

                // Handles Infusion
                if (blockEntity.canHandleInfusion()) {
                    let tanks = blockEntity.getInfusionTanks(null)
                    tanks.forEach(tank => {
                        let infuser = tank.getStack().getTypeRegistryName()
                        let taskString = mapMekanismInfusionToTaskID[infuser.toString()]
                        if (taskString) {
                            let tag = new $CompoundTag
                            tag.putString('task', taskString)
                            event.player.sendData('customTask', tag)
                        }
                    })
                }

                // Handles Slurry
                if (blockEntity.canHandleSlurry()) {
                    let tanks = blockEntity.getSlurryTanks(null)
                    tanks.forEach(tank => {
                        let slurry = tank.getStack().getTypeRegistryName()
                        let taskString = mapMekanismSlurryToTaskID[slurry.toString()]
                        if (taskString) {
                            let tag = new $CompoundTag
                            tag.putString('task', taskString)
                            event.player.sendData('customTask', tag)
                        }
                    })
                }
            }
        }
    }
})