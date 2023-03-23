import {memo} from "react";

import {ClientCardType} from "./types";

const ClientCard: ClientCardType = ({children}) => {
    return (
        <div className="rounded-[3rem] shadow-blue hover:shadow-lavender ease-in-out duration-200 overflow-hidden h-full">
            {children}
        </div>
    );
};

export default memo(ClientCard);
