const publicationsResolver = require("./publications_resolver");
const authResolver = require("./auth_resolver");
const lodash = require("lodash");
const resolvers = lodash.merge(publicationsResolver, authResolver);

module.exports = resolvers;
