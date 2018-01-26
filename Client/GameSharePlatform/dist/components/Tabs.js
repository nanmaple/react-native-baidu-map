"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_tabs_1 = require("react-tabs");
require("react-tabs/style/react-tabs.css");
exports.default = function () { return (React.createElement(react_tabs_1.Tabs, null,
    React.createElement(react_tabs_1.TabList, null,
        React.createElement(react_tabs_1.Tab, null, "Title 1"),
        React.createElement(react_tabs_1.Tab, null, "Title 2")),
    React.createElement(react_tabs_1.TabPanel, null,
        React.createElement("h2", null, "Any content 1")),
    React.createElement(react_tabs_1.TabPanel, null,
        React.createElement("h2", null, "Any content 2")))); };
//# sourceMappingURL=Tabs.js.map