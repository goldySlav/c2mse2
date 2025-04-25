//priority: 3005

// Mod shortcuts
const MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id ? (id.startsWith('#') ? '#' : "") : "") + domain + (id ? ":" : "") + (id ? id.replace('#', '') : "")
const AA = (id, x) => MOD("ad_astra", id, x)
const AA_GA = (id, x) => MOD("ad_astra_giselle_addon", id, x)
const AE2 = (id, x) => MOD("ae2", id, x)
const AE2_PRE = (id, x) => MOD("appliede", id, x)
const AE2_R = (id, x) => MOD("merequester", id, x)
const AE2_M = (id, x) => MOD("appmek", id, x)
const AE2_C = (id, x) => MOD("appliedcooking", id, x)
const AE2_A = (id, x) => MOD("advanced_ae", id, x)
const AE2_E = (id, x) => MOD("expatternprovider", id, x)
const AE2_NA = (id, x) => MOD("ae2netanalyser", id, x)
const AF = (id, x) => MOD("appflux", id, x)
const AE = (id, x) => MOD("appliede", id, x)
const ART = (id, x) => MOD("artifacts", id, x)
const MER = (id, x) => MOD("merequester", id, x)
const CF = (id, x) => MOD("comforts", id, x)
const MC = (id, x) => MOD("minecraft", id, x)
const KJ = (id, x) => MOD("kubejs", id, x)
const FS = (id, x) => MOD("functionalstorage", id, x)
const F = (id, x) => MOD("forge", id, x)
const Q = (id, x) => MOD("quark", id, x)
const PHC_FC = (id, x) => MOD("pamhc2foodcore", id, x)
const PHC_FE = (id, x) => MOD("pamhc2foodextended", id, x)
const PHC_C = (id, x) => MOD("pamhc2crops", id, x)
const PHC_T = (id, x) => MOD("pamhc2trees", id, x)
const DU = (id, x) => MOD("darkutils", id, x)
const MU = (id, x) => MOD("miniutilities", id, x)
const RTB = (id, x) => MOD("rftoolsbase", id, x)
const TM = (id, x) => MOD("torchmaster", id, x)
const M = (id, x) => MOD("mekanism", id, x)
const MG = (id, x) => MOD("mekanismgenerators", id, x)
const M_E = (id, x) => MOD("mekanism_extras", id, x)
const WH = (id, x) => MOD("woodenhopper", id, x)
const CG = (id, x) => MOD("cobblefordays", id, x)
const CP = (id, x) => MOD("compressium", id, x)
const EC = (id, x) => MOD("extendedcrafting", id, x)
const X = (id, x) => MOD("xnet", id, x)
const PRE = (id, x) => MOD("projecte", id, x)
const PREXP = (id, x) => MOD("projectexpansion", id, x)
const PREXT = (id, x) => MOD("projectextended", id, x)
const FFB = (id, x) => MOD("farmingforblockheads", id, x)
const CFB = (id, x) => MOD("cookingforblockheads", id, x)
const BP = (id, x) => MOD("botanypots", id, x)
const IFC = (id, x) => MOD("ironfurnaces", id, x)
const FN = (id, x) => MOD("fluxnetworks", id, x)
const FH = (id, x) => MOD("flopper", id, x)
const PP = (id, x) => MOD("prettypipes", id, x)
const PP_F = (id, x) => MOD("ppfluids", id, x)
const WST = (id, x) => MOD("wstweaks", id, x)
const PAU = (id, x) => MOD("packagedauto", id, x)
const PEX = (id, x) => MOD("packagedexcrafting", id, x)
const PEXEX = (id, x) => MOD("packagedexexcrafting", id, x)
const IC = (id, x) => MOD("ironchest", id, x)
const DE = (id, x) => MOD("draconicevolution", id, x)
const SBP = (id, x) => MOD("sophisticatedbackpacks", id, x)
const EXD = (id, x) => MOD("exdeorum", id, x)
const MGC = (id, x) => MOD("megacells", id, x)
const TC = (id, x) => MOD("trashcans", id, x)
const TS = (id, x) => MOD("tombstone", id, x)
const GS = (id, x) => MOD("glassential", id, x)
const LIO = (id, x) => MOD("laserio", id, x)
const EIO = (id, x) => MOD("enderio", id, x)
const CM = (id, x) => MOD("cagedmobs", id, x)
const CR = (id, x) => MOD("create", id, x)
const CR_A = (id, x) => MOD("createaddition", id, x)
const CR_EI = (id, x) => MOD("create_enchantment_industry", id, x)
const CR_S = (id, x) => MOD("createsifter", id, x)
const CR_ME = (id, x) => MOD("create_mechanical_extruder", id, x)
const CR_ET = (id, x) => MOD("createendertransmission", id, x)
const CR_N = (id, x) => MOD("create_netherless", id, x)
const PR_C = (id, x) => MOD("projectred_core", id, x)
const PR_T = (id, x) => MOD("projectred_transmission", id, x)
const PR_I = (id, x) => MOD("projectred_illumination", id, x)
const PR_INT = (id, x) => MOD("projectred_integration", id, x)
const WSM = (id, x) => MOD("witherstormmod", id, x)
const IF = (id, x) => MOD("industrialforegoing", id, x)
const IFS = (id, x) => MOD("industrialforegoingsouls", id, x)
const IF_MIFA = (id, x) => MOD("mifa", id, x)
const ER = (id, x) => MOD("endrem", id, x)
const MB = (id, x) => MOD("metalbarrels", id, x)
const PZ = (id, x) => MOD("pipez", id, x)
const FB = (id, x) => MOD("framedblocks", id, x)
const CB_M = (id, x) => MOD("cb_microblock", id, x)
const P = (id, x) => MOD("powah", id, x)
const AP = (id, x) => MOD("apotheosis", id, x)
const MD = (id, x) => MOD("mining_dimension", id, x)
const C = (id, x) => MOD("curios", id, x)
const HS = (id, x) => MOD("heartstone", id, x)
const NMW = (id, x) => MOD("nomowanderer", id, x)
const MI_C = (id, x) => MOD("manyideas_core", id, x)
const MI_D = (id, x) => MOD("manyideas_doors", id, x)
const MVS = (id, x) => MOD("morevanillashields", id, x)
const SR = (id, x) => MOD("summoningrituals", id, x)
const PET = (id, x) => MOD("pureemeraldtools", id, x)
const RC = (id, x) => MOD("rechiseled", id, x)
const ES = (id, x) => MOD("enderstorage", id, x)
const ENT = (id, x) => MOD("entangled", id, x)
const TCT = (id, x) => MOD("tconstruct", id, x)
const LB = (id, x) => MOD("laserbridges", id, x)
const MBCK = (id, x) => MOD("morebuckets", id, x)
const IR = (id, x) => MOD("industrialrenewal", id, x)


const processingTimesDefault = {
	milling: 300,
	crushing: 100,
}

const removeRecipeByID = (e, recipes) => {
    recipes.forEach(recipe => {
        e.remove({ id: recipe })
    })
}

const removeRecipeByType = (e, recipes) => {
    recipes.forEach(recipe => {
        e.remove({ type: recipe })
    })
}

const removeRecipeByMod = (e, recipes) => {
    recipes.forEach(recipe => {
        e.remove({ mod: recipe })
    })
}

const removeRecipeByInput = (e, recipes) => {
    recipes.forEach(recipe => {
        if (Array.isArray(recipe)) {
            e.remove({ type: recipe[1], input: recipe[0] })
        } else {
            e.remove({ input: recipe })
        }
    })
}

const removeRecipeByOutput = (e, recipes) => {
    recipes.forEach(recipe => {
        if (Array.isArray(recipe)) {
            e.remove({ type: recipe[1], output: recipe[0] })
        } else {
            e.remove({ output: recipe })
        }
    })
}

const removeRecipeByInputOutput = (e, recipes) => {
    recipes.forEach(recipe => {
        e.remove({ input: recipe })
        e.remove({ output: recipe })
    })
}

const shapedSaveNBT = (event, output, patternArr, inputObj) => {
	event.shaped(output, patternArr, inputObj).modifyResult((inventory, itemstack) => {
		let item = inventory.find(Item.of(inputObj.A))
        if (item.nbt === null) return itemstack
        let nbt = item.nbt
        nbt.Damage = 0
        return itemstack.withNBT(nbt)
	})
}

const donutCraftFull = (event, output, ring, center) => {
	event.shaped(output, [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: center,
		S: ring
	})
}

const donutCraftEmpty = (event, output, ring) => {
	event.shaped(output, [
		'SSS',
		'S S',
		'SSS'
	], {
		S: ring
	})
}

const toolTypes = ["shovel", "pickaxe", "axe", "sword", "hoe"]
const armorPieces = {
    vanilla: ["helmet", "chestplate", "leggings", "boots"],
	meka: ["helmet", "bodyarmor", "pants", "boots"],
}

const customRecipes = {
	create: {
		sifting: function (e, outputArr, item, mesh, ticks) {
			ticks = ticks ? ticks : 500
			let meshStr
			
			switch (mesh) {
				case 1:
					meshStr = CR_S("string_mesh");
					break;
				case 3:
					meshStr = CR_S("zinc_mesh");
					break;
				case 4:
					meshStr = CR_S("brass_mesh");
					break;
				case 5:
					meshStr = CR_S("custom_mesh");
					break;
				case 6:
					meshStr = CR_S("andesite_mesh");
					break;
				default:
					meshStr = CR_S("string_mesh");
					break;
			}

			e.custom({
				type: CR_S("sifting"),
				ingredients: [
					toRecipeJsonItem(meshStr),
					toRecipeJsonItem(item),
				],
				results: toRecipeJsonItem(outputArr),
				processingTime: ticks
			})
		},
		liquidFuel: function (e, fluidTag, amount, superHeated, ticks) {
			ticks = ticks ? ticks : 4800
			e.custom({
			  type: CR_A("liquid_burning"),
			  input: {
				fluidTag: fluidTag,
				amount: amount,
			  },
			  superheated: superHeated == true,
			  burnTime: ticks,
			})
		},
		ifiniDeploying: function (e, output, input, tool) {
			e.custom({
				type: CR("deploying"),
				ingredients: [
					toRecipeJsonItem(input),
					toRecipeJsonItem(tool)
				],
				results: [
					toRecipeJsonItem(output)
				],
				keepHeldItem: true
			})
		},
		charge: function (e, output, input, nrg) {
			nrg = nrg ? nrg : 10000
			e.custom({
				type: CR_A("charging"),
				input: toRecipeJsonItem(input),
				result: toRecipeJsonItem(output),
				energy: nrg,
			})
		},
		disenchanting: function(event, outputItemsFluidsFormattedToJson, inputItems) {
			event.custom({
				type: CR_EI("disenchanting"),
				ingredients: toRecipeJsonItem(inputItems),
				results: outputItemsFluidsFormattedToJson,
			})
		},
	},
	ae2: {
		transform: {
			fluid: function (e, output, inputArr, fluidTag) {
			if (!fluidTag) {
				fluidTag = MC("water")
			}

			e.custom({
				type: AE2("transform"),
				circumstance: {
					type: "fluid",
					tag: fluidTag
				},
				ingredients: toRecipeJsonItem(inputArr),
				result: toRecipeJsonItem(output)
			})
		},
			explosion: function (e, output, inputArr) {
				e.custom({
					type: AE2("transform"),
					circumstance: {
						type: "explosion"
					},
					ingredients: toRecipeJsonItem(inputArr),
					result: toRecipeJsonItem(output)
				})
			},
		},
		charge: function (e, output, input) {
			e.custom({
				type: AE2("charger"),
				ingredient: toRecipeJsonItem(input),
				result: toRecipeJsonItem(output)
			})
		},
	},
	ad_astra: {
		compressing: function (e, output, input, energy, ticks) {
			ticks = ticks ? ticks : 20
			energy = energy ? energy : 20
			e.custom({
				type: AA("compressing"),
			    cookingtime: ticks,
			    energy: energy,
				ingredient: toRecipeJsonItem(input),
				result: {
					id: output
				}
			})
		},
	},
	industrialforegoing: {
		dissolution: function (e, output, inputArr, fluid, fluidAmount, ticks) {
			ticks = ticks ? ticks : 300
			e.custom({
				type: IF("dissolution_chamber"),
				input: toRecipeJsonItem(inputArr),
				inputFluid: `{Amount:${fluidAmount},FluidName:\"${fluid}\"}`,
				output: toRecipeJsonItem(output),
				processingTime: ticks
			})
		},
	},
	exdeorum: {
		sieving: function(e, output, input, mesh, chance) {
			chance = chance ? chance : 0.3
			let meshStr
			
			switch (mesh) {
				case 1:
					meshStr = EXD("string_mesh");
					break;
				case 2:
					meshStr = EXD("flint_mesh");
					break;
				case 3:
					meshStr = EXD("iron_mesh");
					break;
				case 4:
					meshStr = EXD("golden_mesh");
					break;
				case 5:
					meshStr = EXD("diamond_mesh");
					break;
				case 6:
					meshStr = EXD("netherite_mesh");
					break;
				default:
					meshStr = EXD("string_mesh");
					break;
			}
			
			e.custom({
				type: EXD("sieve"),
				ingredient:toRecipeJsonItem(input),
				mesh: meshStr,
				result: output,
				result_amount:{
					type: MC("binomial"),
					n:1.0,
					p:chance,
				},
			})
		},
	},
	draconicevolution: {
		fusion_craft: function (event, output, core, inputs, tier) {
			let energy
			switch (tier) {
				case 1:
					tier = "DRACONIUM";
					energy = 3200000000;
					break;
				case 2:
					tier = "WYVERN";
					energy = 25600000000
					break;
				case 3:
					tier = "DRACONIC";
					energy = 204800000000
					break;
				case 4:
					tier = "CHAOTIC";
					energy = 1600000000000
					break;
				default:
					tier = "DRACONIUM";
					energy = 3200000000;
			}
			
			const inputsArr = []

			inputs.forEach(item => {

				const firstChar = item.substring(0, 1)
				const firstCharToNum = Number(firstChar)
				const startsWithInt = Number.isInteger(firstCharToNum)
				const multiple = startsWithInt ? firstCharToNum : 1
				item = startsWithInt ? item.substring(3) : item
			  
				const startsWithHash = item.startsWith('#')
				item = startsWithHash ? item.substring(1) : item
			  
				for (let i = 0; i < multiple; i++) {
					inputsArr.push(startsWithHash ? { tag: item } : { item: item })
				}
			})
			
			event.custom({
				type: DE("fusion_crafting"),
				result: {
					item: output
				},
				catalyst: {
					item: core
				},
				total_energy: energy,
				tier: tier,
				ingredients: inputsArr
			})
		}
	},
	witherstormmod: {
		beacon_item_crafting: function (event, output, inputArr, onlyMain) {
			onlyMain = onlyMain == true
			const conditionStr = onlyMain ? "main_activated" : "all_supports"
			
			event.custom({
				type: WSM("item_craft_super_beacon"),
				condition: conditionStr,
				ingredients: toRecipeJsonItem(inputArr),
				result: toRecipeJsonItem(output),
			})
		},
	},
	expatternprovider: {
		cutter: function(event, outputItemId, outputItemAmount, inputItemId, inputItemAmount, inputFluidId, inputFluidAmount) {
			event.custom({
				type: AE2_E("circuit_cutter"),
				fluid_input: {
					amount: inputFluidAmount,
					ingredient: {
						fluid: inputFluidId
					}
				},
				item_input: {
					amount: inputItemAmount,
					ingredient: {
						item: inputItemId
					}
				},
				output: {
					count: outputItemAmount,
					item: outputItemId
				}
			})
		}
	},
	mekanism: {
		infusion_conversion: function(event, infuseType, infuseAmount, itemId) {
			event.custom({
				type: M("infusion_conversion"),
				input: {
					ingredient: {
						item: itemId,
					}
				},
				output: {
					amount: infuseAmount,
					infuse_type: infuseType,
				}
			})
		},
		fission: function(event, inputGas, inputGasAmount, outputGas, outputGasAmount, heatAmount) {
			heatAmount = heatAmount ? heatAmount : 1
			event.custom({
				type: M("fission"),
				input: {
					gas: inputGas,
					amount: inputGasAmount,
				},
				output: {
					gas: outputGas,
					amount: outputGasAmount,
				},
				heat: heatAmount,
			})
		},
		condensentrating: function(event, fluidId, fluidAmount, gasId, gasAmount) {
			event.custom({
				type: M("rotary"),
				fluidInput: {
					amount: fluidAmount,
					fluid: fluidId
				},
				fluidOutput: {
					amount: fluidAmount,
					fluid: fluidId
				},
				gasInput: {
					amount: gasAmount,
					gas: gasId
				},
				gasOutput: {
					amount: gasAmount,
					gas: gasId
				}
			})
		},
		oxidizing: function(event, item, gasId, gasAmount) {
			event.custom({
				type: M("oxidizing"),
				input: {
					ingredient: toRecipeJsonItem(item),
				},
				output: {
					amount: gasAmount,
					gas: gasId,
				}
			})
		},
		painting: function(event, outputId, inputId, pigmentColor, pigmentAmount) {
			pigmentAmount = pigmentAmount ? pigmentAmount : 128
			event.custom({
				type: M("painting"),
				chemicalInput: {
					amount: pigmentAmount,
					pigment: M(pigmentColor)
				},
				itemInput: {
					ingredient: {
						item: inputId
					}
				},
				output: {
					item: outputId
				}
			})
		},
		gas_conversion: function(event, gasOutput, gasAmount, itemInput) {
			event.custom({
				type: M("gas_conversion"),
			    input: {
					ingredient: toRecipeJsonItem(itemInput)
				},
				output: {
					amount: gasAmount,
					gas: gasOutput
			   }
			})
		},
		activating: function(event, gasOutput, gasOutputAmount, gasInput, gasInputAmount) {
			event.custom({
				type: M('activating'),
				input: { amount: 4, gas: M('plutonium') },
				output: { amount: 1, gas: KJ('neutron_gas') }
			})
		},
		compressing: function(event, itemOutput, itemInput, gasInput, gasInputAmount) {
			gasInputAmount = gasInputAmount ? gasInputAmount : 1
			event.custom({
				type: M("compressing"),
				chemicalInput: { amount: gasInputAmount, gas: gasInput },
				itemInput: {
					ingredient: toRecipeJsonItem(itemInput)
				},
				output: toRecipeJsonItem(itemOutput)
			})
		},
		crystallizing: function(event, outputItem, inputGasFluid, inputGasFluidAmount, chemicalType) {
			chemicalType = chemicalType ? chemicalType : 'gas'
			event.custom({
				type: M('crystallizing'),
				chemicalType: chemicalType,
				input: { amount: inputGasFluidAmount, gas: inputGasFluid },
				output: outputItem,
			})
		},
	},
	tconstruct: {
		
	},
	enderio: {
		soulbinding: function(event, to, from, soul, energy, levels) {
			const obj = {
				type: EIO("soul_binding"),
				energy: energy,
				exp: levels,
				input: {},
				output: to
			}
			
			from.substring(0, 1) === "#" ? obj.input.tag = from.slice(1) : obj.input.item = from
			soul.includes(":") ? obj.entity_type = soul : obj.mob_category = soul
			event.custom(obj)
		},
	},
}

const toRecipeJsonItem = (items) => {
	if (Array.isArray(items)) {
		items = items.map(item => {
			let returnObj = {}
      
			item = item.toString()
			let isTag = item.includes("#")
   
			let itemArr = item.split(" ")
      
			if (item.match(/[0-9]x/)) {
				returnObj.count = Number(item.split("x ")[0])
				item = itemArr[1]
      
				if (itemArr.length > 2) {
				  returnObj.chance = Number(itemArr[2])
				}
			} else {
				if (itemArr.length > 1) {
				  returnObj.chance = Number(itemArr[1])
				}
			}
      
			isTag ? returnObj.tag = item.replace("#", "") : returnObj.item = item
      
			return returnObj
		})
	} else {
		let returnObj = {}
    
		items = items.toString()
		let isTag = items.includes("#")
    
		let itemsArr = items.split(" ")
    
		if (items.match(/[0-9]x/)) {
			returnObj.count = Number(items.split("x ")[0])
			items = itemsArr[1]
      
			if (itemsArr.length > 2) {
				returnObj.chance = Number(itemsArr[2])
			}
		} else {
			if (itemsArr.length > 1) {
				returnObj.chance = Number(itemsArr[1])
			}
		}
    
		isTag ? returnObj.tag = items.replace("#", "") : returnObj.item = items
    
		items = returnObj
	}

	return items
}

const toRecipeJsonFluid = (fluids) => {
	if (Array.isArray(fluids)) {
		fluids = fluids.map(fluid => {
			let amount = 1
			fluid = fluid.toString()
			let isTag = fluid.includes("#")
			fluid = fluid.replace("#", "")
			if (fluid.match(/[0-9]x/)) {
				amount = Number(fluid.split("x ")[0])
				fluid = fluid.split(" ")[1]
			}
			let returnObj = { amount: amount }
			isTag ? returnObj.tag = fluid : returnObj.fluid = fluid
			return returnObj
		})
	} else {
		let amount = 1
		fluids = fluids.toString()
		let isTag = fluids.includes("#")
		fluids = fluids.replace("#", "")
		if (fluids.match(/[0-9]x/)) {
			amount = Number(fluids.split("x ")[0])
			fluids = fluids.split(" ")[1]
		}
		let returnObj = { amount: amount }
		isTag ? returnObj.tag = fluids : returnObj.fluid = fluids
		fluids = returnObj
	}

	return fluids
}

const woodTypes = {
	minecraft: {
		log: [
			"oak",
			"spruce",
			"birch",
			"jungle",
			"acacia",
			"dark_oak",
			"mangrove",
			"cherry",
		],
		stem: [
			"warped",
			"crimson",
		],
		block: [
			"bamboo",
		],
	},
	ad_astra: {
		log: [
			"glacian",
		],
		stem: [
			"aeronos",
			"strophar",
		],
	},
	witherstormmod: {
		log: [
			"tainted",
		],
	},
	deeperdarker: {
		log: [
			"echo",
		],
	},
	cataclysm: {
		stem: [
			"chorus",
		],
	},
}

const colours = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
const dyes = []
colours.forEach(color => {
	dyes.push(MC(`${color}_dye`))
})

const componentSizes = {
	ae2: ["1k", "4k", "16k", "64k", "256k"],
	appflux: ["1k", "4k", "16k", "64k", "256k"],
	megacells: ["1m", "4m", "16m", "64m", "256m"],
}

//singularities
const singularities = [
	{ id: "the_ultimate_dust", core: KJ("the_ultimate_dust") },
	{ id: "the_ultimate_star", core: KJ("the_ultimate_star") },
	{ id: "the_ultimate_stew", core: KJ("ultimate_stew") },
	{ id: "the_ultimate_matter", core: KJ("the_ultimate_matter") },
	{ id: "the_ultimate_fuel", core: IFC("rainbow_coal") },
	{ id: "the_ultimate_ingot", core: EC("the_ultimate_ingot") },
	{ id: "the_ultimate_pearl", core: KJ("the_ultimate_pearl") },
	{ id: "emerald", core: F("#gems/emerald") },
	{ id: "diamond", core: F("#gems/diamond") },
	{ id: "lapis_lazuli", core: F("#gems/lapis") },
	{ id: "quartz", core: F("#gems/quartz") },
	{ id: "amethyst", core: F("#gems/amethyst") },
	{ id: "certus_quartz", core: AE2("certus_quartz_crystal") },
	{ id: "charged_certus_quartz", core: AE2("charged_certus_quartz_crystal") },
	{ id: "fluix", core: F("#gems/fluix") },
	{ id: "redstone_crystal", core: F("#gems/redstone") },
	{ id: "fluorite", core: F("#gems/fluorite") },
	{ id: "kinetic_mechanism", core: KJ("kinetic_mechanism") },
	{ id: "sealed_mechanism", core: KJ("sealed_mechanism") },
	{ id: "precision_mechanism", core: CR("precision_mechanism") },
	{ id: "inductive_mechanism", core: KJ("inductive_mechanism") },
	{ id: "calculation_mechanism", core: KJ("calculation_mechanism") },
	{ id: "abstruse_mechanism", core: KJ("abstruse_mechanism") },
	{ id: "integrated_mechanism", core: KJ("integrated_mechanism") },
	{ id: "embedded_mechanism", core: KJ("embedded_mechanism") },
	{ id: "portable_mechanism", core: KJ("portable_mechanism") },
	{ id: "electric_mechanism", core: KJ("electric_mechanism") },
	{ id: "polished_coke", core: KJ("polished_coke") },
	{ id: "electron_tube", core: CR("electron_tube") },
	{ id: "ae2", core: AE2("singularity") },
	{ id: "coil", core: KJ("radiant_coil") },
	{ id: "silicon", core: AE2("silicon") },
	{ id: "calculation_processor", core: KJ("calculation_processor_wafer") },
	{ id: "engineering_processor", core: KJ("engineering_processor_wafer") },
	{ id: "logic_processor", core: KJ("logic_processor_wafer") },
	{ id: "energy_processor", core: KJ("energy_processor_wafer") },
	{ id: "accumulation_processor", core: KJ("accumulation_processor_wafer") },
	{ id: "quantum_processor", core: KJ("quantum_processor_wafer") },
	{ id: "computation_matrix", core: KJ("computation_matrix") },
	{ id: "zero", core: KJ("zero") },
	{ id: "one", core: KJ("one") },
	{ id: "two", core: KJ("two") },
	{ id: "three", core: KJ("three") },
	{ id: "four", core: KJ("four") },
	{ id: "five", core: KJ("five") },
	{ id: "six", core: KJ("six") },
	{ id: "seven", core: KJ("seven") },
	{ id: "eight", core: KJ("eight") },
	{ id: "nine", core: KJ("nine") },
	{ id: "plastic", core: IF("plastic") },
	{ id: "pink_slime", core: IF("pink_slime") },
	{ id: "ether_gem", core: KJ("ether_gem") },
	{ id: "storage_256k", core: KJ("wafer_component_256k") },
	{ id: "storage_256m", core: KJ("wafer_component_256m") },
	{ id: "core_256k", core: KJ("core_256k_wafer") },
	{ id: "transmutation_interface", core: AE2_PRE("emc_interface") },
	{ id: "ex_transmutation_interface", core: AE2_E("ex_emc_interface") },
	{ id: "klein_star", core: PRE("klein_star_ein") },
	{ id: "magnum_star", core: PREXP("magnum_star_ein") },
	{ id: "colossal_star", core: PREXP("colossal_star_ein") },
	{ id: "gargantuan_star", core: PREXP("gargantuan_star_ein") },
	{ id: "infinite_fuel", core: PREXP("infinite_fuel") },
	{ id: "screwdriver", core: KJ("unstable_screwdriver") },
	{ id: "saw", core: KJ("unstable_saw") },
	{ id: "chromatic_resonator", core: KJ("unstable_chromatic_resonator") },
	{ id: "battery", core: IR("battery") },
	{ id: "industrial_battery", core: IR("battery_lithium") },
	{ id: "calculator", core: KJ("unstable_charged_calculator") },
	{ id: "cobblestone_generator", core: CG("tier_5") },
	{ id: "experience_nugget", core: CR("experience_nugget") },
	{ id: "experience_bottle", core: MC("experience_bottle") },
	{ id: "hyper_experience_bottle", core: CR_EI("hyper_experience_bottle") },
	{ id: "cow_jar", core: CFB("cow_jar") },
	{ id: "flux_core", core: FN("flux_core") },
	{ id: "heartstone", core: HS("heartstone") },
	{ id: "pity_frame", core: IF("machine_frame_pity") },
	{ id: "simple_frame", core: IF("machine_frame_simple") },
	{ id: "advanced_frame", core: IF("machine_frame_advanced") },
	{ id: "supreme_frame", core: IF("machine_frame_supreme") },
	{ id: "laser_node", core: LIO("laser_node") },
	{ id: "universal_pipe", core: PZ("universal_pipe") },
	{ id: "pretty_pipe", core: PP("pipe") },
	{ id: "teleportation_core", core: M("teleportation_core") },
	{ id: "ultimate_control_circuit", core: M("ultimate_control_circuit") },
	{ id: "reprocessed_fissile_fragment", core: M("reprocessed_fissile_fragment") },
	{ id: "quantum_entangloporter", core: M("quantum_entangloporter") },
	{ id: "ultimate_energy_cube", core: M("ultimate_energy_cube") },
	{ id: "ultimate_fluid_tank", core: M("ultimate_fluid_tank") },
	{ id: "ultimate_chemical_tank", core: M("ultimate_chemical_tank") },
	{ id: "energy_tablet", core: M("energy_tablet") },
	{ id: "robit", core: M("robit") },
	{ id: "radioactive_cell_component", core: MGC("radioactive_cell_component") },
	{ id: "the_final_opinium_core", core: MU("the_final_opinium_core") },
	{ id: "magical_egg", core: MU("magical_egg") },
	{ id: "me_package_component", core: PAU("me_package_component") },
	{ id: "battery_nitro", core: P("battery_nitro") },
	{ id: "pipe_module_utility", core: KJ("pipe_module_utility") },
	{ id: "pipe_module_tier_1", core: KJ("pipe_module_tier_1") },
	{ id: "pipe_module_tier_2", core: KJ("pipe_module_tier_2") },
	{ id: "pipe_module_tier_3", core: KJ("pipe_module_tier_3") },
	{ id: "bottled_cloud", core: Q("bottled_cloud") },
	{ id: "megatorch", core: TM("megatorch") },
	{ id: "ultimate_trash_can", core: TC("ultimate_trash_can") },
	{ id: "ultimate_bin", core: M("ultimate_bin") },
	{ id: "relay_mk1", core: PRE("relay_mk1") },
	{ id: "relay_mk2", core: PRE("relay_mk2") },
	{ id: "relay_mk3", core: PRE("relay_mk3") },
	{ id: "collector_mk1", core: PRE("collector_mk1") },
	{ id: "collector_mk2", core: PRE("collector_mk2") },
	{ id: "collector_mk3", core: PRE("collector_mk3") },
	{ id: "teleporter", core: MD("teleporter") },
	{ id: "cursed_earth", core: MU("cursed_earth") },
	{ id: "blessed_earth", core: MU("blessed_earth") },
	{ id: "blursed_earth", core: MU("blursed_earth") },
	{ id: "antimatter", core: M("pellet_antimatter") },
	{ id: "experience_infused_emerald", core: PET("pure_emerald") },
	{ id: "universe_piece", core: KJ("universe_piece") },
	{ id: "the_ultimate_shard", core: KJ("the_ultimate_shard") },
]

const singularityId = id => Item.of(EC('singularity'), { Id:EC(id) }).strongNBT()

const singularitiesList = []
singularities.forEach(singularity => {
	singularitiesList.push(singularityId(singularity.id))
})

const souledEggedEntities = [
	MC("allay"), MC("axolotl"), MC("bat"), MC("bee"), MC("blaze"), MC("camel"), MC("cat"), MC("cave_spider"), 
	MC("chicken"), MC("cod"), MC("cow"), MC("creeper"), MC("dolphin"), MC("donkey"), MC("drowned"), 
	MC("elder_guardian"), MC("enderman"), MC("endermite"), MC("evoker"), MC("fox"), MC("frog"), MC("ghast"), 
	MC("glow_squid"), MC("goat"), MC("guardian"), MC("hoglin"), MC("horse"), MC("husk"), 
	MC("iron_golem"), MC("llama"), MC("magma_cube"), MC("mooshroom"), MC("mule"), MC("ocelot"), MC("panda"), 
	MC("parrot"), MC("phantom"), MC("pig"), MC("piglin"), MC("piglin_brute"), MC("pillager"), MC("polar_bear"), 
	MC("pufferfish"), MC("rabbit"), MC("ravager"), MC("salmon"), MC("sheep"), MC("shulker"), MC("silverfish"), 
	MC("skeleton"), MC("skeleton_horse"), MC("slime"), MC("sniffer"), MC("snow_golem"), MC("spider"), 
	MC("squid"), MC("stray"), MC("strider"), MC("tadpole"), MC("trader_llama"), MC("tropical_fish"), 
	MC("turtle"), MC("vex"), MC("villager"), MC("vindicator"), MC("wandering_trader"), MC("witch"), MC("wolf"), 
	MC("wither_skeleton"), MC("zoglin"), MC("zombie"), MC("zombie_horse"), MC("zombie_villager"), 
	MC("zombified_piglin"), Q("forgotten"), Q("foxhound"), Q("shiba"), AA("corrupted_lunarian"),
	AA("star_crawler"), AA("martian_raptor"), AA("pygro"),
	AA("zombified_pygro"), AA("pygro_brute"), AA("mogler"), AA("zombified_mogler"), AA("sulfur_creeper"),
	AA("glacian_ram"), ART("mimic"), WSM("sickened_bee"), WSM("sickened_cat"), 
	WSM("sickened_chicken"), WSM("sickened_cow"), WSM("sickened_creeper"), WSM("sickened_iron_golem"), 
	WSM("sickened_mushroom_cow"), WSM("sickened_parrot"), WSM("sickened_phantom"), WSM("sickened_pig"), 
	WSM("sickened_pillager"), WSM("sickened_skeleton"), WSM("sickened_snow_golem"), WSM("sickened_spider"), 
	WSM("sickened_villager"), WSM("sickened_vindicator"), WSM("sickened_wolf"), WSM("sickened_zombie"), 
	WSM("tentacle"), WSM("withered_symbiont"), TCT("sky_slime"), TCT("ender_slime"),
	//AM("grizzly_bear"), AM("roadrunner"), AM("bone_serpent"),
	//AM("gazelle"), AM("crocodile"), AM("fly"), AM("hummingbird"), AM("orca"), AM("sunbird"), AM("gorilla"),
	//AM("crimson_mosquito"), AM("rattlesnake"), AM("endergrade"), AM("hammerhead_shark"), AM("lobster"),
	//AM("komodo_dragon"), AM("capuchin_monkey"), AM("centipede"), AM("warped_toad"), AM("moose"), AM("mimicube"),
	//AM("raccoon"), AM("blobfish"), AM("seal"), AM("cockroach"), AM("shoebill"), AM("elephant"),
	//AM("soul_vulture"), AM("snow_leopard"), AM("spectre"), AM("crow"), AM("alligator_snapping_turtle"), 
	//AM("mungus"), AM("mantis_shrimp"), AM("guster"), AM("warped_mosco"), AM("straddler"), AM("stradpole"),
	//AM("emu"), AM("platypus"), AM("dropbear"), AM("tasmanian_devil"), AM("kangaroo"), AM("cachalot_whale"), 
	//AM("leafcutter_ant"), AM("enderiophage"), AM("bald_eagle"), AM("tiger"), AM("tarantula_hawk"), AM("void_worm"), 
	//AM("frilled_shark"), AM("mimic_octopus"), AM("seagull"), AM("froststalker"), AM("tusklin"), AM("laviathan"), 
	//AM("cosmaw"), AM("toucan"), AM("maned_wolf"), AM("anaconda"), AM("anteater"), AM("rocky_roller"),
	//AM("flutter"), AM("gelada_monkey"), AM("jerboa"), AM("terrapin"), AM("comb_jelly"), AM("cosmic_cod"),
	//AM("bunfungus"), AM("bison"), AM("giant_squid"), AM("devils_hole_pupfish"), AM("catfish"), AM("flying_fish"), 
	//AM("skelewag"), AM("rain_frog"), AM("potoo"), AM("mudskipper"), AM("rhinoceros"), AM("sugar_glider"), 
	//AM("farseer"), AM("skreecher"), AM("underminer"), AM("murmur"), AM("skunk"), AM("banana_slug"), 
	//AM("blue_jay"), AM("caiman"), AM("triops"), 
]
	
function shuffleArray(array) {
	let length = array.length;
	let shuffle = array.slice(); // copy of array
	// loop over the array
	for (let i = length - 1; i > 0; i -= 1) {
		let random = Math.floor(Math.random() * (i + 1)); // random card position
		let current = shuffle[i]; // current card
		// swap the random card and the current card
		shuffle[i] = shuffle[random]; // move the random card to the current position
		shuffle[random] = current; // put the current card in the random position
	}
	return shuffle; // return shuffled array
};

function separate(arr) {
	const returnArr = []

	arr.forEach(item => {
		item = item.toString()
		let isTag = item.includes("#")
		let count = 1
		let itemArr = item.split(" ")
  
		if (item.match(/[0-9]x/)) {
			count = Number(item.split("x ")[0])
			for (let i = 0; i < count; i++) {
			  returnArr.push(itemArr[1])
			}
		} else {
			returnArr.push(item)
		}
		
		
	})
	
	return returnArr
}

const mekaUnit = (e, id, inputArr, nrg, rate) => {
	e.remove({ output: id })

	nrg = nrg ? nrg : 1000000000
	rate = rate ? rate : 2000000
	e.recipes.extendedcrafting.combination(id, M('module_base'), shuffleArray(separate(inputArr)), nrg).powerRate(rate);
}

const quantumModule = (e, id, inputArr, nrg, rate) => {
	e.remove({ output: id })

	nrg = nrg ? nrg : 10000000
	rate = rate ? rate : 200000
	e.recipes.extendedcrafting.combination(id, AE2_A('quantum_upgrade_base'), shuffleArray(separate(inputArr)), nrg).powerRate(rate);
}

const tieredMaterials = {
	unstable: {
		block: MU('unstable_ingot'),
		circuit: KJ("inductive_mechanism"),
		collector: PREXP("basic_collector"),
		wafer: KJ('radiant_coil'),
		opinium: MU("diamond_opinium_core"),
		star: PRE('klein_star_omega'),
	}, //ch4
	infused: {
		block: EC('flux_star'),
		circuit: KJ("calculation_mechanism"),
		collector: PREXP("basic_compressed_collector"),
		wafer: KJ('wafer_component_1k'),
		opinium: MU("netherite_opinium_core"),
		star: PREXP('magnum_star_ein'),
	}, //ch5
	dm: {
		block: PRE('dark_matter_block'),
		circuit: KJ("abstruse_mechanism"),
		collector: PREXP("basic_compressed_collector"),
		wafer: KJ('wafer_component_4k'),
		opinium: MU("emerald_opinium_core"),
		star: PREXP('magnum_star_ein'),
	}, //ch6
	rm: {
		block: PRE('red_matter_block'),
		circuit: KJ("integrated_mechanism"),
		collector: PREXP("dark_collector"),
		wafer: KJ('wafer_component_16k'),
		opinium: MU("emerald_opinium_core"),
		star: PREXP('magnum_star_zwei'),
	}, //ch7
	gem: {
		block: PREXP('violet_matter'),
		circuit: KJ("electric_mechanism"),
		collector: PREXP("dark_compressed_collector"),
		wafer: KJ('wafer_component_64k'),
		opinium: MU("experience_opinium_core"),
		star: PREXP('magnum_star_drei'),
	}, //ch10
	quantum: {
		block: AE2_A('quantum_alloy_plate'),
		circuit: FN("flux_core"),
		collector: PREXP("magenta_compressed_collector"),
		wafer: KJ('wafer_component_256k'),
		opinium: MU("nether_star_opinium_core"),
		star: PREXP('magnum_star_omega'),
	}, //ch12 + quantum stuff
	meka: {
		block: PREXP('cyan_matter'),
		circuit: M("reprocessed_fissile_fragment"),
		collector: PREXP("cyan_compressed_collector"),
		wafer: KJ('wafer_component_1m'),
		opinium: MU("the_final_opinium_core"),
		star: PREXP('gargantuan_star_zwei'),
	}, //ch14
	infinity: {
		block: PREXP('blue_matter'),
		circuit: M("dust_lithium"),
		collector: PREXP("red_collector"),
		wafer: KJ('wafer_component_256k'),
		opinium: MU("nether_star_opinium_core"),
		star: PREXP('magnum_star_drei'),
		hammer: Item.of(IF('infinity_hammer'), '{Beheading:0,CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'),
		drill: Item.of(IF('infinity_drill'), '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'),
		saw: Item.of(IF('infinity_saw'), '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'),
		trident: Item.of(IF('infinity_trident'), '{CanCharge:1b,Channeling:0b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"POOR",Special:0b}'),
		backpack: Item.of(IF('infinity_backpack'), '{CanCharge:1b,Energy:0L,Selected:"POOR",Special:0b}'),
		launcher: Item.of(IF('infinity_launcher'), '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"POOR",Special:0b}'),
		nuke: Item.of(IF('infinity_nuke'), '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'),
	}, //ch12
}

const tieredItems = {
	ch1: {
		mat: CR("andesite_alloy"),
		circuit: KJ("kinetic_mechanism"),
		machine: KJ("andesite_machine"),
		casing: CR("andesite_casing"),
	},
	ch2: {
		mat: KJ("coke"),
		circuit: KJ("sealed_mechanism"),
		machine: KJ("copper_machine"),
		casing: CR("copper_casing"),
	},
	ch3: {
		mat: CR("electron_tube"),
		circuit: CR("precision_mechanism"),
		machine: KJ("brass_machine"),
		casing: CR("brass_casing"),
	},
	ch4: {
		mat: AE2("singularity"),
		circuit: KJ("inductive_mechanism"),
		machine: KJ("inductive_machine"),
		casing: KJ("inductive_casing"),
	},
	ch5: {
		mat: AE2("engineering_processor"),
		circuit: KJ("calculation_mechanism"),
		machine: AE2("not_so_mysterious_cube"),
		casing: KJ("fluix_casing"),
	},
	ch6: {
		mat: KJ("computation_matrix"),
		circuit: KJ("abstruse_mechanism"),
		machine: KJ("abstruse_machine"),
		casing: KJ("abstruse_casing"),
	},
	ch7: {
		mat: IF("plastic"),
		circuit: KJ("integrated_mechanism"),
		machine: KJ("integrated_machine"),
		casing: KJ("integrated_casing"),
	},
	ch8: {
		mat: IF('pink_slime'),
		circuit: KJ("embedded_mechanism"),
		machine: EC("frame"),
		casing: KJ("embedded_casing"),
	},
	ch9: {
		mat: KJ("ether_gem"),
		circuit: KJ("portable_mechanism"),
		machine: KJ("portable_machine"),
		casing: KJ("portable_casing"),
	},
	ch10: {
		mat: M("ingot_steel"),
		circuit: KJ("electric_mechanism"),
		machine: M("steel_casing"),
		casing: KJ("electric_casing"),
	},
}