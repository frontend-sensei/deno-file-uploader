import { ServerRequest } from "https://deno.land/std/http/server.ts";
import { pathResolver } from "../utils/path_resolver.ts";
import { RootController } from "./root.controller.ts";

export class StaticFileController {
    static async returnFile(req: ServerRequest, match: RegExpExecArray) {
        if (match) {
            const filename = match[1];
            const strPath = pathResolver.fromFrontendAssets(filename);
            try {
                let headers: Headers = new Headers()
                if(req.url.includes('.css')) {
                    headers = new Headers({
                        "content-type": "text/css",
                    })
                }

                req.respond({
                    body: await Deno.open(strPath),
                    headers: headers,
                });
            } catch (err) {
                RootController.routeNotFound(req);
            }
        } else {
            return RootController.routeNotFound(req);
        }
    }
}
