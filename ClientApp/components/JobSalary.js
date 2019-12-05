"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const DisplayFlex = styled_components_1.default.div `
  display: flex;
  width: 100px;
  justify-content: space-between;
`;
exports.JobSalary = ({ minSalary, maxSalary }) => {
    return (react_1.default.createElement(DisplayFlex, null,
        react_1.default.createElement("div", null, new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0
        }).format(minSalary / 1000)),
        react_1.default.createElement("div", null, "-"),
        react_1.default.createElement("div", null, new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0
        }).format(maxSalary))));
};
//# sourceMappingURL=JobSalary.js.map