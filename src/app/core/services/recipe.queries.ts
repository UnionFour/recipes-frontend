import { gql } from 'apollo-angular';

export const recipeFragment = gql`
    fragment RecipeInfo on Recipe {
        id
        vegetarian
        vegan
        glutenFree
        dairyFree
        title {
            rus
        }
        image
        ingredients {
            name {
                rus
            }
            image
            amount
            unit {
                rus
            }
        }
        readyInMinutes
        preparationMinutes
        cookingMinutes
        servings
        pricePerServing {
            rub
        }
        instructions {
            name {
                rus
            }
            steps {
                number
                description {
                    rus
                }
                ingredients {
                    id
                    name {
                        rus
                    }
                    image
                    amount
                    unit {
                        rus
                    }
                }
                equipments {
                    id
                    name {
                        rus
                    }
                    image
                }
                length {
                    number
                    unit {
                        rus
                    }
                }
            }
        }
        spoonacularSourceUrl
        aggregateLikes
        callories
        calloriesUnits
        nutrition {
            caloricBreakdown {
                percentProtein
                percentFat
                percentCarbs
            }
        }
    }
`;

export const queryFind = gql`
    query GetRecipes($filtration: RecipeFilterInput!, $recipeSorts: [RecipeSortInput!], $cursor: String) {
        recipes(first: 10, where: $filtration, order: $recipeSorts, after: $cursor) {
            nodes {
                ...RecipeInfo
            }
            pageInfo {
                hasNextPage
                endCursor
            }
            totalCount
        }
    }
    ${recipeFragment}
`;

export const queryGet = gql`
    query GetRecipe($recipeId: String!) {
        recipes(first: 1, where: { id: { eq: $recipeId } }) {
            nodes {
                ...RecipeInfo
            }
        }
    }
    ${recipeFragment}
`;

export const queryFindIngredients = gql`
    query GetIngredients($name: String) {
        ingredients(where: { id: { contains: $name } }) {
            id
            count
        }
    }
`;
