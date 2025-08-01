# Link’s Kitchen
<img src="link.jpeg" align="left" width="300px" />

## Part 1

Link has a bunch of ingredients and he want’s to experiment and see what kinds of meals he can make with them. He knows for sure that when he cooks `Hylian Rice` with a `Big Hearty Truffle` that he gets `Mushroom Rice Balls`, but for some reason he’s not seeing it in his meals…

On his travels, he found some recipes on the walls of the stables he’s visited:

- `Hateno Cheese` and a `Bird Egg` will make a `Cheesy Omlette`
- `Tabantha Wheat` and `Hateno Cheese` will make a `Cheesy Hylian Pizza`
- `Raw Prime Meat` and `Hylian Rice` will make `Prime Meat and Rice Bowl`

Open the `main.js` module in your code editor and you will see that some code has already been started. Unfortunately, the algorithm is not comprehensive, as it will only cook one meal based off of two ingredients. You need to refactor that algorithm so that it will work for any of the combinations above.

To start you off, we want you to think about the structure of a recipe object - what properties would need to be on it, and what would the value be of each property.

Then update the function so that if two matching ingredients are passed as arguments to the `cook()` function, the matching meal name will be produced.

## Part 2

Link found some more materials in the Tabantha Frontier, he also stopped in Rito village to buy a few items. Add the following items to his materials array:

`'Goat Butter', 'Fresh Milk', 'Cane Sugar', 'Raw Bird Thigh'`

Link has also learned a few new recipes:

- `Fresh Milk`, `Cane Sugar`, and a `Bird Egg` will make `Egg Pudding`
- `Tabantha Wheat`, `Cane Sugar`, `Goat Butter`, and a `Bird Egg` will make an `Egg Tart`
- `Hylian Rice`, `Raw Prime Meat`, and a `Bird Egg` will make `Chicken Egg Fried Rice`
- `Hylian Rice`, `Goat Butter`, a `Bird Egg` and a `Raw Bird Thigh` will make `Poultry Pilaf`

Notice how these recipes require more than one ingredient. Some require three, some require four, and the previous recipes still only require two. Discuss with your team how you can update the existing function. You may need to practice your googling skills 😉

### Questions to ask yourselves:

- What should the parameter(s) for the cook function be to account for any number of ingredients?
- How do we pass in the specific ingredients to the function?
- How can we check for the specific ingredients?
