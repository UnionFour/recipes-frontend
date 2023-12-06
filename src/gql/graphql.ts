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
  image: Scalars['String']['output'];
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
  cheap: Scalars['Boolean']['output'];
  cookingMinutes: Scalars['Float']['output'];
  dairyFree: Scalars['Boolean']['output'];
  glutenFree: Scalars['Boolean']['output'];
  healthScore: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  imageType: Scalars['String']['output'];
  ingredients: Array<Ingredient>;
  instructions: Array<Instruction>;
  license: Scalars['String']['output'];
  likes: Scalars['Int']['output'];
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
  ingredients: Array<Ingredient>;
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

export type GetRecipesQueryVariables = Exact<{
  ingredientsFilter?: InputMaybe<Array<RecipeFilterInput> | RecipeFilterInput>;
  recipeSorts?: InputMaybe<Array<RecipeSortInput> | RecipeSortInput>;
}>;


export type GetRecipesQuery = { __typename?: 'Query', recipes?: { __typename?: 'RecipesConnection', nodes?: Array<{ __typename?: 'Recipe', id: string, image: string, title: { __typename?: 'LocalizedString', rus: string }, ingredients: Array<{ __typename?: 'Ingredient', name?: { __typename?: 'LocalizedString', rus: string } | null }> }> | null } | null };


export const GetRecipesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecipes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ingredientsFilter"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RecipeFilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recipeSorts"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RecipeSortInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"or"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ingredientsFilter"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recipeSorts"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rus"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRecipesQuery, GetRecipesQueryVariables>;