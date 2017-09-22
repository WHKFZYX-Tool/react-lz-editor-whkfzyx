'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ImageSpan = require('./ImageSpan');

var _ImageSpan2 = _interopRequireDefault(_ImageSpan);

var _draftJsWhkfzyx = require('draft-js-whkfzyx');

var _main = require('../utils/stateUtils/main');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findImageEntities(contentBlock, callback) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey != null && _draftJsWhkfzyx.Entity.get(entityKey).getType() === _main.ENTITY_TYPE.IMAGE;
  }, callback);
}

exports.default = {
  strategy: findImageEntities,
  component: _ImageSpan2.default
};