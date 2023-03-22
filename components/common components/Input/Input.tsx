import {memo} from "react";

import {InputType} from "./types";

const Input: InputType = ({value}) => {
    return (
        <input
            type="text"
            className="text-xl border border-gray rounded-xl px-5 py-2"
            value={value}
        />
    );
};

export default memo(Input);
