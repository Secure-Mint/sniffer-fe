"use client";

import TokenOverviewBox from "@/components/SnifferResult/TokenOverviewBox";
import TokenResultBox from "@/components/SnifferResult/TokenResultBox";
import { SnifferModel } from "@/types";
import { formatNumber, formatUSD, getTokenAgeInfo, SNIFFER_DISCLAIMER, TOTAL_SUPPLY_THRESHOLD } from "@/utils";
import { Chip } from "@mui/joy";
import Image from "next/image";
import SolanaIcon from "../../assets/images/solana.png";

interface Props {
  sniffer: SnifferModel;
}

const SnifferResult: React.FC<Props> = ({ sniffer }) => {
  return (
    <div className='max-w-7xl flex flex-col justify-center items-center'>
      <p className='w-5/6 text-xs'>
        <span className='font-bold'>Disclaimer: </span>
        <span>{SNIFFER_DISCLAIMER}</span>
      </p>
      <div className='flex flex-row items-start justify-between gap-10 mt-5'>
        <div className='w-96 flex flex-col p-8 border rounded-3xl border-gray-200 bg-gray-50'>
          <h2 className='flex flex-row justify-center gap-3 items-center text-3xl text-center mb-3 font-bold'>
            <Image src={SolanaIcon} alt={sniffer.symbol} width={45} height={45} className='rounded-full border border-gray-300' /> Token
            Overview
          </h2>
          <TokenOverviewBox label='Symbol:' value={sniffer.symbol} />
          <TokenOverviewBox label='Address:' value={sniffer.address} />
          <TokenOverviewBox label='Total Supply:' value={formatNumber(sniffer?.totalSupply)} />
          <TokenOverviewBox label='Circulating Supply:' value={formatNumber(sniffer?.circulatingSupply)} />
          <TokenOverviewBox label='Daily Volume:' value={formatNumber(sniffer?.dailyVolume)} />
          <TokenOverviewBox label='Market Cap:' value={formatUSD(sniffer?.marketCap)} />
          <TokenOverviewBox label='Created:' value={`${getTokenAgeInfo(sniffer?.firstOnchainActivity!).readable.toString()}`} />
          <div className='w-full flex flex-row gap-1 flex-wrap py-3'>
            {sniffer &&
              (sniffer?.tags).map((x) => (
                <Chip key={x} variant='solid' color='neutral'>
                  {x}
                </Chip>
              ))}
          </div>
        </div>

        <div className='w-3xl flex flex-col gap-2 p-8 border rounded-3xl border-gray-200 bg-gray-50'>
          <h2 className='flex flex-row justify-between items-center text-3xl mb-3 font-bold'>
            <span>
              Score: {sniffer.score} / {sniffer.totalScore}
            </span>
            <span>{sniffer?.risk}</span>
          </h2>

          <TokenResultBox danger={sniffer?.impersonator} label='Impersonator:' value={sniffer?.impersonator ? "true" : "false"} />

          <TokenResultBox
            danger={sniffer?.mintAuthorityAvailable}
            label='Mint Authority Disabled:'
            value={sniffer?.mintAuthorityAvailable ? "false" : "true"}
          />

          <TokenResultBox
            danger={sniffer?.freezeAuthorityAvailable}
            label='Freeze Authority Disabled:'
            value={sniffer?.freezeAuthorityAvailable ? "false" : "true"}
          />

          <TokenResultBox
            danger={sniffer?.immutableMetadata ? false : true}
            label='Immutabela Metadata:'
            value={sniffer?.immutableMetadata ? "true" : "false"}
          />

          <TokenResultBox
            danger={sniffer?.totalHolders < TOTAL_SUPPLY_THRESHOLD ? true : false}
            label='Total Holders:'
            value={sniffer?.totalHolders}
          />

          <TokenResultBox
            danger={sniffer?.top10HolderSupplyPercentage && sniffer?.top10HolderSupplyPercentage < TOTAL_SUPPLY_THRESHOLD ? false : true}
            label='Top 10 Holders holding percentage of total supply:'
            value={sniffer?.top10HolderSupplyPercentage}
          />

          <TokenResultBox
            danger={sniffer?.top20HolderSupplyPercentage && sniffer?.top20HolderSupplyPercentage < TOTAL_SUPPLY_THRESHOLD ? false : true}
            label='Top 20 Holders holding percentage of total supply:'
            value={sniffer?.top20HolderSupplyPercentage}
          />

          <TokenResultBox
            danger={sniffer?.top30HolderSupplyPercentage && sniffer?.top30HolderSupplyPercentage < TOTAL_SUPPLY_THRESHOLD ? false : true}
            label='Top 30 Holders holding percentage of total supply:'
            value={sniffer?.top30HolderSupplyPercentage}
          />

          <TokenResultBox
            danger={sniffer?.top40HolderSupplyPercentage && sniffer?.top40HolderSupplyPercentage < TOTAL_SUPPLY_THRESHOLD ? false : true}
            label='Top 40 Holders holding percentage of total supply:'
            value={sniffer?.top40HolderSupplyPercentage}
          />

          <TokenResultBox
            danger={sniffer?.top50HolderSupplyPercentage && sniffer?.top50HolderSupplyPercentage < TOTAL_SUPPLY_THRESHOLD ? false : true}
            label='Top 50 Holders holding percentage of total supply:'
            value={sniffer?.top50HolderSupplyPercentage}
          />

          <TokenResultBox danger={true} label='Contract Auditted:' value={"false"} />
        </div>
      </div>
    </div>
  );
};

export default SnifferResult;
