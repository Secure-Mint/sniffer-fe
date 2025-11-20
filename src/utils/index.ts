import { RISK_STATUS } from "@/utils/constants";

export * from "./constants";
export * from "./currency";
export * from "./numbers";
export * from "./date";

export const getRiskStatusLabel = (status: RISK_STATUS): string => {
  switch (status) {
    case RISK_STATUS.EXTREME_RISK:
      return "Extreme Risk";
    case RISK_STATUS.VERY_HIGH_RISK:
      return "Very High Risk";
    case RISK_STATUS.HIGH_RISK:
      return "High Risk";
    case RISK_STATUS.MODERATE_RISK:
      return "Moderate Risk";
    case RISK_STATUS.LOW_RISK:
      return "Low Risk";
    case RISK_STATUS.VERY_LOW_RISK:
      return "Very Low Risk";
    default:
      return "Unknown Risk";
  }
};
