const publicationsResolver = {
  Query: {
    getAllPublications: (_, __, { dataSources }) => {
      return dataSources.publicationsAPI.getPublications();
    },
    getPublicationById: (_, { publicationId }, { dataSources }) => {
      console.log("Dentro de resolver publication con id " + publicationId)

      return dataSources.publicationsAPI.getPublication(publicationId);
    },
  },
  Mutation: {
    createPublication: async (_, { userInput }, { dataSources }) => {
      const deploymentInput = {
        location: userInput.location,
        description: userInput.description,
        id_user: userInput.id_user,
        image: userInput.image,
        date: userInput.date,
      };
      return await dataSources.publicationsAPI.createPublication(deploymentInput);
    },
  },
};

module.exports = publicationsResolver;
