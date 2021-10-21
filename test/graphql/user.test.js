const { describe, beforeAll, test } = require('jest');
const { gql, ApolloServer } = require('apollo-server');

const { rootSchema } = require('../../graphql/schema');

describe('tests all the queries related to user', () => {
    beforeAll(() => {
        // TODO: set up the database and the server using the factory, I think that would be better
        const server = new ApolloServer({ rootSchema });
    });

    const TEST_CASES = [
        {
            name: 'users',
            query: gql`
                query Users {
                    users {
                        email
                        type
                        id
                    }
                }
            `,
            expected: [
                { id: '1', email: 'george@example.com', type: 'ATHLETE' },
                { id: '2', email: 'steven@example.com', type: 'COACH' },
            ],
            variables: {},
        },
        {
            name: 'user',
            query: gql`
                query User($userId: ID!) {
                    user(id: $userId) {
                        id
                        email
                        type
                    }
                }
            `,
            expected: [
                { id: '1', email: 'george@example.com', type: 'ATHLETE' },
            ],
            variables: { userId: 1 },
        },
    ];

    test.each(TEST_CASES)(
        'checks the response from the $name query',
        ({ name, query, expected, variables }) => {
            const res = await.server.executeOperation({
                query: query,
                variables: variables,
            });

            expect(res).toBe(expected);
        }
    );
});
