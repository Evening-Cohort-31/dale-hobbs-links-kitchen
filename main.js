const materials = ['Hylian Rice', 'Big Hearty Truffle', 'Tabantha Wheat', 'Raw Prime Meat', 'Hateno Cheese', 'Bird Egg', 'Goat Butter', 'Fresh Milk', 'Cane Sugar', 'Raw Bird Thigh']

//store cooked meals
const meals = []

// Standardize a single ingredient (Title Case):
// - trim: remove surrounding spaces
// - toLowerCase: normalize
// - replace: capitalize first letter after start or space
const standardize = (ingredient) => {
    //converts any entry to string with "String" constructor function
    //uses Nullish coalescing operator returning left if ingredient isn't null or undefined
    const s = String(ingredient ?? '').trim().toLowerCase()
    return s.replace(/(^|\s)\w/g, c => c.toUpperCase())
    // If you prefer your original behavior (caps after any word boundary), use: /\b\w/g
}

// build a canonical, order-insensitive key for ANY number of ingredients
//canonical = a standardized official form representation of data (ie "A,B" and "B,A" are both just "A,B") 
//parameter = array of strings (ie ['Hylian Rice', 'Big Hearty Truffle'] )
//.map() method transforms each element of an array into a standardized form
//.map(ingredient => standardize (ingredient)) is same but standardize already accepts just one string parameter
//.sort() method to ensure order is predictable no matter how user enters ingredients
//.join(',') takes sorted array and merges it into single string with comma between items
const makeKey = (ingredients) => ingredients.map(standardize).sort().join(',')

//store recipes in a Map using canonical keys
//Map is a constructor function taking an array of entries
//Our inner arrays are [key, value] pairs here
//Map has many methods you can use for it's data over a standard object
//Map methods include .get(key), .has(key), and .set(key,value)
const recipeBook = new Map([
    //2 ingredient recipes
    [makeKey(['Hylian Rice', 'Big Hearty Truffle']), 'Mushroom Rice Balls'],
    [makeKey(['Hateno Cheese', 'Bird Egg']), 'Cheesy Omelette'],
    [makeKey(['Tabantha Wheat', 'Hateno Cheese']), 'Cheesy Hylian Pizza'],
    [makeKey(['Raw Prime Meat', 'Hylian Rice']), 'Prime Meat and Rice Bowl'],
    //3 ingredient recipes
    [makeKey(['Hylian Rice', 'Raw Prime Meat', 'Hateno Cheese']), 'Cheesy Prime Meat Bowl'],
    [makeKey(['Fresh Milk', 'Cane Sugar', 'Bird Egg']), 'Egg Pudding'],
    [makeKey(['Hylian Rice', 'Raw Prime Meat', 'Bird Egg']), 'Chicken Egg Fried Rice'],
    //4 ingredient recipes
    [makeKey(['Tabantha Wheat', 'Cane Sugar', 'Goat Butter', 'Bird Egg']), 'Egg Tart'],
    [makeKey(['Hylian Rice', 'Goat Butter', 'Bird Egg', 'Raw Bird Thigh']), 'Poultry Pilaf']
])

//function that cooks any number of ingredients
const cook = (...ingredients) => {

    //warning message for no ingredients entered
    if (!ingredients.length) {
        console.warn('No ingredients provided.')
        return
    }

    //preprocess materials into a Set for faster lookups
    //A Set is a collection of unique values and can use the .has() method
    //materials.map(...) creates a new array where each item in materials has been cleaned up using standardize() function.
    //new Set(...) constructs a new Set object
    const materialSet = new Set(materials.map(standardize))
    //validate entries with boolean variable
    //.every() array method returns true if all x => materialSet.has(x) is true
    //.every() array method returns false if any x=> marerialSet.has(x) is false
    const allValid = ingredients.map(standardize).every(x => materialSet.has(x))
    if (!allValid) {
        console.warn(`One or more ingredients are invalid.`);
        return
    }

    //get a key for the user entered ingredients
    const key = makeKey(ingredients)

    //Check for if the ingredients entered match ingredients used to make meals in the recipeBook
    const meal = recipeBook.get(key)

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
cook('Tabantha Wheat', 'Bird Egg')
cook('Raw Prime Meat', 'Hylian Rice')
cook('Fresh Milk', 'Cane Sugar', 'Bird Egg')

console.log('MEALS:')
console.log('---------------')
for (const meal of meals) {
    console.log(meal)
}