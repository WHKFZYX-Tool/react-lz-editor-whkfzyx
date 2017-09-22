

'use strict';

var _require = require('immutable'),
    List = _require.List;

var ulStyleType = List(['disc', 'circle', 'square', 'image']);

var olStyleType = List(['decimalType1', 'decimalType2', 'decimalType3']);

var DraftBlockTypeAnalysis = {

    getDraftBlockTypeAnalysis: function getDraftBlockTypeAnalysis(blockType) {
        switch (blockType) {
            case 'unordered-list-item-disc':
            case 'unordered-list-item-circle':
            case 'unordered-list-item-square':
            case 'unordered-list-item-image':
                return 'unordered-list-item';
            case 'ordered-list-item-decimal-type1':
            case 'ordered-list-item-decimal-type2':
            case 'ordered-list-item-decimal-type3':
                return 'ordered-list-item';
            default:
                return blockType;
        }
    },

    getUlStyleType: function getUlStyleType(styleKey) {
        return ulStyleType.get(styleKey, 'disc');
    },

    getOlStyleType: function getOlStyleType(styleKey) {
        return olStyleType.get(styleKey, 'decimalType1');
    }

};

module.exports = DraftBlockTypeAnalysis;