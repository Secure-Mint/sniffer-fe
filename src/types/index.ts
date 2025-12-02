import { RISK_STATUS } from "@/utils";

export interface DetailedAnalysis {
  detail: string;
  risk: RISK_STATUS;
}

export interface SnifferModel {
  name: string;
  symbol: string;
  imageUrl: string | null;
  address: string;
  volume24h: number;
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
  isStableCoin: boolean;
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
  detailedAnalysis: DetailedAnalysis[];
}
