"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const postController_1 = require("./posts/postController");
const port = 9090;
const app = new app_1.default([
    new postController_1.default(),
], port);
app.listen();
