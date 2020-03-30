import { allEnemiesView } from './models/enemy/enemy.js'
import { loginModel } from './models/login/login.js'

$('#userForm').submit((e) => {
  let myUser = new loginModel();

  myUser.set({ 'username': $('#username').first().val() });
  $('#userInfo').prepend(`<h1>${myUser.get('username')}'s Enemy List</h1>`);
  $('#userForm').remove();
  e.preventDefault();
});
