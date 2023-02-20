import { memo } from "react";

import { FutureClientTableType } from "../types";

const FutureClients: FutureClientTableType = ({ FutureClientsList }) => {
    return (
        <div>
            <div className="">
                <div>
                    <div className="m-5 font-bold">Будущие клиенты</div>
                    {FutureClientsList.map((client) => (
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

export default memo(FutureClients);
