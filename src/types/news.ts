import { Article } from '.';

export interface NewsInterface {
    draw: (data: Article[]) => void;
}
