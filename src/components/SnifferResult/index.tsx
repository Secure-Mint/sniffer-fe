"use client";

import ResultIcon from "@/components/SnifferResult/ResultIcon";
import TokenOverviewBox from "@/components/SnifferResult/TokenOverviewBox";
import TokenResultBox from "@/components/SnifferResult/TokenResultBox";
import { SnifferModel } from "@/types";
import { formatNumber, formatUSD, TOTAL_SUPPLY_THRESHOLD } from "@/utils";
import { Alert, Chip } from "@mui/joy";

interface Props {
  sniffer: SnifferModel;
}

const SnifferResult: React.FC<Props> = ({ sniffer }) => {
  return (
    <div className='flex flex-row items-start justify-between gap-10 mt-10'>
      <div className='w-96 flex flex-col p-8 border rounded-3xl border-gray-200 bg-gray-50'>
        <h2 className='text-3xl text-center mb-3 font-bold'>Token Overview</h2>
        <TokenOverviewBox label='Symbol:' value={sniffer.symbol} />
        <TokenOverviewBox label='Address:' value={sniffer.address} />
        <TokenOverviewBox label='Total Holders:' value={formatNumber(sniffer?.totalHolders)} />
        <TokenOverviewBox label='Total Supply:' value={formatNumber(sniffer?.totalSupply)} />
        <TokenOverviewBox label='Circulating Supply:' value={formatNumber(sniffer?.circulatingSupply)} />
        <TokenOverviewBox label='Daily Volume:' value={formatNumber(sniffer?.dailyVolume)} />
        <TokenOverviewBox label='Market Cap:' value={formatUSD(sniffer?.marketCap)} />
      </div>

      <div className='w-3xl flex flex-col gap-2 p-8 border rounded-3xl border-gray-200 bg-gray-50'>
        <h2 className='flex flex-row justify-between items-center text-3xl mb-3 font-bold'>
          <span>
            Score: {sniffer.score} / {sniffer.totalScore}
          </span>
          <span>{sniffer?.risk}</span>
        </h2>

        <TokenResultBox
          danger={sniffer?.top10HolderSupplyPercentage < TOTAL_SUPPLY_THRESHOLD ? false : true}
          label='Top 10 Holders holding percentage of total supply:'
          value={sniffer?.top10HolderSupplyPercentage}
        />

        <TokenResultBox
          danger={sniffer?.top20HolderSupplyPercentage < TOTAL_SUPPLY_THRESHOLD ? false : true}
          label='Top 20 Holders holding percentage of total supply:'
          value={sniffer?.top20HolderSupplyPercentage}
        />

        <TokenResultBox
          danger={sniffer?.top40HolderSupplyPercentage < TOTAL_SUPPLY_THRESHOLD ? false : true}
          label='Top 40 Holders holding percentage of total supply:'
          value={sniffer?.top40HolderSupplyPercentage}
        />

        <TokenResultBox danger={sniffer?.impersonator} label='Impersonated:' value={sniffer?.impersonator ? "true" : "false"} />

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

        <Alert variant='soft' color={"success"}>
          <div className='flex flex-row gap-1'>
            Verifications:{" "}
            {sniffer &&
              (sniffer?.tags).map((x) => (
                <Chip key={x} variant='solid' color='success'>
                  {x}
                </Chip>
              ))}
          </div>
        </Alert>
      </div>
    </div>
  );
};

export default SnifferResult;
