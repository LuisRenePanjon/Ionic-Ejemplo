export interface TeamsByCountry {
    data: Datum[];
    meta: Meta;
}

export interface Meta {
    requests_left: number;
    user: string;
    plan: string;
    pages: number;
    page: number;
    count: number;
}

export interface Datum {
    id: number;
    name: string;
    country_id: string;
}
