import { memo } from "react";

import Title from "../Title";

import { ContainerType } from "./types";

const Container: ContainerType = ({ children }) => {
    return <div className="px-10 mx-auto">{children}</div>;
};

export default memo(Container);
