/* eslint-disable no-unused-vars */
const Service = require('./Service');

class TagebcherEssensdatenbankService {

  /**
   * Bekomme alle Nahrungen des 
   * Zu den statischen Informationen zählen Name des Tagebuchs, Patient, Medikamente und Insuline. Diese Informationen werden nicht zeitlich versioniert.
   *
   * diaryId String Die Id des Tagebuches.
   * returns full-diary
   **/
  static getDiary({ diaryId }) {
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

module.exports = TagebcherEssensdatenbankService;
