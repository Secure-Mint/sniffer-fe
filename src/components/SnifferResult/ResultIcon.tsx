"use client";

import { RISK_STATUS } from "@/utils";
import {
  ShieldExclamationIcon, // Used for high-risk
  ShieldCheckIcon, // Used for low-risk
  InformationCircleIcon, // Used for moderate risk
  ExclamationTriangleIcon // Used for very high/extreme risk
} from "@heroicons/react/24/solid";

interface Props {
  risk: RISK_STATUS;
  className?: string;
}

const getIconAndClasses = (risk: RISK_STATUS) => {
  switch (risk) {
    case RISK_STATUS.EXTREME_RISK:
    case RISK_STATUS.VERY_HIGH_RISK:
      return {
        Icon: ExclamationTriangleIcon,
        colorClass: "text-[color:var(--color-risk-extreme)]"
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
  const { Icon, colorClass } = getIconAndClasses(risk);

  return <Icon className={`size-5 mr-2 bg-risk-extreme ${className}`} />;
};

export default ResultIcon;
