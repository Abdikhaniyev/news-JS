import { Callback, Method, Options } from ".";

export interface LoaderInterface {
    baseLink?: string;
    options?: Options;
    getResp<T>({ endpoint, options }: { endpoint: string; options?: Options }, callback?: Callback<T>): void;
    errorHandler(res: Response): Response;
    makeUrl(options: Options, endpoint: string): string;
    load<T>(method: Method, endpoint: string, callback: Callback<T>, options?: Options): void;
}
