import React from "react";
import ResultIcon from "@/components/SnifferResult/ResultIcon";
import { getRiskClasses, RISK_STATUS } from "@/utils";

interface Props {
  label: string;
  risk: RISK_STATUS;
}

const TokenResultBox: React.FC<Props> = ({ label, risk }) => {
  const riskClasses = getRiskClasses(risk);

  return (
    <div className={`flex flex-row justify-start items-center p-3 rounded-xl border-2 ${riskClasses.border} ${riskClasses.bg}`}>
      <ResultIcon className={`mr-3 ${riskClasses.icon}`} risk={risk} />
      <p className='font-bold text-start text-sm text-gray-800'>{label}</p>
    </div>
  );
};

export default TokenResultBox;
