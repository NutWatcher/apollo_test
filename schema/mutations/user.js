const  { GraphQLBoolean, GraphQLString, GraphQLInt } = require('graphql');

const UserType  = require( '../types/user.js');
const M_User  = require( '../../models/user');

const addUser = {
    type: UserType,
    args: {
        name: {
            type: GraphQLString,
            description: '姓名'
        }
    },
	resolve (root, params, options) {
  		return M_User.addUser(params.name);
	}
}
const deleteUser = {
    type: GraphQLBoolean,
    args: {
        id: {
            type: GraphQLInt,
            description: 'id'
        }
    },
	resolve (root, params, options) {
  		return M_User.deleteUser(params.id);
	}
}
const updateUser = {
    type: UserType,
    args: {
        id: {
            type: GraphQLInt,
            description: 'id'
        },
        name: {
            type: GraphQLString,
            description: '姓名'
        }
    },
	resolve (root, params, options) {
  		return M_User.updateUser(params.id, params.name);
	}
}
module.exports =  { addUser, deleteUser, updateUser };