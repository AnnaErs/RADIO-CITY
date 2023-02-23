import { memo } from "react";

import Title from "../Title";

import { ContainerType } from "./types";

const Container: ContainerType = ({ title, children }) => {
    return (
        <div className="px-10 w-[1440px] mx-auto">
            <Title title={title} />
            {children}
        </div>
    );
};

export default memo(Container);
