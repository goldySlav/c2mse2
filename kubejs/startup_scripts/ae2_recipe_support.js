const $EntropyMode = Java.loadClass('appeng.recipes.entropy.EntropyMode')
const $RecipeSchema = Java.loadClass('dev.latvian.mods.kubejs.recipe.schema.RecipeSchema')
const $MapRecipeComponent = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.MapRecipeComponent')
const $RecipeComponentBuilderMap = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.RecipeComponentBuilderMap')

StartupEvents.recipeSchemaRegistry(event => {
    const Component = event.components.get.bind(event.components)
    const Builder = Component('bool')().builder

    let fluidStateComponent = Builder(Component('registryObject')({registry: 'fluid'}).key('id'), new $MapRecipeComponent(Component('nonBlankString')(), Component('nonBlankString')(), false).key('properties').defaultOptional())

    event.register('ae2:entropy', new $RecipeSchema(   
        Builder(
            Component('outputBlockState')().simpleMap({ id: 'Name', properties: 'Properties' }).key('block').defaultOptional(),
            fluidStateComponent.key('fluid').defaultOptional(),
            Component('outputItemArray')().key('drops').optional([])
        ).outputRole().key('output'),
        Builder(
            Component('inputBlockState')().simpleMap({ id: 'Name', properties: 'Properties' }).key('block').defaultOptional(),
            fluidStateComponent.key('fluid').defaultOptional()
        ).inputRole().key('input'),
        Component('enum')({ class: $EntropyMode }).key('mode')
    ))

    event.register('ae2:charger', new $RecipeSchema(
        Component('outputItem')().key('result'),
        Component('inputItem')().key('ingredient')
    ))

    
    let ic0, ic1, ic2, ic3, ic4, ic5
    event.register('ae2:inscriber', new $RecipeSchema(
        ic0 = Component('outputItem')().key('result'),
        ic1 = Builder(
            ic2 = Component('inputItem')().key('top').optional('air'),
            ic3 = Component('inputItem')().key('middle'),
            ic4 = Component('inputItem')().key('bottom').optional('air')
        ).key('ingredients'),
        ic5 = Component('enum')({class: 'appeng.recipes.handlers.InscriberProcessType'}).key('mode').optional('inscriber'),
    ).addConstructor((recipe, _st, _k, source) => {  
        recipe.setValue(ic0, source.getValue(recipe, ic0))
        recipe.setValue(ic1, new $RecipeComponentBuilderMap(ic1.component))
        recipe.getValue(ic1).put(ic3, source.getValue(recipe, ic3))
    }, ic0, ic3
    ).addConstructor((recipe, _st, _k, source) => {
        recipe.setValue(ic0, source.getValue(recipe, ic0))
        recipe.setValue(ic1, new $RecipeComponentBuilderMap(ic1.component))
        recipe.getValue(ic1).put(ic2, source.getValue(recipe, ic2))
        recipe.getValue(ic1).put(ic3, source.getValue(recipe, ic3))
    }, ic0, ic2, ic3
    ).addConstructor((recipe, _st, _k, source) => {
        recipe.setValue(ic0, source.getValue(recipe, ic0))
        recipe.setValue(ic1, new $RecipeComponentBuilderMap(ic1.component))
        recipe.getValue(ic1).put(ic2, source.getValue(recipe, ic2))
        recipe.getValue(ic1).put(ic3, source.getValue(recipe, ic3))
        recipe.getValue(ic1).put(ic4, source.getValue(recipe, ic4))
    }, ic0, ic2, ic3, ic4))

    event.register('ae2:matter_cannon', new $RecipeSchema(
        Component('inputItem')().key('ammo'),
        Component('floatNumber')().key('weight')
    ))

    event.register('ae2:transform', new $RecipeSchema(
        Component('outputItem')().key('result'),
        Component('inputItemArray')().key('ingredients'),
        Builder(
            Component('filteredString')({error: "Transform type must be one of explosion or fluid!", filter: s => s == 'fluid'}).key('type'), 
            Component('fluidTag')().key('tag'))
        .inputRole().or(Builder(
            Component('filteredString')({error: "Transform type must be one of explosion or fluid!", filter: s => s == 'explosion'}).key('type')
        )).key('circumstance').optional({type: 'fluid', tag: 'water'})
    ))
})