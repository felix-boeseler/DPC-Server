const Controller = require('./Controller');

class UserManagementController {
  constructor(Service) {
    this.service = Service;
  }

  async getUserDiaries(request, response) {
    await Controller.handleRequest(request, response, this.service.getUserDiaries);
  }

  async getUsers(request, response) {
    await Controller.handleRequest(request, response, this.service.getUsers);
  }

  async registerUser(request, response) {
    await Controller.handleRequest(request, response, this.service.registerUser);
  }

  async tokenToUserMatcherPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.tokenToUserMatcherPOST);
  }

}

module.exports = UserManagementController;
