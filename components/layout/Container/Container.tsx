import { memo } from "react";

import Title from "../Title";

import { ContainerType } from "./types";



const Container: ContainerType = ({ title, children }) => {
    return (
        <div className="px-4 tablet:px-8 desktop:px-10">
            <Title title={title} />
            {children}
        </div>
    );
};

export default memo(Container);
