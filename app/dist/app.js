"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
class App {
    constructor(controllers, port) {
        this.app = express();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }
    initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(this.loggerMiddleware);
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on the port ${this.port}`);
        });
    }
    loggerMiddleware(request, response, next) {
        if (request.method === "GET" || request.method === "DELTE") {
            console.log(`${request.method} ${request.path}`);
            console.log({ Headers: request.headers });
        }
        else {
            console.log(`${request.method} ${request.path}`);
            console.log({ Payload: request.body });
            console.log({ Headers: request.headers });
        }
        next();
    }
}
exports.default = App;
