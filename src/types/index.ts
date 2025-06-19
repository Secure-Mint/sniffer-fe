export interface SnifferModel {
    name: string;
    symbol: string;
    address: string;
    dailyVolume: number;
    impersonator: boolean;
    freezeAuthority: boolean;
    mintAuthority: boolean;
    tags: string[];
}
