const loginModel = Backbone.Model.extend({
  initialize: function () {
    console.log("New user had ben created");
  }
});
const enemy = Backbone.Model.extend();
const enemyList = Backbone.Collection.extend({
  model: enemy
});

const enemyView = Backbone.View.extend({
  render: () => {
    this.$el.html(this.model.get('name'));
  }
});

let myEnemyList = new enemyList([
  new enemy({ name: 'Enemy1' }),
  new enemy({ name: 'Enemy2' }),
  new enemy({ name: 'Enemy3' }),
  new enemy({ name: 'Enemy4' }),
]);

const enemyListView = Backbone.View.extend({
  render: () => {
    let self = this;

    this.model.each((enemy) => {
      let enemiesView = new enemyView({ model: enemy });
      self.$el.append(enemiesView.render().$el);
    });
  }
});

let allEnemiesView = new enemyListView({ el: '#enemyContainer', model: myEnemyList });
allEnemiesView.render();

$('form').submit((e) => {
  let myUser = new loginModel();

  myUser.set({ 'username': $('#username').first().val() })
  console.log(myUser);
  e.preventDefault();
});


$('.enemyList').click(e => {
  console.log(myEnemyList);
  myEnemyList.models.forEach(el => console.log(el.get('name')));
  e.preventDefault();
});

$('.addEnemy').click(e => {
  let count = 5;
  myEnemyList.add({ name: `Enemy${count}` });
  count++
  e.preventDefault();
})
