/* eslint-disable no-unused-vars */
const Service = require('./Service');

class GrantManagementService {

  /**
   * Get the grants for diaries that were given to the user
   * Der gegebenen Zugriffsrechte sollten in einer Listen-artigen Struktur zurückgegeben werden.
   *
   * no response value expected for this operation
   **/
  static getGrantsForUser() {
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
   * Get the grants that are associated with the given diary
   * Diese Informationen sollten nur abrufbar sein, wenn der momentan Nutzer auch besitzer des Tagebuches ist
   *
   * diaryId String Die Id des Tagebuches.
   * no response value expected for this operation
   **/
  static getGrantsFromDiary({ diaryId }) {
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
   * Give someone access to a diary
   * Diese Informationen sollten nur abrufbar sein, wenn der momentan Nutzer auch besitzer des Tagebuches ist
   *
   * diaryId String Die Id des Tagebuches.
   * no response value expected for this operation
   **/
  static grantAccessToUser({ diaryId }) {
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
   * Revoke access
   * Diese Informationen sollten nur abrufbar sein, wenn der momentan Nutzer auch besitzer des Tagebuches ist
   *
   * diaryId String Die Id des Tagebuches.
   * grantId String ID of the grant
   * no response value expected for this operation
   **/
  static revokeAccess({ diaryId, grantId }) {
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
   * Update access
   * Diese Informationen sollten nur abrufbar sein, wenn der momentan Nutzer auch besitzer des Tagebuches ist
   *
   * diaryId String Die Id des Tagebuches.
   * grantId String ID of the grant
   * no response value expected for this operation
   **/
  static updateAccess({ diaryId, grantId }) {
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

module.exports = GrantManagementService;
