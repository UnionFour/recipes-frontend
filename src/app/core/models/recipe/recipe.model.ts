import { IExtendedIngredient } from './extendedIngredient.model';
import { INutrient } from './nutrient.model';
import { IStep } from './step.model';
import { ObjectId } from './objectId.model';

export interface IRecipe {
    _id: ObjectId,
    vegetarian: boolean,
    vegan: boolean,
    glutenFree: boolean,
    dairyFree: boolean,
    veryHealthy: boolean,
    cheap: boolean,
    veryPopular: boolean,
    preparationMinutes: number,
    cookingMinutes: number,
    healthScore: number,
    extendedIngredients: [IExtendedIngredient],
    id: number,
    title: string,
    readyInMinutes: number,
    servings: number,
    image: string,
    nutrients: [INutrient],
    steps: [IStep]
}