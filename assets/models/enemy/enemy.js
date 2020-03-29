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

let count = 5;
$('.addEnemy').click(e => {
  myEnemyList.add(new enemy({ name: `Enemy${count}` }));
  count++
  e.preventDefault();
});

export let allEnemiesView = new enemyListView({ el: '#enemyContainer', model: myEnemyList });
