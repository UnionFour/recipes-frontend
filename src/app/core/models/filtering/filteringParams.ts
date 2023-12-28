import { Category } from './category';

export type FilteringParams = {
    isSearchLoose: boolean,
    nutritionalValues: string[],
    categories: Category[],
    ingredients: string[]
}
