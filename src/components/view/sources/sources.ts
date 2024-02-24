import { SourceItem, SourcesInterface } from '../../../types';
import './sources.css';

class Sources implements SourcesInterface {
    public draw(data: SourceItem[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null =
            document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        data.forEach((item: SourceItem) => {
            const sourceClone: HTMLDivElement = sourceItemTemp?.content.cloneNode(true) as HTMLDivElement;

            const sourceItemName: HTMLSpanElement | null =
                sourceClone.querySelector<HTMLSpanElement>('.source__item-name');
            if (sourceItemName) {
                sourceItemName.textContent = item.name;
            }

            const sourceItem: HTMLDivElement | null = sourceClone.querySelector<HTMLDivElement>('.source__item');
            if (sourceItem) {
                sourceItem.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sourcesContainer: HTMLDivElement | null = document.querySelector<HTMLDivElement>('.sources');
        if (sourcesContainer) {
            sourcesContainer.innerHTML = '';
            sourcesContainer.appendChild(fragment);
        }
    }
}

export default Sources;
