"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class PostsController {
    constructor() {
        this.path = '/posts';
        this.router = express.Router();
        this.posts = [
            {
                author: 'Marcin',
                content: 'Dolor sit amet',
                title: 'Lorem Ipsum',
            }
        ];
        this.getAllPosts = (request, response) => {
            response.send(this.posts);
        };
        this.createAPost = (request, response) => {
            const post = request.body;
            this.posts.push(post);
            response.send(post);
        };
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createAPost);
    }
}
exports.default = PostsController;
