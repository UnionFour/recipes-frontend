import { IIngredient } from "./ingredient.model"

export interface IStep {
    number: number,
    description: string
    ingredients: [IIngredient]
}