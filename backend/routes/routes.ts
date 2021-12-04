import { ServerRequest } from "https://deno.land/std/http/server.ts";
import { RootController } from "../controllers/root.controller.ts";
import { StaticFileController } from "../controllers/static_file.controller.ts";
import { FileController } from "../controllers/file.controller.ts";

interface RouteInterface {
    method: string;
    name: string;
    path: string;
    handler: (req: ServerRequest, match: RegExpExecArray) => void;
}

export const routes: RouteInterface[] = [
    {
        name: "root",
        path: "/",
        method: 'GET',
        handler: RootController.returnPage
    },
    {
        name: "static",
        path: "/assets/:pathToFile*",
        method: 'GET',
        handler: StaticFileController.returnFile
    },
    {
        name: "file",
        path: "/file",
        method: 'POST',
        handler: FileController.saveFile
    },
];
