"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
const aspnet_prerendering_1 = require("aspnet-prerendering");
const HelloWorld = props => {
    console.log(props);
    return (react_1.default.createElement("div", null,
        "what no really Like For reals 'm a react app booooii Is Gold User hello",
        props.isGoldUser ? "IS" : "IS not"));
};
exports.default = aspnet_prerendering_1.createServerRenderer(params => {
    console.log("params ar", params.data);
    return new Promise((resolve, reject) => {
        resolve({
            html: server_1.renderToString(react_1.default.createElement(HelloWorld, { isGoldUser: params.data.isGoldUser }))
        });
    });
});
//# sourceMappingURL=Index-app.js.map