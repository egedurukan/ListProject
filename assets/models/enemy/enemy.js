const enemy = Backbone.Model.extend({
  urlRoot: '/enemylist'
});
const enemyList = Backbone.Collection.extend({
  model: enemy
});

const enemyView = Backbone.View.extend({

  render: function () {
    this.$el.html(this.model.get('name'));

    return this;
  }
});

let myEnemyList = new enemyList([
  new enemy({ name: 'Enemy1' }),
  new enemy({ name: 'Enemy2' }),
  new enemy({ name: 'Enemy3' }),
  new enemy({ name: 'Enemy4' }),
]);

const enemyListView = Backbone.View.extend({
  initialize: function () {
    this.render();
    this.model.on('add', this.updateList, this);
  },
  render: function () {
    let self = this;

    this.model.each((enemy) => {
      let enemiesView = new enemyView({ model: enemy });
      self.$el.append(enemiesView.render().$el);
    });
  },
  updateList: function () {
    $('#enemyContainer').html('');
    this.$el.append(this.model.last());
    allEnemiesView.render();
  }
});

$('#enemyForm').submit((e) => {
  e.preventDefault();
  myEnemyList.add(new enemy({ name: $('#enemyName').first().val() }));
  $('#enemyForm')[0].reset();
});

export let allEnemiesView = new enemyListView({ el: '#enemyContainer', model: myEnemyList });
