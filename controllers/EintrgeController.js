const Controller = require('./Controller');

class EintrgeController {
  constructor(Service) {
    this.service = Service;
  }

  async addDiaryEntry(request, response) {
    await Controller.handleRequest(request, response, this.service.addDiaryEntry);
  }

  async deleteDiaryEntry(request, response) {
    await Controller.handleRequest(request, response, this.service.deleteDiaryEntry);
  }

  async getDiaryEntries(request, response) {
    await Controller.handleRequest(request, response, this.service.getDiaryEntries);
  }

  async getDiaryEntry(request, response) {
    await Controller.handleRequest(request, response, this.service.getDiaryEntry);
  }

  async updateDiaryEntry(request, response) {
    await Controller.handleRequest(request, response, this.service.updateDiaryEntry);
  }

}

module.exports = EintrgeController;
