"use client";

import { SnifferModel } from "@/types";
import { Alert, Chip } from "@mui/joy";

interface Props {
    sniffer: SnifferModel;
}

const SnifferResult: React.FC<Props> = ({ sniffer }) => {
    return (
        <div className="w-3xl flex flex-col gap-2">
            <h2 className="text-2xl mb-3">
                Sniffer Score: {sniffer.score || 0} / {sniffer.totalScore || 100}
            </h2>
            <Alert variant="soft" color="neutral">
                <p>
                    <span>Token: </span>
                    <span className="normal-case font-bold">{sniffer?.address || ""}</span>{" "}
                    <span className="normal-case font-bold">({sniffer?.symbol || ""})</span>
                </p>
            </Alert>

            <Alert variant="soft" color={sniffer?.dailyVolume ? "neutral" : "danger"}>
                <p>
                    Daily Volume: <span className="normal-case font-bold">{sniffer?.dailyVolume || "0"}</span>
                </p>
            </Alert>

            <Alert variant="soft" color={sniffer?.dailyVolume ? "neutral" : "danger"}>
                <p>
                    Market Cap: <span className="normal-case font-bold">{sniffer?.marketCap || "0"}</span>
                </p>
            </Alert>

            <Alert variant="soft" color={sniffer?.top10HolderSupplyPercentage < 50 ? "neutral" : "danger"}>
                <p>
                    Top 10 Holders holding percentage of total supply:{" "}
                    <span className="normal-case font-bold">{sniffer?.top10HolderSupplyPercentage || "0"}</span>
                </p>
            </Alert>

            <Alert variant="soft" color={sniffer?.impersonator ? "danger" : "success"}>
                <p>Impersonated: {sniffer?.impersonator ? "true" : "false"}</p>
            </Alert>

            <Alert variant="soft" color={sniffer?.mintAuthority ? "warning" : "success"}>
                <p>Mint Authority Dsiabled: {sniffer?.mintAuthority ? "false" : "true"}</p>
            </Alert>

            <Alert variant="soft" color={sniffer?.freezeAuthority ? "warning" : "success"}>
                <p>Freeze Authority Dsiabled: {sniffer?.freezeAuthority ? "false" : "true"}</p>
            </Alert>

            <Alert variant="soft" color={"success"}>
                <p className="flex flex-row gap-1">
                    Verifications:{" "}
                    {sniffer &&
                        (sniffer?.tags).map((x) => (
                            <Chip key={x} variant="solid" color="success">
                                {x}
                            </Chip>
                        ))}
                </p>
            </Alert>
        </div>
    );
};

export default SnifferResult;
