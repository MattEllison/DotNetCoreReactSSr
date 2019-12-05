"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const employer_1 = require("../../services/employer");
const useForm_1 = require("../hooks/useForm");
const jobStub = {
    id: 0,
    company: "",
    location: "",
    minSalary: 0,
    maxSalary: 0,
    title: ""
};
exports.PostJob = ({ history }) => {
    const { inputs: job, handleInputChange, handleSubmit } = useForm_1.useFormHook(jobStub, () => {
        employer_1.JobsService.addJob(job);
        history.push("/employer");
    });
    return (react_1.default.createElement("form", { onSubmit: handleSubmit },
        react_1.default.createElement("p", null, "Title"),
        react_1.default.createElement("input", { name: "title", value: job.title, onChange: handleInputChange, type: "text" }),
        react_1.default.createElement("p", null, "Min Salary"),
        react_1.default.createElement("input", { name: "minSalary", value: job.minSalary, onChange: handleInputChange, type: "number" }),
        react_1.default.createElement("p", null, "Max Salary"),
        react_1.default.createElement("input", { name: "maxSalary", value: job.maxSalary, onChange: handleInputChange, type: "number" }),
        react_1.default.createElement("div", null,
            react_1.default.createElement("input", { type: "submit", value: "Create Job" }))));
};
//# sourceMappingURL=PostJob.js.map