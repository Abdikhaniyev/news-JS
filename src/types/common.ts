export type Method = 'GET';

export type Callback<T> = (data: T) => void;

type Status = 'ok' | 'error';

export interface NewsResult {
    status: Status;
    totalResults: number;
    articles: Article[];
}

export interface Article {
    source: Pick<SourceItem, 'id' | 'name'>;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface SourceResult {
    status: Status;
    sources: SourceItem[];
}

export interface SourceItem {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

enum SearchIn {
    Title = 'title',
    Description = 'description',
    Content = 'content',
}

enum Language {
    Arabic = 'ar',
    German = 'de',
    English = 'en',
    Spanish = 'es',
    French = 'fr',
    Hebrew = 'he',
    Italian = 'it',
    Dutch = 'nl',
    Norwegian = 'no',
    Portuguese = 'pt',
    Russian = 'ru',
    Swedish = 'sv',
    Urdu = 'ud',
    Chinese = 'zh',
}

enum SortBy {
    Relevancy = 'relevancy',
    Popularity = 'popularity',
    PublishedAt = 'publishedAt',
}

export interface Options {
    apiKey?: string;
    q?: string;
    searchIn?: SearchIn;
    sources?: string;
    domains?: string;
    excludeDomains?: string;
    from?: string;
    to?: string;
    language?: Language;
    sortBy?: SortBy;
    pageSize?: number;
    page?: number;
}
