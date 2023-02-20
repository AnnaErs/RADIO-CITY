import { memo } from "react";

import { MissedClientTableType } from "../types";

const MissedClients: MissedClientTableType = ({ MissedClientsList }) => {
    return (
        <div>
            <div className="">
                <div>
                    <div className="m-5 font-bold">Будущие клиенты</div>
                    {MissedClientsList.map((client) => (
                        <div className="flex flex-row gap-5">
                            <div>{client.name}</div>
                            <div>{client.phone}</div>
                            <div>{client.active_period.time}</div>
                            <div>{`${client.isCalled}`}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(MissedClients);
