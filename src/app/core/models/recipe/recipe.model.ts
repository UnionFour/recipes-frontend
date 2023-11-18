import { IIngredient } from './ingredient.model';
import { INutrient } from './nutrient.model';
import { IInstruction } from './instruction.model'

export interface IRecipe {
    id: number,

    // категории
    vegetarian: boolean,
    vegan: boolean,
    glutenFree: boolean,
    dairyFree: boolean,
    veryHealthy: boolean,
    cheap: boolean,
    veryPopular: boolean,
    //
    readyInMinutes: number,
    preparationMinutes: number,
    cookingMinutes: number,

    healthScore: number,
    title: string,
    servings: number,
    image: string,
    nutrients: [INutrient],

    ingredients: [IIngredient],
    instructions: [IInstruction]
}
