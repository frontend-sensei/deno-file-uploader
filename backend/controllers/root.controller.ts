import { ServerRequest } from "https://deno.land/std/http/server.ts";
import { pathResolver } from "../utils/path_resolver.ts";

export class RootController {
    static async returnPage(req: ServerRequest) {
        const filename = 'index.html';
        const strPath = pathResolver.fromFrontend(filename)
        req.respond({ body: await Deno.open(strPath) })
    }
    static routeNotFound(req: ServerRequest) {
        req.respond({ status: 404, body: "404! Page Not Found!" });
    }
}
