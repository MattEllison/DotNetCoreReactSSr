"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CardContainer_1 = require("../shared/CardContainer");
const Card_1 = require("../shared/Card");
const JobSalary_1 = require("../JobSalary");
const employer_1 = require("../../services/employer");
exports.Jobs = ({ history }) => {
    const jobs = employer_1.JobsService.getJobs();
    return (react_1.default.createElement(CardContainer_1.CardContainerStyle, null, jobs.map(({ id, title, company, minSalary, maxSalary }) => {
        return (react_1.default.createElement(Card_1.Card, { onClick: () => {
                history.push(`/employer/job/${id}`);
            }, title: title, key: id },
            react_1.default.createElement("div", null, company),
            react_1.default.createElement(JobSalary_1.JobSalary, { minSalary: minSalary, maxSalary: maxSalary })));
    })));
};
//# sourceMappingURL=Jobs.js.map