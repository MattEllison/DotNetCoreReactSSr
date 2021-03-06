"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const CardStyle = styled_components_1.default.div `
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
`;
exports.Card = (_a) => {
    var { title, children } = _a, props = __rest(_a, ["title", "children"]);
    return (react_1.default.createElement(CardStyle, Object.assign({}, props),
        react_1.default.createElement("div", null),
        react_1.default.createElement("b", null, title),
        children));
};
//# sourceMappingURL=Card.js.map