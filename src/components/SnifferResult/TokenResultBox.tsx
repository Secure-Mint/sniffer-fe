import React from "react";
import ResultIcon from "@/components/SnifferResult/ResultIcon";
// Assuming you have imported the RISK_STATUS enum and defined the Tailwind variables
import { RISK_STATUS } from "@/utils";
import { Alert } from "@mui/joy"; // Alert component is imported but not used in the final design.

interface Props {
  label: string;
  risk: RISK_STATUS;
}

/**
 * Maps a RISK_STATUS to Tailwind classes using the custom color variables.
 * @param risk The risk level.
 * @returns An object containing the border and background/icon classes.
 */
const getRiskClasses = (risk: RISK_STATUS) => {
  switch (risk) {
    case RISK_STATUS.EXTREME_RISK:
      return {
        // Border will be the main color, background will be a lighter shade (e.g., -50 or -100)
        border: "border-risk-extreme",
        bg: "bg-risk-extreme-text", // Using the text color variable which is a light background
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
    default: // Default case handles VERY_LOW_RISK and any unexpected status
      return {
        border: "border-risk-very-low",
        bg: "bg-risk-very-low-text",
        icon: "text-risk-very-low"
      };
  }
};

const TokenResultBox: React.FC<Props> = ({ label, risk }) => {
  // Get the dynamic classes for the current risk status
  const riskClasses = getRiskClasses(risk);

  return (
    <div
      // Use template literals to inject the dynamic classes
      className={`
        flex flex-row justify-start items-center p-3 rounded-xl 
        border-2 
        ${riskClasses.border} 
        ${riskClasses.bg}
      `}
    >
      {/* The ResultIcon color is controlled by the dynamic text color class */}
      <ResultIcon className={`mr-3 ${riskClasses.icon}`} risk={risk} />

      <p className='font-bold text-start text-sm text-gray-800'>{label}</p>
    </div>
  );
};

export default TokenResultBox;
