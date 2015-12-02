import Ember from 'ember';

var padZeros = function(num) {
  if (num < 10) {
    return '0' + num;
  }

  return num;
};

export function durationToMins(params/*, hash*/) {
  return Math.floor(params[0] / 60) + ":" + padZeros(params[0] % 60);
}

export default Ember.Helper.helper(durationToMins);
