window.Cinder = Ember.Application.create({
  LOG_TRANSITIONS: true
});

Cinder.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.FixtureAdapter
});

Cinder.User = DS.Model.extend({
  name: DS.attr('string')
});

Cinder.User.FIXTURES = [
  {
    id: 1,
    name: 'J.R. "Bob" Dobbs'
  },
  {
    id: 2,
    name: 'Dalek Caan'
  },
  {
    id: 3,
    name: 'Gaius Baltar'
  },
];

Cinder.Router.map(function() {
  this.route('about');
  
  this.resource('users', function() {
    this.route('new',  { path: 'new' });
    this.route('show', { path: ':user_id' });
    this.route('edit', { path: ':user_id/edit' });
  });
});

Cinder.UsersRoute = Ember.Route.extend({
  model: function() {
    return Cinder.User.find();
  }
});
