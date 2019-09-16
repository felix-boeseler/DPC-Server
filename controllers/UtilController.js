const Controller = require('./Controller');

class UtilController {
  constructor(Service) {
    this.service = Service;
  }

  async getBolusCalculatorBolusRecommendation(request, response) {
    await Controller.handleRequest(request, response, this.service.getBolusCalculatorBolusRecommendation);
  }

}

module.exports = UtilController;
