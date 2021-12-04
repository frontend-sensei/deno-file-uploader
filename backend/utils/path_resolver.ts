interface PathResolverConstructor {
    new (frontendDirectoryName: string): PathResolverInterface
}

interface PathResolverInterface {
    fromFrontend(path: string): string;
    fromFrontendAssets(path: string): string;
}

const Path_resolver: PathResolverConstructor = class PathResolver implements PathResolverInterface{
    frontendDirectoryName: string;

    constructor(frontendDirectoryName: string) {
        this.frontendDirectoryName = frontendDirectoryName
    }

    fromFrontend(path: string) {
        return `${ Deno.cwd() }/${ this.frontendDirectoryName }/${path}`
    }

    fromFrontendAssets(path: string) {
        return this.fromFrontend(`assets/${path}`)
    }
}

export const pathResolver = new Path_resolver("frontend")
