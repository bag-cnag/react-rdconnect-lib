var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import "../common.css";
import "./top-bar.css";

export var TopBar = function (_Component) {
    _inherits(TopBar, _Component);

    function TopBar(props) {
        _classCallCheck(this, TopBar);

        return _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).call(this, props));
    }

    _createClass(TopBar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "topBar" },
                React.createElement(
                    "div",
                    { className: "componentTitle" },
                    "Data Overview"
                ),
                React.createElement(
                    "div",
                    { className: "componentContent" },
                    React.createElement(
                        "div",
                        { className: "dataCharts" },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return TopBar;
}(Component);