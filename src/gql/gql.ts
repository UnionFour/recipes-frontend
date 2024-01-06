/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    fragment RecipeInfo on Recipe {\n        id\n        vegetarian\n        vegan\n        glutenFree\n        dairyFree\n        title {\n            rus\n        }\n        image\n        ingredients {\n            name {\n                rus\n            }\n            image\n            amount\n            unit {\n                rus\n            }\n        }\n        readyInMinutes\n        preparationMinutes\n        cookingMinutes\n        servings\n        pricePerServing {\n            rub\n        }\n        instructions {\n            name {\n                rus\n            }\n            steps {\n                number\n                description {\n                    rus\n                }\n                ingredients {\n                    id\n                    name {\n                        rus\n                    }\n                    image\n                    amount\n                    unit {\n                        rus\n                    }\n                }\n                equipments {\n                    id\n                    name {\n                        rus\n                    }\n                    image\n                }\n                length {\n                    number\n                    unit {\n                        rus\n                    }\n                }\n            }\n        }\n        spoonacularSourceUrl\n        aggregateLikes\n        callories\n        calloriesUnits\n        nutrition {\n            caloricBreakdown {\n                percentProtein\n                percentFat\n                percentCarbs\n            }\n        }\n    }\n": types.RecipeInfoFragmentDoc,
    "\n    query GetRecipes($filtration: RecipeFilterInput!, $recipeSorts: [RecipeSortInput!]) {\n        recipes(first: 10, where: $filtration, order: $recipeSorts) {\n            nodes {\n                ...RecipeInfo\n            }\n        }\n    }\n    \n": types.GetRecipesDocument,
    "\n    query GetRecipe($recipeId: String!) {\n        recipes(first: 1, where: { id: { eq: $recipeId } }) {\n            nodes {\n                ...RecipeInfo\n            }\n            pageInfo {\n                hasNextPage\n                endCursor\n            }\n        }\n    }\n    \n": types.GetRecipeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment RecipeInfo on Recipe {\n        id\n        vegetarian\n        vegan\n        glutenFree\n        dairyFree\n        title {\n            rus\n        }\n        image\n        ingredients {\n            name {\n                rus\n            }\n            image\n            amount\n            unit {\n                rus\n            }\n        }\n        readyInMinutes\n        preparationMinutes\n        cookingMinutes\n        servings\n        pricePerServing {\n            rub\n        }\n        instructions {\n            name {\n                rus\n            }\n            steps {\n                number\n                description {\n                    rus\n                }\n                ingredients {\n                    id\n                    name {\n                        rus\n                    }\n                    image\n                    amount\n                    unit {\n                        rus\n                    }\n                }\n                equipments {\n                    id\n                    name {\n                        rus\n                    }\n                    image\n                }\n                length {\n                    number\n                    unit {\n                        rus\n                    }\n                }\n            }\n        }\n        spoonacularSourceUrl\n        aggregateLikes\n        callories\n        calloriesUnits\n        nutrition {\n            caloricBreakdown {\n                percentProtein\n                percentFat\n                percentCarbs\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment RecipeInfo on Recipe {\n        id\n        vegetarian\n        vegan\n        glutenFree\n        dairyFree\n        title {\n            rus\n        }\n        image\n        ingredients {\n            name {\n                rus\n            }\n            image\n            amount\n            unit {\n                rus\n            }\n        }\n        readyInMinutes\n        preparationMinutes\n        cookingMinutes\n        servings\n        pricePerServing {\n            rub\n        }\n        instructions {\n            name {\n                rus\n            }\n            steps {\n                number\n                description {\n                    rus\n                }\n                ingredients {\n                    id\n                    name {\n                        rus\n                    }\n                    image\n                    amount\n                    unit {\n                        rus\n                    }\n                }\n                equipments {\n                    id\n                    name {\n                        rus\n                    }\n                    image\n                }\n                length {\n                    number\n                    unit {\n                        rus\n                    }\n                }\n            }\n        }\n        spoonacularSourceUrl\n        aggregateLikes\n        callories\n        calloriesUnits\n        nutrition {\n            caloricBreakdown {\n                percentProtein\n                percentFat\n                percentCarbs\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetRecipes($filtration: RecipeFilterInput!, $recipeSorts: [RecipeSortInput!]) {\n        recipes(first: 10, where: $filtration, order: $recipeSorts) {\n            nodes {\n                ...RecipeInfo\n            }\n        }\n    }\n    \n"): (typeof documents)["\n    query GetRecipes($filtration: RecipeFilterInput!, $recipeSorts: [RecipeSortInput!]) {\n        recipes(first: 10, where: $filtration, order: $recipeSorts) {\n            nodes {\n                ...RecipeInfo\n            }\n        }\n    }\n    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetRecipe($recipeId: String!) {\n        recipes(first: 1, where: { id: { eq: $recipeId } }) {\n            nodes {\n                ...RecipeInfo\n            }\n            pageInfo {\n                hasNextPage\n                endCursor\n            }\n        }\n    }\n    \n"): (typeof documents)["\n    query GetRecipe($recipeId: String!) {\n        recipes(first: 1, where: { id: { eq: $recipeId } }) {\n            nodes {\n                ...RecipeInfo\n            }\n            pageInfo {\n                hasNextPage\n                endCursor\n            }\n        }\n    }\n    \n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;