// src/components/RiskStatusLegend.tsx

import React from "react";
// Assuming you have imported the RISK_STATUS enum
import { RISK_STATUS } from "@/utils";
// Assuming ResultIcon is used for the icon in the legend
import ResultIcon from "@/components/SnifferResult/ResultIcon";

/**
 * Maps a RISK_STATUS to Tailwind classes using the custom color variables.
 * NOTE: This is duplicated from TokenResultBox to ensure consistency.
 * In a real app, this should be moved to a shared utility file (e.g., riskUtils.ts).
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
        icon: "text-risk-extreme",
        description: "Immediate action required; high probability of critical failure or loss."
      };
    case RISK_STATUS.VERY_HIGH_RISK:
      return {
        border: "border-risk-very-high",
        bg: "bg-risk-very-high-text",
        icon: "text-risk-very-high",
        description: "Requires urgent review; significant potential for negative impact."
      };
    case RISK_STATUS.HIGH_RISK:
      return {
        border: "border-risk-high",
        bg: "bg-risk-high-text",
        icon: "text-risk-high",
        description: "Potential issue identified; requires attention and corrective action."
      };
    case RISK_STATUS.MODERATE_RISK:
      return {
        border: "border-risk-moderate",
        bg: "bg-risk-moderate-text",
        icon: "text-risk-moderate",
        description: "Minor issues that should be addressed in due course."
      };
    case RISK_STATUS.LOW_RISK:
      return {
        border: "border-risk-low",
        bg: "bg-risk-low-text",
        icon: "text-risk-low",
        description: "Minimal risk; standard practice may be sufficient."
      };
    case RISK_STATUS.VERY_LOW_RISK:
    default: // Default case handles VERY_LOW_RISK and any unexpected status
      return {
        border: "border-risk-very-low",
        bg: "bg-risk-very-low-text",
        icon: "text-risk-very-low",
        description: "No significant risk identified; generally safe."
      };
  }
};

const allRiskStatuses: RISK_STATUS[] = [
  RISK_STATUS.EXTREME_RISK,
  RISK_STATUS.VERY_HIGH_RISK,
  RISK_STATUS.HIGH_RISK,
  RISK_STATUS.MODERATE_RISK,
  RISK_STATUS.LOW_RISK,
  RISK_STATUS.VERY_LOW_RISK
];

const RiskStatusLegend: React.FC = () => {
  return (
    <div className='w-full flex flex-row justify-between rounded-lg gap-5'>
      {allRiskStatuses.map((risk) => {
        const classes = getRiskClasses(risk);

        return (
          <div
            key={risk}
            className={`min-w-44 flex flex-row justify-start items-center px-2 py-1 rounded-md border border-l-5  ${classes.border}  ${classes.bg}`}
          >
            <div className='shrink-0 pt-0.5'>
              <ResultIcon risk={risk} className={`h-5 w-5 ${classes.icon}`} />
            </div>

            <div className='ml-1'>
              <p className='text-xs font-medium text-gray-900'>{risk.replace(/_/g, " ")}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RiskStatusLegend;
