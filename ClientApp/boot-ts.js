"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aspnet_prerendering_1 = require("aspnet-prerendering");
exports.default = aspnet_prerendering_1.createServerRenderer(params => {
    return new Promise((resolve, reject) => {
        const html = `
            <h1>Hello world!</h1>
            <p>Current time in Node is: ${new Date()}</p>
            <p>Request path is: ${params.location.path}</p>
            <p>Absolute URL is: ${params.absoluteUrl}</p>`;
        resolve({ html });
    });
});
//# sourceMappingURL=boot-ts.js.map