export function setSearchedMeals(
  state: { searchedMeals: Array<T> },
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
