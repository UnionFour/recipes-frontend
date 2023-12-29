import { Category } from './category';

export type RecipeParameters = {
    isSearchLoose?: boolean,
    containerMethods?: string[],
    nutritionalValues?: number[],
    categories?: Category[],
    ingredients?: string[],
    sorting?: string[]
}
