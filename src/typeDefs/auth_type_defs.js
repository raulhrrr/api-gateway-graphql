const { gql } = require("apollo-server");

const authTypeDefs = gql`
  type Tokens {
    refresh: String!
    access: String!
  }

  type Access {
    access: String!
  }

  input CredentialsInput {
    username: String!
    password: String!
  }

  input SignUpInput {
    username: String!
    password: String!
    name: String!
    email: String!
    age: Int!
    location: String! 
    description: String
  }

  input UpdateUser {
    username: String
    password: String
    name: String
    email: String
    age: String
    location: String
    description: String
  }

  type UserDetail {
    id: Int!
    username: String!
    name: String!
    email: String!
    age: Int!
    location: String! 
    description: String!
  }

  type Mutation {
    signUpUser(userInput: SignUpInput!): Tokens!
    updateUser(userId: Int!, userInput: UpdateUser!): UserDetail!
    deleteUser(userId: Int!): Boolean!
    logIn(credentials: CredentialsInput!): Tokens!
    refreshToken(refresh: String!): Access!
  }

  type Query {
    userDetailById(userId: Int!): UserDetail!
  }
`;
module.exports = authTypeDefs;
