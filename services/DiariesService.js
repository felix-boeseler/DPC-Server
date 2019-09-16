/* eslint-disable no-unused-vars */
const Service = require('./Service');

class DiariesService {

  /**
   * Erzeuge ein neues Tagebuch.
   * Der Owner wird automatisch durch die Authentifizierung ermittelt. Generell sollten Name und Patient bei Repräsentation angegeben werden, können aber auch leer (\"\") bleiben.
   *
   * diary Diary Eine Tagebuch Repräsentation (optional)
   * returns full-diary
   **/
  static addDiary({ diary }) {
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
   * Erstelle einen neuen Kontext.
   * Es muss nur der Zeitstempel angegeben werden, ab welchem der Kontext gelten soll. Weiterhin sollten dann nur Attribute engegeben werden müssen, die sich geändert haben. Alle weiteren Werte bleiben unverändert und werden somit (sofern vorhanden) aus dem alten Kontext übernommen. Das hängt u.a. damit zusammen wie die Serverseite diese Änderung bearbeitet. Der Server oder DB wird vermutlich nur bei jedem einzelenn Attribut z.B. KE-Faktoren speichern wann es sich geändert hat und nicht ein komplett neuen Kontext speichern, in welchem alle Werte die gleichgeblieben sind wiederholt werden. Auf der Client-Seite wäre so eine Darstellung aber vermutlich nicht angebracht, da ein Nutzer oder Client immer nur diskret sehen möchte wann sich überhaupt etwas geändert hat. Eine Auschlüsselung auf verschiedene Attribute wäre vermutlich zu viel.
   *
   * diaryId String Die Id des Tagebuches.
   * insulinId String ID des Insulins
   * no response value expected for this operation
   **/
  static addDiaryContext({ diaryId, insulinId }) {
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
   * Erstelle ein neues Medikament
   * ...
   *
   * diaryId String Die Id des Tagebuches.
   * returns inline_response_200_tags
   **/
  static addDiaryDrug({ diaryId }) {
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
   * Erstelle ein neues Medikament
   * ...
   *
   * diaryId String Die Id des Tagebuches.
   * returns inline_response_200_tags
   **/
  static addDiaryInsulin({ diaryId }) {
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
   * Ein Tagebuch löschen.
   * Nur der Besitzer eines Tagebuches kann auch das Tagebuch löschen. Dieses Recht wird implizit aus der Authentifizierung abgeleitet und kann nicht delegiert werden.
   *
   * diaryId String Die Id des Tagebuches.
   * no response value expected for this operation
   **/
  static deleteDiary({ diaryId }) {
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
   * Lösche ein Medikament
   * Überpüfen, ob überhaupt machbar wegen Lösch-Problematik.
   *
   * diaryId String Die Id des Tagebuches.
   * drugId String ID des Medikaments
   * no response value expected for this operation
   **/
  static deleteDiaryDrug({ diaryId, drugId }) {
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
   * Lösche ein Insulin
   * Überpüfen, ob überhaupt machbar wegen Lösch-Problematik.
   *
   * diaryId String Die Id des Tagebuches.
   * insulinId String ID des Insulins
   * no response value expected for this operation
   **/
  static deleteDiaryInsulin({ diaryId, insulinId }) {
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
   * Bekomme alle statischen Informationen über ein Tagebuch.
   * Zu den statischen Informationen zählen Name des Tagebuchs, Patient, Medikamente und Insuline. Diese Informationen werden nicht zeitlich versioniert.
   *
   * diaryId String Die Id des Tagebuches.
   * returns full-diary
   **/
  static getDiary2({ diaryId }) {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(JSON.stringify({ id: "kek", food: global.food })));
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
   * Erhalte eine Auflistung der verwendeten Medikamente eines Tagebuches.
   * Dieser Punkt hat auch erst einmal geringer Priorität. Es muss geguckt werden, ob es einen eigenen get End-Point für ein Medikament geben muss. Genauso wie bei Tags und Insulinen ergibt sich hier eine Lösch-Problematik.
   *
   * diaryId String Die Id des Tagebuches.
   * returns inline_response_200_1
   **/
  static getDiaryDrugs({ diaryId }) {
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
   * Erhalte eine Auflistung der verwendeten Insuline eines Tagebuches
   * Tags sollen dafür benutzt werden, dass der Nutzer selbst Zuordnungen machen kann. Z.B. könnte ein Nutzer ein Tag 'Vor dem Essen' machen. Da die Informationen zu einem Tag kurz sind, gibt es keine eigenen Get Tag 'ID' Endpoint sondern dieser wird nur zum Aktualisieren und löschen eines Tags benutzt.
   *
   * diaryId String Die Id des Tagebuches.
   * no response value expected for this operation
   **/
  static getDiaryInsulins({ diaryId }) {
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
   * Die statischen Tagebuch infomrationen aktualisieren.
   * An dieser Stelle können die Basis Informationen eines Tagebuches aktualisiert werden. Um Medikamente, Insuline oder Tags zu aktualisieren, müssen die einzelnen Sub-Ressourcen verwendet werden. An dieser Stelle ist zu sehen, dass es nicht vorgesehen ist, den Besitzer eines Tagebuches zu ändern.
   *
   * diaryId String Die Id des Tagebuches.
   * inlineObject InlineObject  (optional)
   * returns full-diary
   **/
  static updateDiary({ diaryId, inlineObject }) {
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
   * Aktualisiere die Informationen eines Medikaments
   * Diese Funktion muss erst einmal nicht umgesetzt werden. Es könnte sowieso nur der Name geändert werden.
   *
   * diaryId String Die Id des Tagebuches.
   * drugId String ID des Medikaments
   * no response value expected for this operation
   **/
  static updateDiaryDrug({ diaryId, drugId }) {
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
   * Aktualisiere die Informationen eines Medikaments
   * Diese Funktion muss erst einmal nicht umgesetzt werden. Es könnte sowieso nur der Name geändert werden.
   *
   * diaryId String Die Id des Tagebuches.
   * insulinId String ID des Insulins
   * no response value expected for this operation
   **/
  static updateDiaryInsulin({ diaryId, insulinId }) {
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

module.exports = DiariesService;
