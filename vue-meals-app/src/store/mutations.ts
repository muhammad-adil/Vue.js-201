export function setSearchedMeals(
  state: { searchedMeals: Array<T> },
  meals: Array<T>
) {
  state.searchedMeals = meals || [];
}
