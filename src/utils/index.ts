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

export const getRiskClasses = (risk: RISK_STATUS) => {
  switch (risk) {
    case RISK_STATUS.EXTREME_RISK:
      return {
        border: "border-risk-extreme",
        bg: "bg-risk-extreme-text",
        icon: "text-risk-extreme"
      };
    case RISK_STATUS.VERY_HIGH_RISK:
      return {
        border: "border-risk-very-high",
        bg: "bg-risk-very-high-text",
        icon: "text-risk-very-high"
      };
    case RISK_STATUS.HIGH_RISK:
      return {
        border: "border-risk-high",
        bg: "bg-risk-high-text",
        icon: "text-risk-high"
      };
    case RISK_STATUS.MODERATE_RISK:
      return {
        border: "border-risk-moderate",
        bg: "bg-risk-moderate-text",
        icon: "text-risk-moderate"
      };
    case RISK_STATUS.LOW_RISK:
      return {
        border: "border-risk-low",
        bg: "bg-risk-low-text",
        icon: "text-risk-low"
      };
    case RISK_STATUS.VERY_LOW_RISK:
      return {
        border: "border-risk-very-low",
        bg: "bg-risk-very-low-text",
        icon: "text-risk-very-low"
      };
    case RISK_STATUS.VERY_LOW_RISK:
      return {
        border: "border-risk-very-low",
        bg: "bg-risk-very-low-text",
        icon: "text-risk-very-low"
      };
    default:
      return {
        border: "border-risk-info",
        bg: "bg-risk-info-text",
        icon: "text-risk-info"
      };
  }
};
