const {
    GraphQLSchema,
    GraphQLObjectType
} = require('graphql')

const mutations = require( './mutations');
const queries = require('./queries');
const UserType = require('./types/user.js');

let schema = new GraphQLSchema({
    types: [UserType],
    query: new GraphQLObjectType({
        name: 'Query',
        fields: queries
    }),

    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutations
    })
});

module.exports = schema;