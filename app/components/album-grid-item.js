import Ember from 'ember';

export default Ember.Component.extend({
  activeAlbum: Ember.inject.service('active-album'),

  tagName: 'li',
  classNames: ['top-chart__item'],

  isActive: Ember.computed('activeAlbum.album.key', 'album.key', function() {
    return Ember.get(this, 'activeAlbum.album.key') === Ember.get(this, 'album.key');
  }),
});
