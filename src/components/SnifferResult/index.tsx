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

            <Alert variant="soft" color="neutral">
                <p>
                    Daily Volume: <span className="normal-case font-bold">{sniffer?.dailyVolume || "0"}</span>
                </p>
            </Alert>

            <Alert variant="soft" color={sniffer?.impersonated ? "danger" : "success"}>
                <p>Impersonated: {sniffer?.impersonated ? "true" : "false"}</p>
            </Alert>

            <Alert variant="soft" color={sniffer?.mintAuthority ? "warning" : "success"}>
                <p>Mint Authority: {sniffer?.mintAuthority ? "true" : "false"}</p>
            </Alert>

            <Alert variant="soft" color={sniffer?.freezeAuthority ? "warning" : "success"}>
                <p>Freeze Authority: {sniffer?.freezeAuthority ? "true" : "false"}</p>
            </Alert>

            <Alert variant="soft" color={"success"}>
                <p>
                    Verification Sources:{" "}
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
