const Controller = require('./Controller');

class TagebcherEssensdatenbankController {
  constructor(Service) {
    this.service = Service;
  }

  async getDiary(request, response) {
    await Controller.handleRequest(request, response, this.service.getDiary);
  }

}

module.exports = TagebcherEssensdatenbankController;
