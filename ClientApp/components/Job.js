"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.Job = props => {
    const { company, minSalary, maxSalary, location, title } = props;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, title),
        react_1.default.createElement("p", null, company),
        react_1.default.createElement("p", null, location)));
};
//# sourceMappingURL=Job.js.map