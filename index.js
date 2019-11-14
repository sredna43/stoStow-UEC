const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    # Object: Because SGA has many random things, this is pretty vague
    type Object {
        name: String
        description: String
        location: String
        quantity: Int
        categories: [String]
        checkedOut: Boolean
        checkedOutBy: String
    }

    type Query {
        objects: [Object]
    }
`;

const testData = [
    {
        name: 'Spoons',
        description: 'We have 50 silver spoons in a box.',
        location: 'A4',
        quantity: 50,
        categories: ['food','silverware','misc'],
        checkedOut: true,
        checkedOutBy: 'Anders Olson'
    },
    {
        name: 'Mugs',
        description: 'Black vacuum sealed mugs, about 12oz, with the St. Olaf logo on them',
        location: 'C2',
        quantity: 13,
        categories: ['food','drinkware','gear','olaf'],
        checkedOut: false,
        checkedOutBy: ''
    }
];

const resolvers = {
    Query: {
        objects: () => testData,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});