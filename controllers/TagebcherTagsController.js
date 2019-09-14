const Controller = require('./Controller');

class TagebcherTagsController {
  constructor(Service) {
    this.service = Service;
  }

  async addDiaryTag(request, response) {
    await Controller.handleRequest(request, response, this.service.addDiaryTag);
  }

  async deleteDiaryTag(request, response) {
    await Controller.handleRequest(request, response, this.service.deleteDiaryTag);
  }

  async getDiaryTags(request, response) {
    await Controller.handleRequest(request, response, this.service.getDiaryTags);
  }

  async updateDiaryTag(request, response) {
    await Controller.handleRequest(request, response, this.service.updateDiaryTag);
  }

}

module.exports = TagebcherTagsController;
