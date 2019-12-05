"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React_1 = __importDefault(require("React"));
const react_router_dom_1 = require("react-router-dom");
exports.CandidateProfile = () => {
    return (React_1.default.createElement("div", { style: {
            textAlign: "center"
        } },
        React_1.default.createElement("h1", null, "Profile Page"),
        React_1.default.createElement("h3", null, "Matthew Ellison"),
        React_1.default.createElement("div", null, "Software Developer"),
        React_1.default.createElement("div", null, "Experience: 5 years"),
        React_1.default.createElement(react_router_dom_1.Link, { to: "/candidateQuestionaire" }, "CandidateQuestionaire")));
};
//# sourceMappingURL=CandidateProfile.js.map