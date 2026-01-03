// Function: preparationTime
// Calculates total preparation time in minutes based on layers
export function preparationTime(layers, timePerLayer = 2) {
  // layers: array of strings representing the lasagna layers
  // timePerLayer: minutes needed for each layer (default is 2)
  return layers.length * timePerLayer;
}

// Function 1: cookingStatus
// Checks how much time is left on the lasagna timer
export function cookingStatus(timer) {
  // If no timer value is passed (undefined), remind the user to set it
  if (timer === undefined) {
    return 'You forgot to set the timer.';
  } 
  // If timer is exactly 0, lasagna is done
  else if (timer === 0) {
    return 'Lasagna is done.';
  } 
  // Otherwise, timer is positive, lasagna is still cooking
  else {
    return 'Not done, please wait.';
  }
}

// Function 2: quantities
// Calculates how much noodles and sauce are needed based on layers
export function quantities(layers) {
  // Initialize counters for noodles (grams) and sauce (liters)
  let noodlesCount = 0;
  let sauceCount = 0;

  // Loop through each layer in the array
  for (const layer of layers) {
    // If the layer is 'noodles', add 50 grams
    if (layer === 'noodles') noodlesCount += 50;
    // If the layer is 'sauce', add 0.2 liters
    if (layer === 'sauce') sauceCount += 0.2;
  }

  // Return an object with total amounts
  return {
    noodles: noodlesCount,
    sauce: sauceCount,
  };
}

// Function 3: addSecretIngredient
// Adds the last ingredient from friend's list to your list
export function addSecretIngredient(friendsList, myList) {
  // Get the last item from friend's list
  const secret = friendsList[friendsList.length - 1];
  // Add it to the end of your recipe list
  myList.push(secret);
  // Function returns undefined by default
}

// Function 4: scaleRecipe
// Scales the recipe to make more or fewer portions
export function scaleRecipe(recipe, portions) {
  // Create a new object to avoid modifying the original recipe
  const newRecipe = {};

  // Loop through each ingredient in the original recipe
  for (const ingredient in recipe) {
    // Multiply the amount by (desired portions / 2)
    // Original recipe is always for 2 portions
    newRecipe[ingredient] = recipe[ingredient] * (portions / 2);
  }

  // Return the scaled recipe object
  return newRecipe;
}
