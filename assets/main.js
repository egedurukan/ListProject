const loginModel = Backbone.Model.extend({
  initialize: function () {
    console.log("New user had ben created");
  }
});

let myUser = new loginModel();

$('form').submit((e) => {
  myUser.set({ 'username': $('#username').first().val() })
  console.log(myUser);
  e.preventDefault();
});
