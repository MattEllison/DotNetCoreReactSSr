"use strict";
exports.__esModule = true;
var aspnet_prerendering_1 = require("aspnet-prerendering");
exports["default"] = aspnet_prerendering_1.createServerRenderer(function (params) {
    return new Promise(function (resolve, reject) {
        var html = "\n            <h1>Hello world!</h1>\n            <p>Current time in Node is: " + new Date() + "</p>\n            <p>Request path is: " + params.location.path + "</p>\n            <p>Absolute URL is: " + params.absoluteUrl + "</p>";
        resolve({ html: html });
    });
});
