/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CaloricBreakdown = {
  __typename?: 'CaloricBreakdown';
  percentCarbs: Scalars['Float']['output'];
  percentFat: Scalars['Float']['output'];
  percentProtein: Scalars['Float']['output'];
};

export type CaloricBreakdownFilterInput = {
  and?: InputMaybe<Array<CaloricBreakdownFilterInput>>;
  or?: InputMaybe<Array<CaloricBreakdownFilterInput>>;
  percentCarbs?: InputMaybe<FloatOperationFilterInput>;
  percentFat?: InputMaybe<FloatOperationFilterInput>;
  percentProtein?: InputMaybe<FloatOperationFilterInput>;
};

export type CaloricBreakdownSortInput = {
  percentCarbs?: InputMaybe<SortEnumType>;
  percentFat?: InputMaybe<SortEnumType>;
  percentProtein?: InputMaybe<SortEnumType>;
};

export type Equipment = {
  __typename?: 'Equipment';
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: LocalizedString;
};

export type EquipmentFilterInput = {
  and?: InputMaybe<Array<EquipmentFilterInput>>;
  id?: InputMaybe<IntOperationFilterInput>;
  image?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<LocalizedStringFilterInput>;
  or?: InputMaybe<Array<EquipmentFilterInput>>;
};

export type FloatOperationFilterInput = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  ngt?: InputMaybe<Scalars['Float']['input']>;
  ngte?: InputMaybe<Scalars['Float']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  nlt?: InputMaybe<Scalars['Float']['input']>;
  nlte?: InputMaybe<Scalars['Float']['input']>;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  amount?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<LocalizedString>;
  unit?: Maybe<LocalizedString>;
};

export type IngredientFilterInput = {
  amount?: InputMaybe<FloatOperationFilterInput>;
  and?: InputMaybe<Array<IngredientFilterInput>>;
  id?: InputMaybe<IntOperationFilterInput>;
  image?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<LocalizedStringFilterInput>;
  or?: InputMaybe<Array<IngredientFilterInput>>;
  unit?: InputMaybe<LocalizedStringFilterInput>;
};

export type Instruction = {
  __typename?: 'Instruction';
  name: LocalizedString;
  steps: Array<Step>;
};

export type InstructionFilterInput = {
  and?: InputMaybe<Array<InstructionFilterInput>>;
  name?: InputMaybe<LocalizedStringFilterInput>;
  or?: InputMaybe<Array<InstructionFilterInput>>;
  steps?: InputMaybe<ListFilterInputTypeOfStepFilterInput>;
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type Length = {
  __typename?: 'Length';
  number: Scalars['Int']['output'];
  unit: LocalizedString;
};

export type LengthFilterInput = {
  and?: InputMaybe<Array<LengthFilterInput>>;
  number?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<LengthFilterInput>>;
  unit?: InputMaybe<LocalizedStringFilterInput>;
};

export type ListFilterInputTypeOfEquipmentFilterInput = {
  all?: InputMaybe<EquipmentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<EquipmentFilterInput>;
  some?: InputMaybe<EquipmentFilterInput>;
};

export type ListFilterInputTypeOfIngredientFilterInput = {
  all?: InputMaybe<IngredientFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<IngredientFilterInput>;
  some?: InputMaybe<IngredientFilterInput>;
};

export type ListFilterInputTypeOfInstructionFilterInput = {
  all?: InputMaybe<InstructionFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<InstructionFilterInput>;
  some?: InputMaybe<InstructionFilterInput>;
};

export type ListFilterInputTypeOfStepFilterInput = {
  all?: InputMaybe<StepFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<StepFilterInput>;
  some?: InputMaybe<StepFilterInput>;
};

export type LocalizedString = {
  __typename?: 'LocalizedString';
  eng: Scalars['String']['output'];
  rus: Scalars['String']['output'];
};

export type LocalizedStringFilterInput = {
  and?: InputMaybe<Array<LocalizedStringFilterInput>>;
  eng?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<LocalizedStringFilterInput>>;
  rus?: InputMaybe<StringOperationFilterInput>;
};

export type LocalizedStringSortInput = {
  eng?: InputMaybe<SortEnumType>;
  rus?: InputMaybe<SortEnumType>;
};

export type Money = {
  __typename?: 'Money';
  rub: Scalars['Int']['output'];
  usd: Scalars['Float']['output'];
};

export type MoneyFilterInput = {
  and?: InputMaybe<Array<MoneyFilterInput>>;
  or?: InputMaybe<Array<MoneyFilterInput>>;
  rub?: InputMaybe<IntOperationFilterInput>;
  usd?: InputMaybe<FloatOperationFilterInput>;
};

export type MoneySortInput = {
  rub?: InputMaybe<SortEnumType>;
  usd?: InputMaybe<SortEnumType>;
};

export type Nutrition = {
  __typename?: 'Nutrition';
  caloricBreakdown: CaloricBreakdown;
};

export type NutritionFilterInput = {
  and?: InputMaybe<Array<NutritionFilterInput>>;
  caloricBreakdown?: InputMaybe<CaloricBreakdownFilterInput>;
  or?: InputMaybe<Array<NutritionFilterInput>>;
};

export type NutritionSortInput = {
  caloricBreakdown?: InputMaybe<CaloricBreakdownSortInput>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  recipes?: Maybe<RecipesConnection>;
};


export type QueryRecipesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<RecipeSortInput>>;
  where?: InputMaybe<RecipeFilterInput>;
};

export type Recipe = {
  __typename?: 'Recipe';
  aggregateLikes: Scalars['Int']['output'];
  callories: Scalars['Float']['output'];
  calloriesUnits: Scalars['String']['output'];
  cheap: Scalars['Boolean']['output'];
  cookingMinutes: Scalars['Float']['output'];
  dairyFree: Scalars['Boolean']['output'];
  glutenFree: Scalars['Boolean']['output'];
  healthScore: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  imageType: Scalars['String']['output'];
  ingredients?: Maybe<Array<Ingredient>>;
  instructions: Array<Instruction>;
  license: Scalars['String']['output'];
  likes: Scalars['Int']['output'];
  nutrition: Nutrition;
  preparationMinutes: Scalars['Float']['output'];
  pricePerServing: Money;
  readyInMinutes: Scalars['Float']['output'];
  servings: Scalars['Int']['output'];
  sourceName: Scalars['String']['output'];
  sourceUrl: Scalars['String']['output'];
  spoonacularSourceUrl: Scalars['String']['output'];
  title: LocalizedString;
  vegan: Scalars['Boolean']['output'];
  vegetarian: Scalars['Boolean']['output'];
  veryHealthy: Scalars['Boolean']['output'];
  veryPopular: Scalars['Boolean']['output'];
  weightWatcherSmartPoints: Scalars['Int']['output'];
};

export type RecipeFilterInput = {
  aggregateLikes?: InputMaybe<IntOperationFilterInput>;
  and?: InputMaybe<Array<RecipeFilterInput>>;
  callories?: InputMaybe<FloatOperationFilterInput>;
  calloriesUnits?: InputMaybe<StringOperationFilterInput>;
  cheap?: InputMaybe<BooleanOperationFilterInput>;
  cookingMinutes?: InputMaybe<FloatOperationFilterInput>;
  dairyFree?: InputMaybe<BooleanOperationFilterInput>;
  glutenFree?: InputMaybe<BooleanOperationFilterInput>;
  healthScore?: InputMaybe<IntOperationFilterInput>;
  id?: InputMaybe<StringOperationFilterInput>;
  image?: InputMaybe<StringOperationFilterInput>;
  imageType?: InputMaybe<StringOperationFilterInput>;
  ingredients?: InputMaybe<ListFilterInputTypeOfIngredientFilterInput>;
  instructions?: InputMaybe<ListFilterInputTypeOfInstructionFilterInput>;
  license?: InputMaybe<StringOperationFilterInput>;
  likes?: InputMaybe<IntOperationFilterInput>;
  nutrition?: InputMaybe<NutritionFilterInput>;
  or?: InputMaybe<Array<RecipeFilterInput>>;
  preparationMinutes?: InputMaybe<FloatOperationFilterInput>;
  pricePerServing?: InputMaybe<MoneyFilterInput>;
  readyInMinutes?: InputMaybe<FloatOperationFilterInput>;
  servings?: InputMaybe<IntOperationFilterInput>;
  sourceName?: InputMaybe<StringOperationFilterInput>;
  sourceUrl?: InputMaybe<StringOperationFilterInput>;
  spoonacularSourceUrl?: InputMaybe<StringOperationFilterInput>;
  title?: InputMaybe<LocalizedStringFilterInput>;
  vegan?: InputMaybe<BooleanOperationFilterInput>;
  vegetarian?: InputMaybe<BooleanOperationFilterInput>;
  veryHealthy?: InputMaybe<BooleanOperationFilterInput>;
  veryPopular?: InputMaybe<BooleanOperationFilterInput>;
  weightWatcherSmartPoints?: InputMaybe<IntOperationFilterInput>;
};

export type RecipeSortInput = {
  aggregateLikes?: InputMaybe<SortEnumType>;
  callories?: InputMaybe<SortEnumType>;
  calloriesUnits?: InputMaybe<SortEnumType>;
  cheap?: InputMaybe<SortEnumType>;
  cookingMinutes?: InputMaybe<SortEnumType>;
  dairyFree?: InputMaybe<SortEnumType>;
  glutenFree?: InputMaybe<SortEnumType>;
  healthScore?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  image?: InputMaybe<SortEnumType>;
  imageType?: InputMaybe<SortEnumType>;
  license?: InputMaybe<SortEnumType>;
  likes?: InputMaybe<SortEnumType>;
  nutrition?: InputMaybe<NutritionSortInput>;
  preparationMinutes?: InputMaybe<SortEnumType>;
  pricePerServing?: InputMaybe<MoneySortInput>;
  readyInMinutes?: InputMaybe<SortEnumType>;
  servings?: InputMaybe<SortEnumType>;
  sourceName?: InputMaybe<SortEnumType>;
  sourceUrl?: InputMaybe<SortEnumType>;
  spoonacularSourceUrl?: InputMaybe<SortEnumType>;
  title?: InputMaybe<LocalizedStringSortInput>;
  vegan?: InputMaybe<SortEnumType>;
  vegetarian?: InputMaybe<SortEnumType>;
  veryHealthy?: InputMaybe<SortEnumType>;
  veryPopular?: InputMaybe<SortEnumType>;
  weightWatcherSmartPoints?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type RecipesConnection = {
  __typename?: 'RecipesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<RecipesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Recipe>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type RecipesEdge = {
  __typename?: 'RecipesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Recipe;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Step = {
  __typename?: 'Step';
  description: LocalizedString;
  equipments: Array<Equipment>;
  ingredients?: Maybe<Array<Ingredient>>;
  length?: Maybe<Length>;
  number: Scalars['Int']['output'];
};

export type StepFilterInput = {
  and?: InputMaybe<Array<StepFilterInput>>;
  description?: InputMaybe<LocalizedStringFilterInput>;
  equipments?: InputMaybe<ListFilterInputTypeOfEquipmentFilterInput>;
  ingredients?: InputMaybe<ListFilterInputTypeOfIngredientFilterInput>;
  length?: InputMaybe<LengthFilterInput>;
  number?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<StepFilterInput>>;
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeInfoFragment = { __typename?: 'Recipe', id: string, vegetarian: boolean, vegan: boolean, glutenFree: boolean, dairyFree: boolean, image?: string | null, readyInMinutes: number, preparationMinutes: number, cookingMinutes: number, servings: number, spoonacularSourceUrl: string, aggregateLikes: number, callories: number, calloriesUnits: string, title: { __typename?: 'LocalizedString', rus: string }, ingredients?: Array<{ __typename?: 'Ingredient', image?: string | null, amount?: number | null, name?: { __typename?: 'LocalizedString', rus: string } | null, unit?: { __typename?: 'LocalizedString', rus: string } | null }> | null, pricePerServing: { __typename?: 'Money', rub: number }, instructions: Array<{ __typename?: 'Instruction', name: { __typename?: 'LocalizedString', rus: string }, steps: Array<{ __typename?: 'Step', number: number, description: { __typename?: 'LocalizedString', rus: string }, ingredients?: Array<{ __typename?: 'Ingredient', id: number, image?: string | null, amount?: number | null, name?: { __typename?: 'LocalizedString', rus: string } | null, unit?: { __typename?: 'LocalizedString', rus: string } | null }> | null, equipments: Array<{ __typename?: 'Equipment', id: number, image: string, name: { __typename?: 'LocalizedString', rus: string } }>, length?: { __typename?: 'Length', number: number, unit: { __typename?: 'LocalizedString', rus: string } } | null }> }>, nutrition: { __typename?: 'Nutrition', caloricBreakdown: { __typename?: 'CaloricBreakdown', percentProtein: number, percentFat: number, percentCarbs: number } } } & { ' $fragmentName'?: 'RecipeInfoFragment' };

export type GetRecipesQueryVariables = Exact<{
  filtration: RecipeFilterInput;
  recipeSorts?: InputMaybe<Array<RecipeSortInput> | RecipeSortInput>;
}>;


export type GetRecipesQuery = { __typename?: 'Query', recipes?: { __typename?: 'RecipesConnection', nodes?: Array<(
      { __typename?: 'Recipe' }
      & { ' $fragmentRefs'?: { 'RecipeInfoFragment': RecipeInfoFragment } }
    )> | null } | null };

export type GetRecipeQueryVariables = Exact<{
  recipeId: Scalars['String']['input'];
}>;


export type GetRecipeQuery = { __typename?: 'Query', recipes?: { __typename?: 'RecipesConnection', nodes?: Array<(
      { __typename?: 'Recipe' }
      & { ' $fragmentRefs'?: { 'RecipeInfoFragment': RecipeInfoFragment } }
    )> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } | null };

export const RecipeInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecipeInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recipe"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"vegetarian"}},{"kind":"Field","name":{"kind":"Name","value":"vegan"}},{"kind":"Field","name":{"kind":"Name","value":"glutenFree"}},{"kind":"Field","name":{"kind":"Name","value":"dairyFree"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"unit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"readyInMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"preparationMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"cookingMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"servings"}},{"kind":"Field","name":{"kind":"Name","value":"pricePerServing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rub"}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"steps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"unit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"equipments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"length"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"unit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"spoonacularSourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"aggregateLikes"}},{"kind":"Field","name":{"kind":"Name","value":"callories"}},{"kind":"Field","name":{"kind":"Name","value":"calloriesUnits"}},{"kind":"Field","name":{"kind":"Name","value":"nutrition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caloricBreakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percentProtein"}},{"kind":"Field","name":{"kind":"Name","value":"percentFat"}},{"kind":"Field","name":{"kind":"Name","value":"percentCarbs"}}]}}]}}]}}]} as unknown as DocumentNode<RecipeInfoFragment, unknown>;
export const GetRecipesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecipes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filtration"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RecipeFilterInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recipeSorts"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RecipeSortInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filtration"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recipeSorts"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecipeInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecipeInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recipe"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"vegetarian"}},{"kind":"Field","name":{"kind":"Name","value":"vegan"}},{"kind":"Field","name":{"kind":"Name","value":"glutenFree"}},{"kind":"Field","name":{"kind":"Name","value":"dairyFree"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"unit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"readyInMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"preparationMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"cookingMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"servings"}},{"kind":"Field","name":{"kind":"Name","value":"pricePerServing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rub"}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"steps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"unit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"equipments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"length"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"unit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"spoonacularSourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"aggregateLikes"}},{"kind":"Field","name":{"kind":"Name","value":"callories"}},{"kind":"Field","name":{"kind":"Name","value":"calloriesUnits"}},{"kind":"Field","name":{"kind":"Name","value":"nutrition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caloricBreakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percentProtein"}},{"kind":"Field","name":{"kind":"Name","value":"percentFat"}},{"kind":"Field","name":{"kind":"Name","value":"percentCarbs"}}]}}]}}]}}]} as unknown as DocumentNode<GetRecipesQuery, GetRecipesQueryVariables>;
export const GetRecipeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecipe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recipeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recipeId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecipeInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecipeInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recipe"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"vegetarian"}},{"kind":"Field","name":{"kind":"Name","value":"vegan"}},{"kind":"Field","name":{"kind":"Name","value":"glutenFree"}},{"kind":"Field","name":{"kind":"Name","value":"dairyFree"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"unit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"readyInMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"preparationMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"cookingMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"servings"}},{"kind":"Field","name":{"kind":"Name","value":"pricePerServing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rub"}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"steps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"unit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"equipments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"length"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"unit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"spoonacularSourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"aggregateLikes"}},{"kind":"Field","name":{"kind":"Name","value":"callories"}},{"kind":"Field","name":{"kind":"Name","value":"calloriesUnits"}},{"kind":"Field","name":{"kind":"Name","value":"nutrition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caloricBreakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percentProtein"}},{"kind":"Field","name":{"kind":"Name","value":"percentFat"}},{"kind":"Field","name":{"kind":"Name","value":"percentCarbs"}}]}}]}}]}}]} as unknown as DocumentNode<GetRecipeQuery, GetRecipeQueryVariables>;