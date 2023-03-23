import {memo} from "react";

import {ButtonType} from "../types";

const Button: ButtonType = ({title, onClick}) => {
    return (
        <button
            onClick={onClick}
            className="inline-block text-xl p-3 bg-white border-2 border-primary ease-in-out delay-200 rounded-xl hover:shadow hover:shadow-primary active:border-pink active:shadow-pink"
        >
            {title}
        </button>
    );
};

export default memo(Button);
