// src/types.d.ts
export interface Meal {
    idMeal: Number;
    strMeal: string;
    strDrinkAlternate?: string;
    strCategory: string;
    strArea: string;
    strIngredient?:string | undefined;
    strInstructions: string;
    strMealThumb: string;
    strMeasure?:string | undefined;
    strTags?: string;
    strYoutube?: string;
    strSource?: string;
    [key: string]: string | undefined; // for dynamic ingredient and measure properties
  }
  