export interface SnifferModel {
    name: string;
    symbol: string;
    address: string;
    dailyVolume: number;
    totalSupply: number;
    circulatingSupply: number;
    totalHolders: number;
    top50HolderSupplyPercentage: number;
    top10HolderSupplyPercentage: number;
    impersonator: boolean;
    freezeAuthority: boolean;
    mintAuthority: boolean;
    tags: string[];
}
