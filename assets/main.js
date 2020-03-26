const loginModel = Backbone.Model.extend({
  initialize: function () {
    console.log("New user had ben created");
  }
});

let myUser = new loginModel();
