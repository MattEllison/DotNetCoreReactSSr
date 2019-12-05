"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const PostJob_1 = require("./PostJob");
const styled_components_1 = __importDefault(require("styled-components"));
const Jobs_1 = require("./Jobs");
const EditJob_1 = require("./EditJob");
const EmployerOptionsStyle = styled_components_1.default.div `
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
`;
const EmployerHeaderStyle = styled_components_1.default.div `
  a {
    padding-left: 10px;
  }
`;
exports.Employer = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h2", null, "Employer"),
        react_1.default.createElement(EmployerHeaderStyle, null,
            react_1.default.createElement(react_router_dom_1.Link, { to: "/employer" }, "Jobs"),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/employer/post" }, "Post a Job")),
        react_1.default.createElement(EmployerOptionsStyle, null,
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/employer/job/:id", component: EditJob_1.Editjob }),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/employer/post", component: PostJob_1.PostJob }),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/employer", component: Jobs_1.Jobs }))));
};
//# sourceMappingURL=Employer.js.map