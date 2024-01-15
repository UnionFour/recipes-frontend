import { Category } from './category';

export type RecipeParameters = {
    isSearchLoose: boolean,
    nutritionalValues: number[],
    categories: Category[],
    ingredients: string[],
    sorting?: string[],
    recipeName?: string
}
