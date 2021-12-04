import { multiParser, FormFile } from 'https://deno.land/x/multiparser@v2.1.0/mod.ts'
import { ServerRequest } from "https://deno.land/std/http/server.ts";
import { RequestBody } from "../utils/request_body.ts";

export class FileController {
    static async saveFile(req: ServerRequest, match: RegExpExecArray) {
        const form = await multiParser(req)
        if (!form) {
            return
        }

        console.log(form)

        const storagePath = './backend/storage/'
        for (let fileGroupKey of Object.keys(form.files)) {

            const filesGroup: FormFile | FormFile[] = form.files[fileGroupKey]

            if("length" in filesGroup && filesGroup.length) {
                for (const file of filesGroup) {
                    await Deno.writeFile(storagePath + file.filename, file.content)
                }
                return
            }

            const file = filesGroup
            if("content" in file && file.content.length) {
                await Deno.writeFile(storagePath + file.filename, file.content)
            }
        }

        req.respond({
            status: 200,
        })
    }
}
