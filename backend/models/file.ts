import {FileConstructor, FileInterface} from "../interfaces/file.interface.ts";

export const File: FileConstructor = class File implements FileInterface {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    async saveFile()  {
        return
    }
}







