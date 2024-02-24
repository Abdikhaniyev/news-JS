import {
    AppViewInterface,
    Article,
    NewsInterface,
    NewsResult,
    SourceItem,
    SourceResult,
    SourcesInterface,
} from '../../types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView implements AppViewInterface {
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }
    news: NewsInterface;
    sources: SourcesInterface;

    drawNews(data: NewsResult): void {
        const values: Article[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourceResult): void {
        const values: SourceItem[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
