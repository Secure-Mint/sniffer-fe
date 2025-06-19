"use client";

import { SnifferModel } from "@/types";
import { Alert, Chip } from "@mui/joy";

interface Props {
    sniffer: SnifferModel;
}

const SnifferResult: React.FC<Props> = ({ sniffer }) => {
    return (
        <div className="w-3xl flex flex-col gap-2">
            <Alert variant="soft" color="neutral">
                <p>
                    Name: <span className="normal-case font-bold">{sniffer?.name || ""}</span>
                </p>
            </Alert>

            <Alert variant="soft" color="neutral">
                <p>
                    Symbol: <span className="normal-case font-bold">{sniffer?.symbol || ""}</span>
                </p>
            </Alert>

            <Alert variant="soft" color="neutral">
                <p>
                    Address: <span className="normal-case font-bold">{sniffer?.address || ""}</span>
                </p>
            </Alert>

            <Alert variant="soft" color={sniffer?.dailyVolume ? "neutral" : "danger"}>
                <p>
                    Daily Volume: <span className="normal-case font-bold">{sniffer?.dailyVolume || "0"}</span>
                </p>
            </Alert>

            <Alert variant="soft" color={sniffer?.impersonator ? "danger" : "success"}>
                <p>Impersonated: {sniffer?.impersonator ? "true" : "false"}</p>
            </Alert>

            <Alert variant="soft" color={sniffer?.mintAuthority ? "warning" : "success"}>
                <p>Mint Authority Enabled: {sniffer?.mintAuthority ? "true" : "false"}</p>
            </Alert>

            <Alert variant="soft" color={sniffer?.freezeAuthority ? "warning" : "success"}>
                <p>Freeze Authority Enalbed: {sniffer?.freezeAuthority ? "true" : "false"}</p>
            </Alert>

            <Alert variant="soft" color={"success"}>
                <p className="flex flex-row gap-1">
                    Verified Sources:{" "}
                    {(sniffer?.tags || []).map((x) => (
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
