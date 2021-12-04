export class RequestBody {
    static async decode(requestBody: Deno.Reader) {
        const decoder = new TextDecoder();
        const bodyContents = await Deno.readAll(requestBody);
        const body = JSON.parse(decoder.decode(bodyContents));

        return body
    }
    static async encode(body: any) {
        const encoder = new TextEncoder();
        const newBody = encoder.encode(JSON.stringify({ body }));
        return newBody
    }
}
