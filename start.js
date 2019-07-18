const { ApolloServer, gql } = require('apollo-server');
let schema  = require( './schema/index');
// // The GraphQL schema
// const typeDefs = gql`
//   type Query {
//     "A simple type for getting started!"
//     hello: String
//   }
// `;

// // A map of functions which return data for the schema.
// const resolvers = {
//   Query: {
//     hello: () => 'world',
//   },
// };

const server = new ApolloServer({schema});

server.listen(3000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});