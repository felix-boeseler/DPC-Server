const Controller = require('./Controller');

class KontexteController {
  constructor(Service) {
    this.service = Service;
  }

  async getDiaryContexts(request, response) {
    await Controller.handleRequest(request, response, this.service.getDiaryContexts);
  }

  async updateContext(request, response) {
    await Controller.handleRequest(request, response, this.service.updateContext);
  }

}

module.exports = KontexteController;
