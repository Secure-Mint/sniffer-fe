export interface SnifferModel {
    name: string;
    symbol: string;
    address: string;
    dailyVolume: number;
    impersonated: boolean;
    freezeAuthority: boolean;
    mintAuthority: boolean;
    tags: string[];
}
