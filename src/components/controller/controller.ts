import { Callback, ControllerInterface, NewsResult, SourceResult } from '../../types';
import AppLoader from './appLoader';

class AppController extends AppLoader implements ControllerInterface {
    public getSources(callback: Callback<SourceResult>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: Callback<NewsResult>): void {
        let target: HTMLDivElement = e.target as HTMLDivElement;
        const newsContainer: HTMLDivElement = e.currentTarget as HTMLDivElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = target.getAttribute('data-source-id') ?? '';
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLDivElement;
        }
    }
}

export default AppController;
