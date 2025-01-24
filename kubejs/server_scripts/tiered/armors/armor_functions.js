//priority: 3004

const { unstable, infused, dm, rm, gem, quantum, meka, avaritia } = tieredMaterials

const armorMats = {
    unstable: {
		A: unstable.block,
		B: unstable.circuit,
		C: unstable.collector,
		D: unstable.wafer,
		F: unstable.opinium,
		G: unstable.star,
        base: {
            helmet: PET("emerald_netherite_armor_helmet"),
            chestplate: PET("emerald_netherite_armor_chestplate"),
            leggings: PET("emerald_netherite_armor_leggings"),
            boots: PET("emerald_netherite_armor_boots"),
        }
    },
    infused: {
		A: infused.block,
		B: infused.circuit,
		C: infused.collector,
		D: infused.wafer,
		F: infused.opinium,
		G: infused.star,
        base: {
            helmet: MU('unstable_helmet'),
            chestplate: MU('unstable_chestplate'),
            leggings: MU('unstable_leggings'),
            boots: MU('unstable_boots'),
        },
    },
    dm: {
		A: dm.block,
		B: dm.circuit,
		C: dm.collector,
		D: dm.wafer,
		F: dm.opinium,
		G: dm.star,
        base: {
            helmet: MU('infused_helmet'),
            chestplate: MU('infused_chestplate'),
            leggings: MU('infused_leggings'),
            boots: MU('infused_boots'),
        },
    },
    rm: {
		A: rm.block,
		B: rm.circuit,
		C: rm.collector,
		D: rm.wafer,
		F: rm.opinium,
		G: rm.star,
        base: {
            helmet: PRE('dm_helmet'),
            chestplate: PRE('dm_chestplate'),
            leggings: PRE('dm_leggings'),
            boots: PRE('dm_boots'),
        },
    },
    gem: {
		A: gem.block,
		B: gem.circuit,
		C: gem.collector,
		D: gem.wafer,
		F: gem.opinium,
		G: gem.star,
        base: {
            helmet: PRE('rm_helmet'),
            chestplate: PRE('rm_chestplate'),
            leggings: PRE('rm_leggings'),
            boots: PRE('rm_boots'),
        },
    },
    quantum: {
		A: quantum.block,
		B: quantum.circuit,
		C: quantum.collector,
		D: quantum.wafer,
		F: quantum.opinium,
		G: quantum.star,
        base: {
            helmet: PRE('gem_helmet'),
            chestplate: PRE('gem_chestplate'),
            leggings: PRE('gem_leggings'),
            boots: PRE('gem_boots'),
        },
    },
    meka: {
		A: meka.block,
		B: meka.circuit,
		C: meka.collector,
		D: meka.wafer,
		F: meka.opinium,
		G: meka.star,
        base: {
            helmet: AE2_A('quantum_helmet'),
            chestplate: AE2_A('quantum_chestplate'),
            leggings: AE2_A('quantum_leggings'),
            boots: AE2_A('quantum_boots'),
        },
    },
    avaritia: {
        A: avaritia.block,
		B: avaritia.circuit,
		C: avaritia.collector,
		D: avaritia.wafer,
		F: avaritia.opinium,
		G: avaritia.star,
        base: {
			helmet: M('mekasuit_helmet'),
            chestplate: PRE('mekasuit_bodyarmor'),
            leggings: PRE('mekasuit_pants'),
            boots: PRE('mekasuit_boots'),
        },
    },
}

const armorObj = {
    advanced: function (mat, base) {
        return {
            A: mat.base[base],
            B: mat.B,
            C: mat.C,
            D: mat.D,
            E: mat.E,
        }
    },
    elite: function (mat, base) {
        return {
            A: mat.base[base],
            B: mat.B,
            C: mat.C,
            D: mat.D,
            E: mat.E,
            F: mat.F,
        }
    },
    ultimate: function (mat, base) {
        return {
            A: mat.A,
            B: mat.B,
            C: mat.C,
            D: mat.D,
            E: mat.base[base],
            F: mat.F,
            G: mat.G,
        }
    }
}

const armorTemplates = {
    advanced: {
        helmet: [
            ' BBB ',
            'BCCCB',
            'BCACB',
            'BCECB',
            'D   D',
        ],
        chestplate: [
            'DB BD',
            'BCCCB',
            'BCACB',
            'BCECB',
            ' BBB ',
        ],
        leggings: [
            'BBBBB',
            'BCCCB',
            'BCACB',
            'BCECB',
            'BD DB',
        ],
        boots: [
            '  A  ',
            'BBEBB',
            'BC CB',
            'DC CD',
        ],
    },
    elite: {
        helmet: [
            ' BBBBB ',
            'BECCCEB',
            'BBCACBB',
            'BDCCCDB',
            'BB B BB',
            'BB   BB',
            'BB   BB',
        ],
        chestplate: [
            'BBB BBB',
            'BECCCEB',
            'BBCACBB',
            'BDCCCDB',
            'BBBBBBB',
            'BBBBBBB',
            ' BBBBB ',
        ],
        leggings: [
            'BBBBBBB',
            'BECCCEB',
            'BBCACBB',
            'BDCCCDB',
            'BB   BB',
            'BB   BB',
            'BB   BB',
        ],
        boots: [
            '  CCC  ',
            '  CAC  ',
            'BDCCCDB',
            'BB   BB',
            'BB   BB',
            'EB   BE',
        ],
    },
    ultimate: {
        helmet: [
            ' AAAAAAA ',
            'AABBBBBAA',
            'AFBDDDBFA',
            'ABBDEDBBA',
            'ABCDDDCBA',
            'AB     BA',
            'AB     BA',
            'AB     BA',
            'ABG   GBA',
        ],
        chestplate: [
            'AAAA AAAA',
            'AABBBBBAA',
            'AFBDDDBFA',
            'ABBDEDBBA',
            'ABCDDDCBA',
            'ABBBGBBBA',
            'AAABBBAAA',
            'AAAAAAAAA',
            ' AAAAAAA ',
        ],
        leggings: [
            'AAAAAAAAA',
            'ABBBBBBBA',
            'ABADDDABA',
            'ABADEDABA',
            'ABCDDDCBA',
            'ABAF FABA',
            'ABA   ABA',
            'ABA   ABA',
            'AGA   AGA',
        ],
        boots: [
            '         ',
            '         ',
            '   DDD   ',
            '   DED   ',
            'AACDDDCAA',
            'ABBA ABBA',
            'ABBA ABBA',
            'ABBA ABBA',
            'FBBG GBBF',
        ]
    },
}