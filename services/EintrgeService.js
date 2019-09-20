/* eslint-disable no-unused-vars */
const Service = require('./Service');

class EintrgeService {

  /**
   * Erstelle einen neuen Eintrag in dem Tagebuch.
   * Generell muss nur ein Zeitstempel angegeben werden und die anderen Attribute sind optional. Das bedeutet, dass z.B. bei einer BZ-Messung nur der Zeitstempel und Blutzcker-Wert übergeben werden muss. Der Aufrufer dieser Methode muss selbst darauf achten, dass die richtigen Medikamenten und Insulin-IDs übertragen werden. Falsche IDs führen zu einem Fehler.
   *
   * diaryId String Die ID des Tagebuches, bei welchem ein Eintrag hinzugefügt werden soll.
   * entryReprResponse EntryReprResponse Eine Repräsentation des zu erstellenden Tagebuch-Eintrages (optional)
   * returns Entry-Repr-Response
   **/
  static addDiaryEntry(params) {
    return new Promise(
      async (resolve) => {
        try {
          params.body.id = Math.floor(Math.random() * 10000);
          if (params.body.foodIntakes) {
            params.body.foodIntakes.filter(x => x.food).filter(x => typeof x.food == "string").forEach(element => {
              element.food = global.food.find(x => x.id == element.food);
            });
          }
          global.entries.push(params.body);
          resolve(Service.successResponse(JSON.stringify(params.body)));
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
   * Lösche einen Eintrag
   * Hier muss nochmal überlegt werden, ob und wie Einträge gelöscht werden. Ein anderer Ansatz wäre, dass Einträge ein active Flag haben, dass bei einem Patch gesetzt wird - Das bei einem Delete auszuführen wäre vermutlich laut Rest falsch.
   *
   * diaryId String Die Id des Tagebuches.
   * entryId String ID des Eintrages
   * no response value expected for this operation
   **/
  static deleteDiaryEntry({ diaryId, entryId }) {
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
   * Erhalte alle Entries. Optional sollten Such-Kriterien oder Filter angegeben werden können.
   * <ul> <li> Allgemeine (einache) Suchparameter, werden in der URL-Quey angegeben. </li> <li> Komplexe Such-Abfragen werden im Body angegeben. Hier müsste man dann gucken, wie das umsetzbar ist (vorallem mit Caches) da Bodies in Get-Anfragen unüblich sind. <ul> <li> Es muss auch überlegt werden, ob eine Filterung nach bestimmten Kriterien überhaupt Serverseitig passieren soll, oder clientseitig. </li> <li> Natürlich unterstützt Swagger keine Bodies in Get anfragen. -> Entweder selbst händisch im Code einfügen, oder in Post und Get aufteilen (Post Filter-Daten, Kriege Such ID zurück, mache Get auf Such-Ressource mit ID. ISt für Cachen aber auch nicht gut). </li> </ul> </li> <li> Es muss noch überprüft werden, ob die Entries in dieser Liste nur ein Subset der Informationen enthalten sollen und alle Informationen eines Eintrages erst mit dem Get-Request zu dem spezifischen Entry einsehbar sind. </li> </ul>
   *
   * diaryId String Die Id des Tagebuches.
   * from Integer Zeit in Unix-Zeit (Einschließlich) (optional)
   * to Integer Zeit in Unix-Zeit (Einschließlich) (optional)
   * limit Integer Die Anzahl der maximalen Einträge, die zurückgegeben werden sollen. Ist nur mit order gültig. (optional)
   * order String Ob die Einträge beginnend von dem ältesten oder neusten Eintrag sortiert zurückgegeben werden sollen. (optional)
   * showDeactivatedEntries Boolean Je nachdem, wie das Löschen umgesetzt wird, wäre dieses Parameter evtl. sinnvoll. (optional)
   * returns inline_response_200_2
   **/
  static getDiaryEntries(params) {
    return new Promise(
      async (resolve) => {
        try {
          await global.validate(params.auth.split(" ")[1]);
          resolve(Service.successResponse(JSON.stringify({ entries: global.entries })));
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
   * Erhalte eine Detaillierte Repräsentation eines Eintrages.
   * Hier sollten alle ausführlichen Informationen gezeigt werden, die es zu einem Eintrag gibt. Eventuell wäre es auch sinnvoll aufzuzeigen oder zu verlinken, wer was gemacht hat [Aber erst später]. <br> Evtl. ist dieser Endpoint später auch nur noch nützlich, um für einen Eintrag eine Historie anzuzeigen. 
   *
   * diaryId String Die Id des Tagebuches.
   * entryId String ID des Eintrages
   * returns Entry-Repr-Response
   **/
  static getDiaryEntry({ diaryId, entryId }) {
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
   * Aktualisiere einen Eintrag.
   * Hier sollten natürlich nur die Felder angegeben werden, die auch aktualisiert werden sollen.
   *
   * diaryId String Die Id des Tagebuches.
   * entryId String ID des Eintrages
   * no response value expected for this operation
   **/
  static updateDiaryEntry({ diaryId, entryId }) {
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

module.exports = EintrgeService;
