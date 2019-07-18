const  { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean
  } = require('graphql');
  


  module.exports =  new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString,
            description: '姓名'
        }
    }
});