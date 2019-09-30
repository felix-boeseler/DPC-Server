/* eslint-disable no-unused-vars */
const Service = require('./Service');

class UserManagementService {

  /**
   * Erhalte Basisfnformationen und Präferenzen eines Nutzer anhand dessen Id-Tokens
   * Erhalte Basisfnformationen und Präferenzen eines Nutzer anhand dessen Id-Tokens
   *
   * returns User-Info
   **/
  static getSelf(params) {
    return new Promise(
      async (resolve) => {
        try {
          let decoded = jwt.decode(params.auth.split(" ")[1]);
          await global.validate(params.auth.split(" ")[1]);
          let user = global.users.get(decoded.sub);
          if (!user) {
            user = {};
          }
          resolve(Service.successResponse(JSON.stringify(user)));
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
   * Get the diaries of the current user (from which the current user is the owner)
   *
   * returns inline_response_200_5
   **/
  static getUserDiaries({ auth }) {
    return new Promise(
      async (resolve) => {
        try {
          let decoded = await global.validate(auth.split(" ")[1]);
          let user = global.users.get(decoded.sub);
          if (!user) {
            throw new { status: 401 };
          }
          let diaryRefs = [];
          for (var [key, value] of user.diaryPrefs) {
            diaryRefs.push({ id: key, preferences: value });
            console.log(key + " = " + value);
          }
          resolve(Service.successResponse(JSON.stringify({ owned: diaryRefs })));
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
   * returns inline_response_200_4
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
   * returns User-Info
   **/
  static registerUser(params) {
    return new Promise(
      async (resolve) => {
        try {
          let decoded = jwt.decode(params.body.idToken);
          let newUser = { name: params.body.username, id: Math.ceil(Math.random() * 1000), preferences: { defaultDiary: "ked" + Math.ceil(Math.random() * 1000) } };
          newUser.diaryPrefs = new Map();
          global.users.set(decoded.sub, newUser);
          resolve(Service.successResponse(JSON.stringify(newUser)));
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
