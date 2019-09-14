const Controller = require('./Controller');

class DiariesController {
  constructor(Service) {
    this.service = Service;
  }

  async addDiary(request, response) {
    await Controller.handleRequest(request, response, this.service.addDiary);
  }

  async addDiaryContext(request, response) {
    await Controller.handleRequest(request, response, this.service.addDiaryContext);
  }

  async addDiaryDrug(request, response) {
    await Controller.handleRequest(request, response, this.service.addDiaryDrug);
  }

  async addDiaryInsulin(request, response) {
    await Controller.handleRequest(request, response, this.service.addDiaryInsulin);
  }

  async deleteDiary(request, response) {
    await Controller.handleRequest(request, response, this.service.deleteDiary);
  }

  async deleteDiaryDrug(request, response) {
    await Controller.handleRequest(request, response, this.service.deleteDiaryDrug);
  }

  async deleteDiaryInsulin(request, response) {
    await Controller.handleRequest(request, response, this.service.deleteDiaryInsulin);
  }

  async getDiary2(request, response) {
    await Controller.handleRequest(request, response, this.service.getDiary2);
  }

  async getDiaryContexts(request, response) {
    await Controller.handleRequest(request, response, this.service.getDiaryContexts);
  }

  async getDiaryDrugs(request, response) {
    await Controller.handleRequest(request, response, this.service.getDiaryDrugs);
  }

  async getDiaryInsulins(request, response) {
    await Controller.handleRequest(request, response, this.service.getDiaryInsulins);
  }

  async updateDiary(request, response) {
    await Controller.handleRequest(request, response, this.service.updateDiary);
  }

  async updateDiaryDrug(request, response) {
    await Controller.handleRequest(request, response, this.service.updateDiaryDrug);
  }

  async updateDiaryInsulin(request, response) {
    await Controller.handleRequest(request, response, this.service.updateDiaryInsulin);
  }

}

module.exports = DiariesController;
