import { allEnemiesView } from './models/enemy/enemy.js';
import { loginModel } from './models/login/login.js'

$('form').submit((e) => {
  let myUser = new loginModel();

  myUser.set({ 'username': $('#username').first().val() });
  $('#userForm').prepend(`<h1>${myUser.get('username')}'s Enemy List</h1>`);
  console.log(myUser);
  e.preventDefault();
});


$('.enemyList').click(e => {
  allEnemiesView.render();
  e.preventDefault();
});
