/* eslint-disable no-unused-vars */
const Service = require('./Service');

class TagebcherTagsService {

  /**
   * Erstelle ein neues Tag für ein Tagebuch.
   * ...
   *
   * diaryId String Die Id des Tagebuches.
   * returns inline_response_200_tags
   **/
  static addDiaryTag({ diaryId }) {
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

  /**
   * Lösche ein Tag
   * Überpüfen, ob überhaupt machbar wegen Lösch-Problematik.
   *
   * diaryId String Die Id des Tagebuches.
   * tagID String ID des Tags.
   * no response value expected for this operation
   **/
  static deleteDiaryTag({ diaryId, tagID }) {
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

  /**
   * Erhalte eine Auflistung der verwendeten Tags eines Tagebuches
   * Tags sollen dafür benutzt werden, dass der Nutzer selbst Zuordnungen machen kann. Z.B. könnte ein Nutzer ein Tag 'Vor dem Essen' machen. Da die Informationen zu einem Tag kurz sind, gibt es keine eigenen Get Tag 'ID' Endpoint sondern dieser wird nur zum Aktualisieren und löschen eines Tags benutzt. <br> Je nachdem wie Lösch-Problematik gelöst wird, wäre evtl. hier eine Filterung nach aktiven und nicht aktiven Tags durch ein Query-Parameter sinnvoll. <br> Die Umsetzung von Tags sollte jedoch erst einmal eine untergeordnete Rolle spielen.
   *
   * diaryId String Die Id des Tagebuches.
   * returns inline_response_200
   **/
  static getDiaryTags({ diaryId }) {
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

  /**
   * Aktualisiere die Informationen eines Tags eines Tagebuches.
   * Diese Funktion muss erst einmal nicht umgesetzt werden. Es könnte sowieso nur der Name geändert werden. Die Idee dahinter ist, dass Tags auch später als komplexere Objekte mit z.B. Bild oder Icon bestehen könnten, was aber in der Arbeit nicht umgesetzt werden.
   *
   * diaryId String Die Id des Tagebuches.
   * tagID String ID des Tags.
   * returns inline_response_200_tags
   **/
  static updateDiaryTag({ diaryId, tagID }) {
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

module.exports = TagebcherTagsService;
