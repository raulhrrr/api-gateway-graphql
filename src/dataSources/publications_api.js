const { RESTDataSource } = require("apollo-datasource-rest");

const serverConfig = require("../server");

class PublicationsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.publications_api_url;
  }

  async createPublication(data) {
      data = new Object(JSON.parse(JSON.stringify(data)));
      return await this.post(`/publication/add`, data)
  }

  async getPublications() {
    return await this.get(`/publications/`);
  }

  async getPublication(publicationId) {
    console.log("Dentro de api publication con id " + publicationId)
    return await this.get(`/publication/${publicationId}`)
  }
}

module.exports = PublicationsAPI;
