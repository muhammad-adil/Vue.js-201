export function setSearchedMeals(
  state: {
    [x: string]: any; searchedMeals: Array<T> 
},
  meals: Array<T>
) {
  state.searchedMeals = meals || [];
}

export function setMealsByLetter(
  state: { mealsByLetter: Array<T> },
  meals: Array<T>
) {
  state.mealsByLetter = meals || [];
}

export function setMealsByIngredient(
  state: { mealsByIngredient: Array<T> },
  meals: Array<T>
) {
  state.mealsByIngredient = meals || [];
}

export function setIngredient(state: { ingredient: String; }, ingredient: String) {
  state.ingredient = ingredient
}