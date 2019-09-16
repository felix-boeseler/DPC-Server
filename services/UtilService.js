/* eslint-disable no-unused-vars */
const Service = require('./Service');

class UtilService {

  /**
   * Bekomme einen Bolus-Vorschlag
   * Dieser End-Point muss eigentlich mit einen GET-Verb arbeiten, jedoch wird aus Realisierungsgründen wie z.B. Swagger ein overloaded Post verwendet. <br> 
   *
   * diary String Die Id des Tagebuches
   * _for Integer (Optional) Für welchen Zeitpunkt soll der Vorschlag sein. Als Default Wert wird der jetzige Zeitpunkt genommen. (optional)
   * no response value expected for this operation
   **/
  static getBolusCalculatorBolusRecommendation({ diary, _for }) {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

}

module.exports = UtilService;
