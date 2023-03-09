import moment from "moment";
import { memo } from "react";

import { CurrentInfoType } from "./types";

const CURRENT_INFO = {
    title: "Текущая информация",
    date_subtitle: "Сегодня:",
    time_subtitle: "Время:",
};

const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
];

let date = new Date();

let currentDate = [
    date.getDate().toString(),
    months[date.getMonth()],
    date.getFullYear().toString(),
];

let cuttentTime = date.toLocaleTimeString();

const CurrentInfo: CurrentInfoType = () => {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <p className="text-h4-bold">{CURRENT_INFO.title}</p>
            </div>
            <div className="flex flex-col text-xl gap-3 children:flex children:flex-row children:gap-2">
                <div>
                    <p>{CURRENT_INFO.date_subtitle}</p>
                    <div>{currentDate.join(" ")}</div>
                </div>
                <div>
                    <p>{CURRENT_INFO.time_subtitle}</p>
                    <div>{moment().format("LT")}</div>
                </div>
            </div>
        </div>
    );
};

export default memo(CurrentInfo);
