import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../utils/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Asteroid = {
  __typename?: 'Asteroid';
  id: Scalars['ID'];
  location: Scalars['String'];
  minedAt: Scalars['DateTime'];
  name: Scalars['String'];
  parkedStarShip?: Maybe<Starship>;
  resources: Array<Resource>;
};

export type AsteroidAndStarship = {
  __typename?: 'AsteroidAndStarship';
  asteroid: Asteroid;
  starship: Starship;
};

export type Mutation = {
  __typename?: 'Mutation';
  mineAsteroid: AsteroidAndStarship;
};

export type MutationMineAsteroidArgs = {
  asteroidId: Scalars['ID'];
  starshipId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  asteroid?: Maybe<Asteroid>;
  asteroids: Array<Asteroid>;
  resource: Resource;
};

export type QueryAsteroidArgs = {
  id: Scalars['ID'];
};

export type QueryResourceArgs = {
  id: Scalars['ID'];
};

export type Resource = {
  __typename?: 'Resource';
  amount: Scalars['Int'];
  id: Scalars['ID'];
  resourceType: ResourceType;
};

export type ResourceType = 'GOLD' | 'HELIUM' | 'IRON';

export type Starship = {
  __typename?: 'Starship';
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: Scalars['String'];
  parkedOn?: Maybe<Asteroid>;
  resources: Array<Resource>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Asteroid: ResolverTypeWrapper<Partial<Asteroid>>;
  AsteroidAndStarship: ResolverTypeWrapper<Partial<AsteroidAndStarship>>;
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']>>;
  DateTime: ResolverTypeWrapper<Partial<Scalars['DateTime']>>;
  ID: ResolverTypeWrapper<Partial<Scalars['ID']>>;
  Int: ResolverTypeWrapper<Partial<Scalars['Int']>>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Resource: ResolverTypeWrapper<Partial<Resource>>;
  ResourceType: ResolverTypeWrapper<Partial<ResourceType>>;
  Starship: ResolverTypeWrapper<Partial<Starship>>;
  String: ResolverTypeWrapper<Partial<Scalars['String']>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Asteroid: Partial<Asteroid>;
  AsteroidAndStarship: Partial<AsteroidAndStarship>;
  Boolean: Partial<Scalars['Boolean']>;
  DateTime: Partial<Scalars['DateTime']>;
  ID: Partial<Scalars['ID']>;
  Int: Partial<Scalars['Int']>;
  Mutation: {};
  Query: {};
  Resource: Partial<Resource>;
  Starship: Partial<Starship>;
  String: Partial<Scalars['String']>;
};

export type AsteroidResolvers<ContextType = Context, ParentType = ResolversParentTypes['Asteroid']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  minedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parkedStarShip?: Resolver<Maybe<ResolversTypes['Starship']>, ParentType, ContextType>;
  resources?: Resolver<Array<ResolversTypes['Resource']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AsteroidAndStarshipResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['AsteroidAndStarship'],
> = {
  asteroid?: Resolver<ResolversTypes['Asteroid'], ParentType, ContextType>;
  starship?: Resolver<ResolversTypes['Starship'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = Context, ParentType = ResolversParentTypes['Mutation']> = {
  mineAsteroid?: Resolver<
    ResolversTypes['AsteroidAndStarship'],
    ParentType,
    ContextType,
    RequireFields<MutationMineAsteroidArgs, 'asteroidId' | 'starshipId'>
  >;
};

export type QueryResolvers<ContextType = Context, ParentType = ResolversParentTypes['Query']> = {
  asteroid?: Resolver<
    Maybe<ResolversTypes['Asteroid']>,
    ParentType,
    ContextType,
    RequireFields<QueryAsteroidArgs, 'id'>
  >;
  asteroids?: Resolver<Array<ResolversTypes['Asteroid']>, ParentType, ContextType>;
  resource?: Resolver<ResolversTypes['Resource'], ParentType, ContextType, RequireFields<QueryResourceArgs, 'id'>>;
};

export type ResourceResolvers<ContextType = Context, ParentType = ResolversParentTypes['Resource']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resourceType?: Resolver<ResolversTypes['ResourceType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StarshipResolvers<ContextType = Context, ParentType = ResolversParentTypes['Starship']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parkedOn?: Resolver<Maybe<ResolversTypes['Asteroid']>, ParentType, ContextType>;
  resources?: Resolver<Array<ResolversTypes['Resource']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Asteroid?: AsteroidResolvers<ContextType>;
  AsteroidAndStarship?: AsteroidAndStarshipResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Resource?: ResourceResolvers<ContextType>;
  Starship?: StarshipResolvers<ContextType>;
};
