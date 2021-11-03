const { gql, ApolloServer } = require('apollo-server');
const { rootSchema } = require('../../graphql/schema');
const { db } = require('../../database/database');

describe('tests all the queries related to user', () => {
    let server;

    beforeAll(() => {
        // insert setup scripts here to test with mock database
        db.query("INSERT INTO users " +
            "VALUES ('1', 'jerry@example.com', 'ATHLETE'), " +
            "('2', 'thomas@example.com', 'COACH')")
        server = new ApolloServer(rootSchema);
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
            expected: {
                users: [
                    { id: '1', email: 'jerry@example.com', type: 'ATHLETE' },
                    { id: '2', email: 'thomas@example.com', type: 'COACH' },
                ],
            },
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
            expected: {
                user: { id: '1', email: 'jerry@example.com', type: 'ATHLETE' },
            },
            variables: { userId: 1 },
        },
    ];

    test.each(TEST_CASES)(
        'checks the response from the $name query',
        async ({ name, query, expected, variables }) => {
            const res = await server.executeOperation({
                query: query,
                variables: variables,
            });
            
            expect(res.data).toEqual(expected);
        }
    );
});
