"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
function use(middleware) {
    return function (target, key) {
        var originMiddleWare = Reflect.getMetadata("middlewares", target, key) || [];
        originMiddleWare.push(middleware);
        Reflect.defineMetadata("middlewares", originMiddleWare, target, key);
    };
}
exports.use = use;
