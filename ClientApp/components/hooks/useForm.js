"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
exports.useFormHook = (initialState, callback) => {
    const [inputs, setInputs] = react_1.useState(initialState);
    const handleSubmit = event => {
        if (event) {
            event.preventDefault();
        }
        callback(inputs);
    };
    const handleInputChange = event => {
        event.persist();
        setInputs(inputs => (Object.assign({}, inputs, { [event.target.name]: event.target.value })));
    };
    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
};
//# sourceMappingURL=useForm.js.map