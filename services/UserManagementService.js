/* eslint-disable no-unused-vars */
const Service = require('./Service');

class UserManagementService {

  /**
   * Get the diaries of the current user (from which the current user is the owner)
   *
   * searchSnipptet String TODO: spezifiziere den Filter genauer
   * no response value expected for this operation
   **/
  static getUserDiaries({ searchSnipptet }) {
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
   * Erhalte Basisfnformationen über Nutzer.
   * Dieser Endpunkt soll genutzt werden, um Nutzer zu suchen, um diesen Freigaben zu geben. Dmentsprechend muss imeer ein Searchsnippet mitgelifert werden, um die Auswahl einzuschränken
   *
   * searchSnipptet String Es werden alle User mit den Namen ausgegeben, die diese Snippet enthalten.
   * returns inline_response_200_3
   **/
  static getUsers({ searchSnipptet }) {
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
   * Registirere einen neuen Nutzer
   * Der Nutzer wird erstellt. Daraufhin, kann der Nutzer sich mit den angegebenen Nutzernamen und Passwort registrieren. <br> Bei der Registrierung wird ein ID-Token sowie der gewünschte Nutzername übergeben. 
   *
   * inlineObject2 InlineObject2  (optional)
   * returns inline_response_201
   **/
  static registerUser({ inlineObject2 }) {
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
   * Erhalte Basisfnformationen und Präferenzen eines Nutzer anhand dessen Id-Tokens
   * Erhalte Basisfnformationen und Präferenzen eines Nutzer anhand dessen Id-Tokens
   *
   * inlineObject1 InlineObject1  (optional)
   * returns User-Info
   **/
  static tokenToUserMatcherPOST({ inlineObject1 }) {
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

module.exports = UserManagementService;
