class Auth {

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }
 /**
     * @param {object} token
   */
  static authenticateUserObject(userObj) {
    localStorage.setItem('userObj', JSON.stringify(userObj));
      localStorage.setItem('RoleId', userObj.UserRoleId);
  }
  static isAuthenticateUserObject() {
     return localStorage.getItem('userObj');
  }
    static RoleUser() {
    return localStorage.getItem('RoleId');
  }
  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }
  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('token');
  }
    static deAuthenticateUserObject() {
    localStorage.removeItem('userObj');
  }
static deRoleUser() {
   localStorage.removeItem('RoleId');
  }
  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return localStorage.getItem('token');
  }

}

export default Auth;
