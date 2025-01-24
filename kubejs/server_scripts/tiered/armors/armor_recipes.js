//priority: 0

ServerEvents.recipes(e => {
    const { unstable, infused, dm, rm, gem, quantum, meka } = armorMats

    //unstable armor
    armorPieces.vanilla.forEach(piece => {
        e.remove({ output: MU(`unstable_${piece}`) })
        e.recipes.extendedcrafting.shaped_table(
            MU(`unstable_${piece}`),
            armorTemplates.ultimate[piece],
            armorObj.ultimate(unstable, piece)
        ).id(KJ(`unstable_${piece}`))
    })



    //infused armor
    armorPieces.vanilla.forEach(piece => {
        e.remove({ output: MU(`infused_${piece}`) })
        e.recipes.extendedcrafting.shaped_table(
            MU(`infused_${piece}`),
            armorTemplates.ultimate[piece],
            armorObj.ultimate(infused, piece)
        ).id(KJ(`infused_${piece}`))
    })



    //dm armor
    armorPieces.vanilla.forEach(piece => {
        e.remove({ output: PRE(`dm_${piece}`) })
        e.recipes.extendedcrafting.shaped_table(
            PRE(`dm_${piece}`),
            armorTemplates.ultimate[piece],
            armorObj.ultimate(dm, piece)
        ).id(KJ(`dm_${piece}`))
    })



    //rm armor
    armorPieces.vanilla.forEach(piece => {
        e.remove({ output: PRE(`rm_${piece}`) })
        e.recipes.extendedcrafting.shaped_table(
            PRE(`rm_${piece}`),
            armorTemplates.ultimate[piece],
            armorObj.ultimate(rm, piece)
        ).id(KJ(`rm_${piece}`))
    })



    //gem armor
    armorPieces.vanilla.forEach(piece => {
        e.remove({ output: PRE(`gem_${piece}`) })
        e.recipes.extendedcrafting.shaped_table(
            PRE(`gem_${piece}`),
            armorTemplates.ultimate[piece],
            armorObj.ultimate(gem, piece)
        ).id(KJ(`gem_${piece}`))
    })



    //quantum armor
    armorPieces.vanilla.forEach(piece => {
        e.remove({ output: AE2_A(`quantum_${piece}`) })
        e.recipes.extendedcrafting.shaped_table(
            AE2_A(`quantum_${piece}`),
            armorTemplates.ultimate[piece],
            armorObj.ultimate(quantum, piece)
        ).id(KJ(`quantum_${piece}`))
    })



    //mekasuit armor
    armorPieces.meka.forEach((piece, i) => {
		const vanillaEq = armorPieces.vanilla[i]
		
        e.remove({ output: M(`mekasuit_${piece}`) })
		
        e.recipes.extendedcrafting.shaped_table(
            M(`mekasuit_${piece}`),
            armorTemplates.ultimate[vanillaEq],
            armorObj.ultimate(meka, vanillaEq)
        ).id(KJ(`mekasuit_${piece}`)).tier(5)
    })
})