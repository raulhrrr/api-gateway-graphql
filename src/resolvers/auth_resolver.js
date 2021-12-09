const usersResolver = {
  Query: {
    userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
      if (userId == userIdToken) return dataSources.authAPI.getUser(userId);
      else return null;
    },
  },
  Mutation: {
    signUpUser: async (_, { userInput }, { dataSources }) => {
      const authInput = {
        username: userInput.username,
        password: userInput.password,
        name: userInput.name,
        email: userInput.email,
        age: userInput.age,
        location: userInput.location,
        description: userInput.description,
      };
      console.log(typeof authInput);
      console.log("Dentro de resolver signUpUser = " + authInput);
      return await dataSources.authAPI.createUser(authInput);
    },

    updateUser: async (_, { userId, userInput }, { dataSources }) => {
      console.log("Dentro de updateUser, id = " + userId)
      console.log("Dentro de updateUser, authInput = " + userInput)
      const authInput = {
        username: userInput.username,
        password: userInput.password,
        name: userInput.name,
        email: userInput.email,
        age: userInput.age,
        location: userInput.location,
        description: userInput.description,
      };
      return await dataSources.authAPI.updateUser(userId, authInput);
    },

    deleteUser: async (_, { userId }, { dataSources }) => {
      return await dataSources.authAPI.deleteUser(userId);
    },

    logIn: (_, { credentials }, { dataSources }) =>
      dataSources.authAPI.authRequest(credentials),
    refreshToken: (_, { refresh }, { dataSources }) =>
      dataSources.authAPI.refreshToken(refresh),
  },
};
module.exports = usersResolver;
