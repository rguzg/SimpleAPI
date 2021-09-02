const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Pokemon {
        id: ID!
        name: String!
        height: String!
        weight: String!
        abilities: [Strings!]!
        sprites: [Strings!]!
        stats: [Stats!]!
        types: [Strings!]!
    }

    type Stats {
        id: ID!
        name: String!
        base_stat: Int!
    }

    type Query {
        getPokemon(id: Int, name: String): Pokemon
    }
`);