"use client";

import { RISK_STATUS } from "@/utils";
import { ShieldExclamationIcon, ShieldCheckIcon, InformationCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";

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
      return {
        Icon: ShieldCheckIcon,
        colorClass: "text-risk-very-low"
      };
    case RISK_STATUS.INFO:
      return {
        Icon: InformationCircleIcon,
        colorClass: "text-risk-info"
      };
    default:
      return {
        Icon: InformationCircleIcon,
        colorClass: "text-risk-info"
      };
  }
};

const ResultIcon: React.FC<Props> = ({ risk, className = "" }) => {
  const { Icon, colorClass } = getIconAndClasses(risk);

  return <Icon className={`size-5 mr-2 ${colorClass} ${className}`} />;
};

export default ResultIcon;
