/* eslint-disable no-unused-vars */
const Service = require('./Service');

class KontexteService {

  /**
   * Ehralte Kontexte für Zeitraum.
   * Es werden alle Kontexte für den ausgewählten Zeitraum zurückgegeben. Ist der KOntext für einen Zeitpunkt gewünscht sind End- und Startzeitpunkt gleich einzugeben. <br> Attribute der Kontexte weisen Redundanzen auf, auch wenn es sich um gleiche Attribute handelt. Es ist diese Aufgabe diese Redundanzen ggf. zu behandeln. <br> Falls es für einen Zeitraum keinen Nutzer spezifizierten Kontext gibt, so greigt der Root-Kontext ohne Gültigkeitszeitstempel. 
   *
   * diaryId String Die Id des Tagebuches.
   * from Integer Ab welchen Zeitpunkt (Unix Timestamp)
   * to Integer Bis welchen Zeitpunkt (Unix Timestamp)
   * returns inline_response_200_3
   **/
  static getDiaryContexts({ diaryId, from, to }) {
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

module.exports = KontexteService;
