import "reflect-metadata";
import { RequestHandler } from "express";
import { CrowllerController, LoginController } from "../controller";

export function use(middleware: RequestHandler) {
  return function (target: CrowllerController | LoginController, key: string) {
    const originMiddleWare =
      Reflect.getMetadata("middlewares", target, key) || [];
    originMiddleWare.push(middleware);
    Reflect.defineMetadata("middlewares", originMiddleWare, target, key);
  };
}
