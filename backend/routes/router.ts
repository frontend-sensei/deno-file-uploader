import { ServerRequest } from "https://deno.land/std/http/server.ts";
import { pathToRegexp } from "https://raw.githubusercontent.com/pillarjs/path-to-regexp/master/src/index.ts";
import { RootController } from "../controllers/root.controller.ts";
import { routes } from "./routes.ts";

export class Router {
    static init(req: ServerRequest): void {
        for (let route of routes) {
            const reg = pathToRegexp(route.path);
            const urlMatch = reg.exec(req.url);
            const methodMatch = route.method === req.method

            if (urlMatch &&  methodMatch) {
                return route.handler(req, urlMatch)
            }
        }
        return RootController.routeNotFound(req);
    }
}
