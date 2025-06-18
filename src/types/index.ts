export interface SnifferModel {
    name: string;
    symbol: string;
    address: string;
    impersonated: boolean;
    freezeAuthority: boolean;
    mintAuthority: boolean;
    tags: string[];
}
