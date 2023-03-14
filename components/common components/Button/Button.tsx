import {memo} from "react";

import {ButtonType} from "./types";

const Button: ButtonType = ({title}) => {
    return (
        <button className="text-h4 border-2 border-primary ease-in-out delay-200 rounded-xl children:p-3 hover:shadow hover:shadow-primary active:border-pink active:shadow-pink">
            <p>{title}</p>
        </button>
    );
};

export default memo(Button);
