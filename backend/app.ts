import { serve } from "https://deno.land/std/http/server.ts";
import { Router } from "./routes/router.ts";
import { Logger } from "https://raw.githubusercontent.com/deepakshrma/deno_util/master/logger.ts";

const logger = new Logger();

const PORT = 8080;
const server = serve({ port: PORT });

console.log(`Server is running on http://localhost:${PORT}`);

for await (const req of server) {
    logger.info("/%s:\t%s \t\t%s", req.method, req.url, new Date().toISOString());
    Router.init(req);
}
