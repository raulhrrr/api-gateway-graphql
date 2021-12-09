const { gql } = require("apollo-server");

const publicationsTypeDefs = gql`
    
    type PublicationDetail {
        id: Int!
        location: String!
        description: String!
        image: String!
        id_user: Int!
        date: String!
    }

    input PublicationData {
        location: String!
        description: String!
        image: String!
        id_user: Int!
        date: String!
    }

    extend type Mutation {
        createPublication(userInput: PublicationData!): PublicationDetail!
    }

    extend type Query {
        getAllPublications: [PublicationDetail!]
        getPublicationById(publicationId: Int!): PublicationDetail!
    }

`;

module.exports = publicationsTypeDefs;
