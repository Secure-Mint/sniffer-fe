"use client";

import { Tooltip } from "@mui/joy";

interface Props {
  label: string;
  value: string;
}

const TokenOverviewBox: React.FC<Props> = ({ label, value }) => {
  return (
    <p className='flex text-sm flex-row justify-between py-3 border-b  border-b-gray-200'>
      <span>{label}</span>
      <Tooltip title={value} variant='solid' placement='top-end'>
        <span className='normal-case font-bold truncate w-40 text-ellipsis overflow-hidden whitespace-nowrap [direction:rtl] [text-align:right]'>
          {value}
        </span>
      </Tooltip>
    </p>
  );
};

export default TokenOverviewBox;
