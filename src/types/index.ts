import { RISK_STATUS } from "@/utils";

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
  top30HolderSupplyPercentage: number;
  top40HolderSupplyPercentage: number;
  top50HolderSupplyPercentage: number;
  impersonator: boolean;
  freezeAuthority: string;
  freezeAuthorityAvailable: boolean;
  mintAuthority: string;
  mintAuthorityAvailable: boolean;
  immutableMetadata: boolean;
  tags: string[];
  score: number;
  totalScore: number;
  risk: RISK_STATUS;
  firstOnchainActivity: string;
}
