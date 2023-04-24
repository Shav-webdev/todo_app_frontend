import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  deleteTodo: Scalars['ID'];
  updateTodo: Todo;
};


export type MutationCreateTodoArgs = {
  title: Scalars['String'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  todo?: Maybe<Todo>;
  todos: Array<Todo>;
};


export type QueryTodoArgs = {
  id: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newTodo: Todo;
};

export type Todo = {
  __typename?: 'Todo';
  dueDate?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type CreateTodoMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: string, title: string, dueDate?: string | null } };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['ID'];
  title: Scalars['String'];
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'Todo', id: string, title: string, dueDate?: string | null } };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: string };

export type ToDosQueryVariables = Exact<{ [key: string]: never; }>;


export type ToDosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, title: string, dueDate?: string | null }> };

export type NewTodoSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewTodoSubscription = { __typename?: 'Subscription', newTodo: { __typename?: 'Todo', id: string, title: string, dueDate?: string | null } };


export const CreateTodoDocument = gql`
    mutation createTodo($title: String!) {
  createTodo(title: $title) {
    id
    title
    dueDate
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation updateTodo($id: ID!, $title: String!) {
  updateTodo(id: $id, title: $title) {
    id
    title
    dueDate
  }
}
    `;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($id: ID!) {
  deleteTodo(id: $id)
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const ToDosDocument = gql`
    query ToDos {
  todos {
    id
    title
    dueDate
  }
}
    `;

/**
 * __useToDosQuery__
 *
 * To run a query within a React component, call `useToDosQuery` and pass it any options that fit your needs.
 * When your component renders, `useToDosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToDosQuery({
 *   variables: {
 *   },
 * });
 */
export function useToDosQuery(baseOptions?: Apollo.QueryHookOptions<ToDosQuery, ToDosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ToDosQuery, ToDosQueryVariables>(ToDosDocument, options);
      }
export function useToDosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ToDosQuery, ToDosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ToDosQuery, ToDosQueryVariables>(ToDosDocument, options);
        }
export type ToDosQueryHookResult = ReturnType<typeof useToDosQuery>;
export type ToDosLazyQueryHookResult = ReturnType<typeof useToDosLazyQuery>;
export type ToDosQueryResult = Apollo.QueryResult<ToDosQuery, ToDosQueryVariables>;
export const NewTodoDocument = gql`
    subscription newTodo {
  newTodo {
    id
    title
    dueDate
  }
}
    `;

/**
 * __useNewTodoSubscription__
 *
 * To run a query within a React component, call `useNewTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewTodoSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewTodoSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewTodoSubscription, NewTodoSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewTodoSubscription, NewTodoSubscriptionVariables>(NewTodoDocument, options);
      }
export type NewTodoSubscriptionHookResult = ReturnType<typeof useNewTodoSubscription>;
export type NewTodoSubscriptionResult = Apollo.SubscriptionResult<NewTodoSubscription>;