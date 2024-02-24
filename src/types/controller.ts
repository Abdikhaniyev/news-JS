import { Callback, NewsResult, SourceResult } from '.';

export interface ControllerInterface {
    getSources(callback: Callback<SourceResult>): void;
    getNews(e: Event, callback: Callback<NewsResult>): void;
}
