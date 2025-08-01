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
//.trim() is a string method removing whitespace from either end
//.toLowerCase() is a string method making everything lowercase
//.replace(...) is a string method 
// this part "/\b\w/g" is a regular expression that finds the first letter of each word entered
// \b word boundary
// \w matches any word character (letter, digit, underscore)
// /g is the global flag so it matches EVERY word in the string
// char => char.toUpperCase() taking each matched first letter and capitalizes it
const standardize = (ingredient) => {
    return ingredient.trim().toLowerCase().replace(/\b\w/g, char => char.toUpperCase())
}

//preprocess materials into a Set for faster lookups
//A Set is a collection of unique values and can use the .has() method
//materials.map(...) creates a new array wehre each item in materials has been cleaned up using standardize() function.
//new Set(...) constructs a new Set object
const standardizedMaterials = new Set(materials.map(standardize))

//function that cooks two ingredients
const cook = (firstIngredient, secondIngredient) => {
    //standardize user entries
    const standardFirst = standardize(firstIngredient);
    const standardSecond = standardize(secondIngredient);

    //Check for if the ingredients entered match ingredients used to make meals in the recipeBook
    const invalidIngredients = [];
    if (!standardizedMaterials.has(standardFirst)) invalidIngredients.push(firstIngredient);
    if (!standardizedMaterials.has(standardSecond)) invalidIngredients.push(secondIngredient);

    //Conditions to exit cook function if an invalid ingredient is used as an argument
    if (invalidIngredients.length > 0) {
        console.warn(`${invalidIngredients.join(' and ')} ${invalidIngredients.length === 1 ? 'is' : 'are'} not valid cooking material${invalidIngredients.length > 1 ? 's' : ''}.`)
        return
    }

    //  
    const ingredientsKey = [standardFirst, standardSecond].sort().join(',')
    const meal = recipeBook[ingredientsKey]

    //logic for returning the meal if there is a known meal from the two ingredients used as an argument
    //includes logic to warn user if the ingredients do not make a known meal
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