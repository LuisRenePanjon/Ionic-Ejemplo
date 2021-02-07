export interface PlayerById {
    data: Data;
    meta: Meta;
}

export interface Meta {
    requests_left: number;
    user: string;
    plan: string;
    pages: number;
    page: number;
    count: number;
    total: number;
}

export interface Data {
    id: string;
    team_id?: any;
    name: string;
    common_name: string;
    position: string;
    firstname: string;
    lastname: string;
    birthday: string;
    birthcountry?: any;
    birthplace?: any;
    shirtnumber: string;
    weight: string;
    height: string;
    age: number;
    foot: string;
    img?: any;
    market_value: string;
    country: Country;
    leagues: League[];
    roles: Role[];
}

export interface Role {
    team: Team;
    is_current: boolean;
    role: string;
    start: string;
    end?: string;
    shirt: string;
}

export interface Team {
    id: string;
    name: string;
    is_national: number;
}

export interface League {
    id: string;
    name: string;
    is_cup: string;
    is_amateur: string;
    is_friendly: string;
    seasons: Season[];
}

export interface Season {
    id: string;
    name: string;
    is_current: string;
}

export interface Country {
    id: string;
    name: string;
    cc: string;
}
