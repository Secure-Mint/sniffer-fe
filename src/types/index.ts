export interface SnifferModel {
  name: string;
  symbol: string;
  address: string;
  dailyVolume: number;
  totalSupply: number;
  circulatingSupply: number;
  marketCap: number;
  totalHolders: number;
  top10HolderSupplyPercentage: number;
  top20HolderSupplyPercentage: number;
  top40HolderSupplyPercentage: number;
  impersonator: boolean;
  freezeAuthority: boolean;
  mintAuthority: boolean;
  tags: string[];
  score: number;
  totalScore: number;
}
