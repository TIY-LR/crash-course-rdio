import Ember from 'ember';

export default Ember.Route.extend({
  activeAlbum: Ember.inject.service('active-album'),

  model(params) {
    return $.getJSON(`https://immense-sierra-2938.herokuapp.com/albums/${params.id}`);
  },

  afterModel(model) {
    Ember.set(this, 'activeAlbum.album', model.result);
  },

  serialize(model) {
    return {id: model.key};
  }
});
