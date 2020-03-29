const enemy = Backbone.Model.extend();
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
  render: function () {
    let self = this;

    this.model.each((enemy) => {
      let enemiesView = new enemyView({ model: enemy });
      self.$el.append(enemiesView.render().$el);
    });
  }

});

export let allEnemiesView = new enemyListView({ el: '#enemyContainer', model: myEnemyList });
