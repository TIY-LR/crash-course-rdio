import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('tracks', { path: '/' }, function() {
    this.route('info', { path: '/:id' });
  });
});

export default Router;
