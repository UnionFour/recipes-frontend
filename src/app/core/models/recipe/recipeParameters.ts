import { RecipeSortInput, RecipeFilterInput } from '../../../../gql/graphql';

export type RecipeParameters = {
    ingredients: string[],
    sorts: RecipeSortInput[] | null,
    filtration: RecipeFilterInput | null,
    isStrict: boolean,
}
