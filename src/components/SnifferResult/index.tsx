"use client";

import { SnifferModel } from "@/types";
import { formatNumber, formatUSD } from "@/utils";
import { Alert, Chip } from "@mui/joy";

interface Props {
  sniffer: SnifferModel;
}

const SnifferResult: React.FC<Props> = ({ sniffer }) => {
  return (
    <div className='flex flex-row items-start justify-between gap-10 mt-10'>
      <div className='w-96 flex flex-col p-8 border rounded-3xl border-gray-200'>
        <h2 className='text-3xl text-center mb-3 font-bold'>Token Overview</h2>

        <p className='flex text-sm flex-row justify-between py-3 border-b  border-b-gray-200'>
          <span>Symbol: </span>
          <span className='normal-case font-bold'>{sniffer?.symbol || ""}</span>{" "}
        </p>

        <p className='flex text-sm flex-row justify-between py-3 border-b  border-b-gray-200'>
          <span>Address: </span>
          <span className='normal-case font-bold truncate w-40 text-ellipsis overflow-hidden whitespace-nowrap [direction:rtl] [text-align:left]'>
            {sniffer?.address || ""}
          </span>{" "}
        </p>

        <p className='flex text-sm flex-row justify-between py-3 border-b  border-b-gray-200'>
          <span>Total Holders: </span>
          <span className='normal-case font-bold'>{formatNumber(sniffer?.totalHolders) || "0"}</span>
        </p>

        <p className='flex text-sm flex-row justify-between py-3 border-b  border-b-gray-200'>
          <span>Total Supply: </span>
          <span className='normal-case font-bold'>{formatNumber(sniffer?.totalSupply) || "0"}</span>
        </p>

        <p className='flex text-sm flex-row justify-between py-3 border-b  border-b-gray-200'>
          <span>Circulating Supply: </span>
          <span className='normal-case font-bold'>{formatNumber(sniffer?.circulatingSupply) || "0"}</span>
        </p>

        <p className='flex text-sm flex-row justify-between py-3 border-b  border-b-gray-200'>
          <span>Daily Volume: </span>
          <span className='normal-case font-bold'>{formatNumber(sniffer?.dailyVolume) || "0"}</span>
        </p>

        <p className='flex text-sm flex-row justify-between py-3 border-b  border-b-gray-200'>
          <span>Market Cap: </span>
          <span className='normal-case font-bold'>{formatUSD(sniffer?.marketCap) || "0"}</span>
        </p>
      </div>

      <div className='w-3xl flex flex-col gap-2 p-8 border rounded-3xl border-gray-200'>
        <h2 className='text-3xl mb-3 font-bold'>
          Score: {sniffer.score || 0} / {sniffer.totalScore || 100}
        </h2>

        <Alert variant='soft' color={sniffer?.top10HolderSupplyPercentage < 50 ? "neutral" : "danger"}>
          <p>
            Top 10 Holders holding percentage of total supply:{" "}
            <span className='normal-case font-bold'>{sniffer?.top10HolderSupplyPercentage || "0"}</span>
          </p>
        </Alert>

        <Alert variant='soft' color={sniffer?.top20HolderSupplyPercentage < 50 ? "neutral" : "danger"}>
          <p>
            Top 20 Holders holding percentage of total supply:{" "}
            <span className='normal-case font-bold'>{sniffer?.top20HolderSupplyPercentage || "0"}</span>
          </p>
        </Alert>

        <Alert variant='soft' color={sniffer?.top40HolderSupplyPercentage < 50 ? "neutral" : "danger"}>
          <p>
            Top 40 Holders holding percentage of total supply:{" "}
            <span className='normal-case font-bold'>{sniffer?.top40HolderSupplyPercentage || "0"}</span>
          </p>
        </Alert>

        <Alert variant='soft' color={sniffer?.impersonator ? "danger" : "success"}>
          <p>Impersonated: {sniffer?.impersonator ? "true" : "false"}</p>
        </Alert>

        <Alert variant='soft' color={sniffer?.mintAuthorityAvailable ? "warning" : "success"}>
          <p>Mint Authority Dsiabled: {sniffer?.mintAuthorityAvailable ? "false" : "true"}</p>
        </Alert>

        <Alert variant='soft' color={sniffer?.freezeAuthorityAvailable ? "warning" : "success"}>
          <p>Freeze Authority Dsiabled: {sniffer?.freezeAuthorityAvailable ? "false" : "true"}</p>
        </Alert>

        <Alert variant='soft' color={!sniffer?.immutableMetadata ? "warning" : "success"}>
          <p>Immutabela Metadata: {!sniffer?.immutableMetadata ? "false" : "true"}</p>
        </Alert>

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
