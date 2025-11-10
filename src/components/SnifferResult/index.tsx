"use client";

import { SnifferModel } from "@/types";
import { formatUSD } from "@/utils";
import { Alert, Chip } from "@mui/joy";

interface Props {
  sniffer: SnifferModel;
}

const SnifferResult: React.FC<Props> = ({ sniffer }) => {
  return (
    <div className='w-3xl flex flex-col gap-2'>
      <h2 className='text-3xl mb-3 font-bold'>
        Score: {sniffer.score || 0} / {sniffer.totalScore || 100}
      </h2>
      <Alert variant='soft' color='neutral'>
        <p>
          <span>Token: </span>
          <span className='normal-case font-bold'>{sniffer?.address || ""}</span>{" "}
          <span className='normal-case font-bold'>({sniffer?.symbol || ""})</span>
        </p>
      </Alert>

      <Alert variant='soft' color={sniffer?.dailyVolume ? "neutral" : "danger"}>
        <p>
          Daily Volume: <span className='normal-case font-bold'>{sniffer?.dailyVolume || "0"}</span>
        </p>
      </Alert>

      <Alert variant='soft' color={sniffer?.dailyVolume ? "neutral" : "danger"}>
        <p>
          Market Cap USD: <span className='normal-case font-bold'>{formatUSD(sniffer?.marketCap) || "0"}</span>
        </p>
      </Alert>

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

      <Alert variant='soft' color={sniffer?.mintAuthority ? "warning" : "success"}>
        <p>Mint Authority Dsiabled: {sniffer?.mintAuthority ? "false" : "true"}</p>
      </Alert>

      <Alert variant='soft' color={sniffer?.freezeAuthority ? "warning" : "success"}>
        <p>Freeze Authority Dsiabled: {sniffer?.freezeAuthority ? "false" : "true"}</p>
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
  );
};

export default SnifferResult;
