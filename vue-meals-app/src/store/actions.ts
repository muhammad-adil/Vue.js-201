import axiosClient from "../axiosClient";

export function searchMeals({ commit }: any, keyword: string) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
    console.log("keyword", keyword, "searchedMeals", data.meals);
  });
}

export function searchMealsByLetter({ commit }: any, letter: string) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
    console.log("letter", letter, "mealsByLetter", data.meals);
  });
}

export function searchMealsByIngredient({ commit }: any, ingredient: string) {
  axiosClient.get(`search.php?i=${ingredient}`).then(({ data }) => {
    commit("setMealsByIngredient", data.meals);
    console.log("ingredient", ingredient, "mealsByIngredient", data.meals);
  });
}
