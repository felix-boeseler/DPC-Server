const Controller = require('./Controller');

class GrantManagementController {
  constructor(Service) {
    this.service = Service;
  }

  async getGrantsForUser(request, response) {
    await Controller.handleRequest(request, response, this.service.getGrantsForUser);
  }

  async getGrantsFromDiary(request, response) {
    await Controller.handleRequest(request, response, this.service.getGrantsFromDiary);
  }

  async grantAccessToUser(request, response) {
    await Controller.handleRequest(request, response, this.service.grantAccessToUser);
  }

  async revokeAccess(request, response) {
    await Controller.handleRequest(request, response, this.service.revokeAccess);
  }

  async updateAccess(request, response) {
    await Controller.handleRequest(request, response, this.service.updateAccess);
  }

}

module.exports = GrantManagementController;
