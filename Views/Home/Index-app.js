"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
const aspnet_prerendering_1 = require("aspnet-prerendering");
const HelloWorld = () => (react_1.default.createElement("div", null, "no really Like For reals 'm a react app booooii"));
let app = server_1.renderToString(react_1.default.createElement(HelloWorld, null));
exports.default = aspnet_prerendering_1.createServerRenderer(params => {
    return new Promise((resolve, reject) => {
        resolve({ html: app });
    });
});
//# sourceMappingURL=Index-app.js.map