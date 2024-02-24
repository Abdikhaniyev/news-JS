import { Article, NewsInterface } from '../../../types';
import './news.css';

class News implements NewsInterface {
    public draw(data: Article[]): void {
        const news: Article[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        news.forEach((item: Article) => {
            const newsClone: HTMLDivElement = newsItemTemp?.content.cloneNode(true) as HTMLDivElement;

            const newsMetaPhoto: HTMLDivElement | null = newsClone.querySelector<HTMLDivElement>('.news__meta-photo');
            if (newsMetaPhoto) {
                newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            const newsMetaAuthor: HTMLLIElement | null = newsClone.querySelector<HTMLLIElement>('.news__meta-author');
            if (newsMetaAuthor) {
                newsMetaAuthor.textContent = item.author || item.source.name;
            }

            const newsMetaDate: HTMLLIElement | null = newsClone.querySelector<HTMLLIElement>('.news__meta-date');
            if (newsMetaDate) {
                newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const newsDescriptionTitle: HTMLHeadingElement | null =
                newsClone.querySelector<HTMLHeadingElement>('.news__description-title');
            if (newsDescriptionTitle) {
                newsDescriptionTitle.textContent = item.title;
            }

            const newsDescriptionSource: HTMLHeadingElement | null =
                newsClone.querySelector<HTMLHeadingElement>('.news__description-source');
            if (newsDescriptionSource) {
                newsDescriptionSource.textContent = item.source.name;
            }

            const newsDescriptionContent: HTMLParagraphElement | null =
                newsClone.querySelector<HTMLParagraphElement>('.news__description-content');
            if (newsDescriptionContent) {
                newsDescriptionContent.textContent = item.description;
            }

            const newsReadMore: HTMLAnchorElement | null =
                newsClone.querySelector<HTMLAnchorElement>('.news__read-more a');
            if (newsReadMore) {
                newsReadMore.setAttribute('href', item.url);
            }

            fragment.append(newsClone);
        });

        const newsContainer: HTMLDivElement | null = document.querySelector<HTMLDivElement>('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
