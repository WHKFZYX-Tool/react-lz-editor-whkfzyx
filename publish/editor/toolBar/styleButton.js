'use strict';

var _css = require('antd/lib/dropdown/style/css');

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _css2 = require('antd/lib/icon/style/css');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _css3 = require('antd/lib/menu/style/css');

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleButton = function (_React$Component) {
    _inherits(StyleButton, _React$Component);

    function StyleButton() {
        _classCallCheck(this, StyleButton);

        var _this = _possibleConstructorReturn(this, (StyleButton.__proto__ || Object.getPrototypeOf(StyleButton)).call(this));

        _this.onToggle = function (e) {
            e.preventDefault();
            _this.props.onToggle(_this.props.style);
        };
        _this.onMenuClick = function (e) {
            _this.props.onToggle(e.key);
        };
        return _this;
    }

    _createClass(StyleButton, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var className = 'RichEditor-styleButton';
            if (this.props.active) {
                className += ' RichEditor-activeButton ant-btn ant-btn-primary ant-btn-icon-only ';
            }

            var ulMenu = _react2.default.createElement(
                _menu2.default,
                { onClick: this.onMenuClick },
                _react2.default.createElement(
                    _menu2.default.Item,
                    { key: 'unordered-list-item-disc' },
                    '\u25CF \u5B9E\u5FC3\u5706'
                ),
                _react2.default.createElement(
                    _menu2.default.Item,
                    { key: 'unordered-list-item-circle' },
                    '\u25CB \u7A7A\u5FC3\u5706'
                ),
                _react2.default.createElement(
                    _menu2.default.Item,
                    { key: 'unordered-list-item-square' },
                    '\u25A0 \u5C0F\u65B9\u5757'
                ),
                _react2.default.createElement(
                    _menu2.default.Item,
                    { key: 'unordered-list-item-image' },
                    '\u25BA \u5C0F\u4E09\u89D2'
                )
            );

            var olMenu = _react2.default.createElement(
                _menu2.default,
                { onClick: this.onMenuClick },
                _react2.default.createElement(
                    _menu2.default.Item,
                    { key: 'ordered-list-item-decimal-type1' },
                    '1,2,3...'
                ),
                _react2.default.createElement(
                    _menu2.default.Item,
                    { key: 'ordered-list-item-decimal-type2' },
                    '1),2),3)...'
                ),
                _react2.default.createElement(
                    _menu2.default.Item,
                    { key: 'ordered-list-item-decimal-type3' },
                    '(1),(2),(3)...'
                )
            );

            var ulolHTML = _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    'span',
                    { className: className, onClick: this.onToggle, title: this.props.text },
                    _react2.default.createElement(_icon2.default, { type: '' + this.props.label })
                ),
                _react2.default.createElement(
                    _dropdown2.default,
                    { overlay: this.props.style === 'unordered-list-item' ? ulMenu : olMenu },
                    _react2.default.createElement(_icon2.default, { type: 'dropdown' })
                )
            );

            var otherHTML = _react2.default.createElement(
                'span',
                { className: className, onClick: this.onToggle, title: this.props.text },
                _react2.default.createElement(_icon2.default, { type: '' + this.props.label })
            );

            return _react2.default.createElement(
                'span',
                null,
                function () {
                    if (_this2.props.style === 'unordered-list-item' || _this2.props.style === 'ordered-list-item') {
                        return ulolHTML;
                    } else {
                        return otherHTML;
                    }
                }(),
                function () {
                    if (!!_this2.props.split) {
                        return _react2.default.createElement(
                            'span',
                            { className: 'RichEditor-controls-split' },
                            _this2.props.split
                        );
                    }
                }()
            );
        }
    }]);

    return StyleButton;
}(_react2.default.Component);

module.exports = StyleButton;