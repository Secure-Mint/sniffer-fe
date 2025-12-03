import React from "react";
import { getRiskClasses, RISK_STATUS } from "@/utils";
import ResultIcon from "@/components/SnifferResult/ResultIcon";

const RiskStatusLegend: React.FC = () => {
  return (
    <div className='w-full flex flex-column flex-wrap justify-center items-start rounded-lg space-y-3'>
      {Object.values(RISK_STATUS).map((risk) => {
        const classes = getRiskClasses(risk);
        return (
          <div
            key={risk}
            className={`w-44 flex flex-row justify-start items-center px-2 py-1 rounded-md border border-l-5  ${classes.border}  ${classes.bg}`}
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
