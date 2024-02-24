import { AppInterface, AppViewInterface, ControllerInterface, NewsResult, SourceResult } from '../../types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App implements AppInterface {
    public controller: ControllerInterface;
    public view: AppViewInterface;

    public constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesContainer: HTMLDivElement | null = document.querySelector<HTMLDivElement>('.sources');
        if (sourcesContainer) {
            sourcesContainer.addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data: NewsResult) => this.view.drawNews(data))
            );
        }
        this.controller.getSources((data: SourceResult) => this.view.drawSources(data));
    }
}

export default App;
