import { gql } from 'apollo-angular';

export const mutationAuthorizeUser = gql`
    mutation AuthorizeUser($input: AuthorizeUserInput!) {
        authorizeUser(input: $input) {
            userPayload {
                id
                login
                token
            }
        }
    }
`;

export const mutationRegisterUser = gql`
    mutation RegisterUser($input: RegisterUserInput!) {
        registerUser(input: $input) {
            userPayload {
                id
                login
                token
            }
        }
    }
`;
