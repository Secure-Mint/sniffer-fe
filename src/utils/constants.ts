export const APP_NAME = "Snifra";
export const APP_TAGLINE = "Token validation and fraud detection";
export const SEARCH = "search";
export const TOKEN_SEARCH_SLOGAN = "Enter token address to validate";
export const TOKEN_SEARCH_SUBSLOGAN = "Only Solana tokens can be validated for now";
export const TOKEN_SEARCH_PLACEHOLDER = "Token address";
export const ENTER = "Enter";
export const ENTER_KEY_CODE = 13;
export const TOTAL_SUPPLY_THRESHOLD = 50;
export const SNIFFER_DISCLAIMER = `Our score reflects how well a token aligns with common safety criteria based on our analysis. 
  However, our algorithms are not foolproof and high score does not guarantee the absence of malicious behavior. 
  This score is not financial advice and should be evaluated alongside other sources. 
  Always conduct your own research before making any decisions.`;

export enum RISK_STATUS {
  EXTREME_RISK = "EXTREME_RISK",
  VERY_HIGH_RISK = "VERY_HIGH_RISK",
  HIGH_RISK = "HIGH_RISK",
  MODERATE_RISK = "MODERATE_RISK",
  LOW_RISK = "LOW_RISK",
  VERY_LOW_RISK = "VERY_LOW_RISK",
  INFO = "INFO"
}
