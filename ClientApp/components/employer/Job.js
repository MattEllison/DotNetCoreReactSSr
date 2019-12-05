"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const employer_1 = require("../../services/employer");
exports.JobWithRouter = ({ match: { params } }) => react_1.default.createElement(exports.Job, { jobId: parseInt(params.id) });
exports.Job = ({ jobId }) => {
    const { company, minSalary, maxSalary, location, title } = employer_1.JobsService.getJob(jobId);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, title),
        react_1.default.createElement("p", null, company),
        react_1.default.createElement("p", null, location)));
};
//# sourceMappingURL=Job.js.map