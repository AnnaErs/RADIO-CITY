import {memo} from "react";

import {SelectType} from "./types";

const Select: SelectType = ({name, options, value}) => {
    return (
        <select
            id="clientsTypesSelector"
            className="border border-gray text-sm rounded-xl focus:border-black focus:border-2 block w-full p-2.5"
            name={name}
        >
            <option selected disabled>
                Укажите тип клиента
            </option>
            {options?.map((type) => (
                <option selected={type.id == value} value={type.id}>
                    {type.name}
                </option>
            ))}
        </select>
    );
};

export default memo(Select);
