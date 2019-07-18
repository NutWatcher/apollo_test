const  { GraphQLList, GraphQLString, GraphQLInt } = require('graphql');

const UserType  = require( '../types/user.js');
const M_User  = require( '../../models/user');

const user = {
    type: UserType,
    args: {
        id: {
            type: GraphQLInt,
            description: 'id'
        }
    },
	resolve (root, params, options) {
  		return M_User.getUser(params.id);
	}
}
const users = {
    type: new GraphQLList(UserType),
    description: '所有用户信息',
	resolve (root, params, options) {
        console.log('所有用户信息');
  		return M_User.getAll();
	}
}
module.exports =  { user, users };