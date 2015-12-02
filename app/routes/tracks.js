import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return $.getJSON('https://immense-sierra-2938.herokuapp.com');
  },
});
