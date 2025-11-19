"use client";

import { ShieldExclamationIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

const ResultIcon: React.FC<{ danger: boolean }> = ({ danger }) => {
  return (
    <>
      {danger ? <ShieldExclamationIcon className='size-5 text-red-700 mr-2' /> : <ShieldCheckIcon className='size-5 text-green-700 mr-2' />}
    </>
  );
};

export default ResultIcon;
