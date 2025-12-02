import React from "react";
// Assuming ResultIcon now accepts the 'risk' prop and handles its own color/icon logic
import ResultIcon from "@/components/SnifferResult/ResultIcon";
import { RISK_STATUS } from "@/utils";
// Alert import is unused, so it's commented out/removed for clean code.
// import { Alert } from "@mui/joy";

interface Props {
  label: string;
  risk: RISK_STATUS;
}

/**
 * Maps a RISK_STATUS to the required Tailwind classes for the box container.
 * These classes are now fully recognized by Tailwind due to the config update.
 * @param risk The risk level.
 * @returns An object containing the border and background classes.
 */
const getBoxClasses = (risk: RISK_STATUS) => {
  switch (risk) {
    case RISK_STATUS.EXTREME_RISK:
      return {
        // Border is the main risk color
        border: "border-risk-extreme",
        // Background is the lightest shade defined for text on dark backgrounds
        bg: "bg-risk-extreme-text"
      };
    case RISK_STATUS.VERY_HIGH_RISK:
      return {
        border: "border-risk-very-high",
        bg: "bg-risk-very-high-text"
      };
    case RISK_STATUS.HIGH_RISK:
      return {
        border: "border-risk-high",
        bg: "bg-risk-high-text"
      };
    case RISK_STATUS.MODERATE_RISK:
      return {
        border: "border-risk-moderate",
        bg: "bg-risk-moderate-text"
      };
    case RISK_STATUS.LOW_RISK:
      return {
        border: "border-risk-low",
        bg: "bg-risk-low-text"
      };
    case RISK_STATUS.VERY_LOW_RISK:
    default:
      return {
        border: "border-risk-very-low",
        bg: "bg-risk-very-low-text"
      };
  }
};

const TokenResultBox: React.FC<Props> = ({ label, risk }) => {
  // Get the dynamic classes for the current risk status
  const boxClasses = getBoxClasses(risk);

  return (
    <div
      // Use template literals to inject the dynamic border and background classes
      className={`
        flex flex-row justify-start items-center p-3 rounded-xl 
        border-2 
        ${boxClasses.border} 
        ${boxClasses.bg}
      `}
    >
      {/* The ResultIcon handles its own color using the 'risk' prop.
        The 'mr-3' ensures spacing between the icon and the label.
      */}
      <ResultIcon risk={risk} className='mr-3' />

      <p className='font-bold text-start text-sm text-gray-800'>{label}</p>
    </div>
  );
};

export default TokenResultBox;
