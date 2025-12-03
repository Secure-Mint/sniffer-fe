"use client";

import TokenOverviewBox from "@/components/SnifferResult/TokenOverviewBox";
import TokenResultBox from "@/components/SnifferResult/TokenResultBox";
import { SnifferModel } from "@/types";
import { formatNumber, formatUSD, getRiskStatusLabel, getTokenAgeInfo, SNIFFER_DISCLAIMER, TOTAL_SUPPLY_THRESHOLD } from "@/utils";
import { Chip } from "@mui/joy";
import Image from "next/image";
import SnifraIcon from "../../assets/images/snifra-icon-black.png";
import RiskStatusLegend from "@/components/SnifferResult/RiskStatusLegend";

interface Props {
  sniffer: SnifferModel;
}

const SnifferResult: React.FC<Props> = ({ sniffer }) => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <p className='w-5/6 text-xs mb-3'>
        <span className='font-bold'>Disclaimer: </span>
        <span>{SNIFFER_DISCLAIMER}</span>
      </p>
      <div className='w-full flex flex-row items-start justify-between gap-10 mt-5 px-10'>
        <div className='w-96 flex flex-col p-8 border rounded-3xl border-gray-200 bg-gray-50'>
          <h2 className='flex flex-row justify-center gap-3 items-center text-3xl text-center mb-3 font-bold'>
            <Image src={SnifraIcon} alt={sniffer.symbol} width={45} height={45} className='rounded-full' />
            Token Overview
          </h2>
          <TokenOverviewBox label='Name:' value={sniffer.name} />
          <TokenOverviewBox label='Symbol:' value={sniffer.symbol} />
          <TokenOverviewBox label='Address:' value={sniffer.address} />
          <TokenOverviewBox label='Total Supply:' value={formatNumber(sniffer?.totalSupply)} />
          <TokenOverviewBox label='Circulating Supply:' value={formatNumber(sniffer?.circulatingSupply)} />
          <TokenOverviewBox label='24 Hour Volume:' value={formatNumber(sniffer?.volume24h)} />
          <TokenOverviewBox label='Market Cap:' value={formatUSD(sniffer?.marketCap)} />
          <TokenOverviewBox label='Created:' value={`${getTokenAgeInfo(sniffer?.firstOnchainActivity!).readable.toString()}`} />
          <div className='w-full flex flex-row gap-1 flex-wrap pt-5'>
            {sniffer &&
              (sniffer?.tags).map((x, i) => (
                <Chip key={`${x}-${i}`} variant='outlined' color='primary'>
                  <span className='text-xs'>{x}</span>
                </Chip>
              ))}
          </div>
        </div>

        <div className='w-5xl flex flex-col gap-2 p-8 border rounded-3xl border-gray-200 bg-gray-50'>
          <h2 className='flex flex-row justify-between items-center text-3xl mb-3 font-bold'>
            <span>
              Score: {sniffer.score} / {sniffer.totalScore}
            </span>
            <span>Evaluation: {getRiskStatusLabel(sniffer.risk)}</span>
          </h2>

          {sniffer.detailedAnalysis.length &&
            sniffer.detailedAnalysis.map((item, index) => <TokenResultBox key={index} label={item.detail} risk={item.risk} />)}
        </div>

        <div className='w-48 py-1 flex flex-col justify-center items-center'>
          <h2 className='text-xl mb-3 font-bold'>Risk Palette</h2>
          <RiskStatusLegend />
        </div>
      </div>
    </div>
  );
};

export default SnifferResult;
