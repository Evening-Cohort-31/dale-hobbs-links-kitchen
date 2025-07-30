const materials = ['Hylian Rice', 'Big Hearty Truffle', 'Tabantha Wheat', 'Raw Prime Meat', 'Hateno Cheese', 'Bird Egg']

//set up empty array to store cooked meals in
const meals = []

//object where the keys are a pair of combined ingredients and the key values are the cooked meal resulting 
//from cooking that ingredient pair in the key
const recipeBook = {
    'Hylian Rice,Big Hearty Truffle': 'Mushroom Rice Balls',
    'Hateno Cheese,Bird Egg': 'Cheesy Omlette',
    'Tabantha Wheat,Hateno Cheese': 'cheesy Hylian Pizza',
    'Raw Prime Meat,Hylian Rice': 'Prime Meat and Rice Bowl'
}

//function that standardizes the input of user values
const standardize = (ingredient) => {
    return ingredient.trim().toLowerCase().replace(/\b\w/g, char => char.toUpperCase())
}

//preprocess materials into a Set for faster lookups
const standardizedMaterials = new Set(materials.map(normalize))

//function that cooks two ingredients
const cook = (firstIngredient, secondIngredient) => {
    const standardFirst = standardize(firstIngredient);
    const standardSecond = standardize(secondIngredient);

    const invalidIngredients = [];
    if (!standardizedMaterials.has(standardFirst)) invalidIngredients.push(firstIngredient);
    if (!standardizedMaterials.has(standardSecond)) invalidIngredients.push(secondIngredient);

    if (invalidIngredients.length > 0) {
        console.warn(`${invalidIngredients.join(' and ')} ${invalidIngredients.length === 1 ? 'is' : 'are'} not valid cooking material${invalidIngredients.length > 1 ? 's' : ''}.`)
        return
    }

    const ingredientsKey = [standardFirst, standardSecond].sort().join(',')
    const meal = recipeBook[ingredientsKey]

    if (meal) {
        meals.push(meal)
        console.log(`You made: ${meal}`)
    } else {
        console.warn(`Those ingredients don't make a known meal.`)
    }
}

cook(materials[1], materials[0])

console.log('MEALS:')
console.log('---------------')
for (const meal of meals) {
    console.log(meel)
}

//.map workshop notes
//
