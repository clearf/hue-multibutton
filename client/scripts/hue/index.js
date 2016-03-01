'use strict';
var angular = require('angular');

var modulename = 'hue';

module.exports = function(namespace) {
    var ngStorage = require('ngstorage')
    var fullname = namespace + '.' + modulename;
    var mod = angular.module(modulename, [ngStorage.name]);
    // inject:folders start
    // inject:folders end
    mod.namespace = mod.namespace || {};
    mod.factory('lodash', function(){ return require('lodash')} )
    mod.factory('machina', function(){ return require('machina')})
    mod.factory('Huejay', function() {
        return require('huejay')
    });
    mod.factory('Hue', require('./hue'))
    mod.directive('login', require('./login-directive'))
    mod.constant('BUTTON_EVENTS', [
        {label: 1, id: 34 },
        {label: 2, id: 16 },
        {label: 3, id: 17 },
        {label: 4, id: 18 }
    ])
    mod.directive('addRule', require('./add-rule-directive'))

    return mod;
};
