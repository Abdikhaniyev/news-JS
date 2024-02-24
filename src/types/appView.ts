import { NewsInterface, NewsResult, SourceResult, SourcesInterface } from '.';

export interface AppViewInterface {
    news: NewsInterface;
    sources: SourcesInterface;
    drawNews: (data: NewsResult) => void;
    drawSources: (data: SourceResult) => void;
}
