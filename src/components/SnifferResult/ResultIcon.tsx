"use client";

import { RISK_STATUS } from "@/utils";
import {
  ShieldExclamationIcon, // Used for high-risk
  ShieldCheckIcon, // Used for low-risk
  InformationCircleIcon, // Used for moderate risk
  ExclamationTriangleIcon // Used for very high/extreme risk
} from "@heroicons/react/24/solid";
// Note: You might need to adjust the imports based on which icons you want to use.

interface Props {
  risk: RISK_STATUS;
  // Allows for passing custom classes (like size or margin) from the parent component
  className?: string;
}

/**
 * Maps a RISK_STATUS to the appropriate Icon component and Tailwind color class.
 */
const getIconAndClasses = (risk: RISK_STATUS) => {
  switch (risk) {
    case RISK_STATUS.EXTREME_RISK:
    case RISK_STATUS.VERY_HIGH_RISK:
      return {
        Icon: ExclamationTriangleIcon,
        colorClass: "text-risk-extreme"
      };
    case RISK_STATUS.HIGH_RISK:
      return {
        Icon: ShieldExclamationIcon,
        colorClass: "text-risk-high"
      };
    case RISK_STATUS.MODERATE_RISK:
      return {
        Icon: InformationCircleIcon,
        colorClass: "text-risk-moderate"
      };
    case RISK_STATUS.LOW_RISK:
      return {
        Icon: ShieldCheckIcon,
        colorClass: "text-risk-low"
      };
    case RISK_STATUS.VERY_LOW_RISK:
    default:
      return {
        Icon: ShieldCheckIcon,
        colorClass: "text-risk-very-low"
      };
  }
};

const ResultIcon: React.FC<Props> = ({ risk, className = "" }) => {
  // Get the dynamic icon and classes
  const { Icon, colorClass } = getIconAndClasses(risk);

  return (
    // Combine the dynamic color, static size, and any custom classes from the parent
    <Icon className={`size-5 mr-2 ${colorClass} ${className}`} />
  );
};

export default ResultIcon;
