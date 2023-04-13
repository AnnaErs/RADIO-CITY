import {FormEvent, memo, useRef} from "react";
import {usePathname, useRouter} from "next/navigation";
import moment from "moment";

import Button from "../Buttons/Button/Button";
import Input from "../Input";
import useOnOutsideClick from "@utils/useOnOutsideClick";
import {createClient} from "@api/clientsAPI";
import {editClient} from "@api/clientsAPI";

import {SidebarType} from "./types";
import ClientTypeSelect from "../ClientTypeSelect";

const Sidebar: SidebarType = ({clientInfo, onOutsideClick}) => {
    const sidebar = useRef<HTMLDivElement>(null);
    useOnOutsideClick(sidebar, onOutsideClick);
    const router = useRouter();
    const pathName = usePathname();
    const startDayValue = clientInfo?.active_period_from
        ? moment(clientInfo.active_period_from).format("YYYY-MM-DD")
        : "";
    const endDayValue = clientInfo?.active_period_to
        ? moment(clientInfo.active_period_to).format("YYYY-MM-DD")
        : "";
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formdata = new FormData(event.target as any);
        const payloadSchedule = () => {
            return formdata
                .get("schedule")
                ?.toString()
                .split(",")
                .map((day) => {
                    return Number(day);
                });
        };

        const data = {
            id: clientInfo?.client_id,
            active_period_from: formdata.get("activePeriodFrom"),
            active_period_to: formdata.get("activePeriodTo") || undefined,
            call_time: formdata.get("callTime"),
            description: formdata.get("description"),
            name: formdata.get("name"),
            phone: formdata.get("phone"),
            schedule: payloadSchedule(),
            type: formdata.get("type"),
        } as any;

        if (clientInfo) {
            try {
                await editClient(data);
                alert("Клиент отредактирован");
                router.push(`${pathName}`);
            } catch (error) {
                alert("Упс, редактировать клиента не удалось");
            }
        } else {
            try {
                await createClient(data);
                alert("Клиент создан");
                router.push(`${pathName}`);
            } catch (error) {
                alert("Упс, создать клиента не удалось");
            }
        }
    };
    return (
        <div
            ref={sidebar}
            className="fixed top-0 right-0 shadow-lg shadow-blue bg-white py-5 px-14 w-[480px] h-full"
        >
            <div className="text-h4-bold pb-3 border-b-2 border-gray">
                {clientInfo?.name || "Создание клиента"}
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-y-4 mt-6">
                        <Input
                            name="name"
                            value={clientInfo?.name}
                            placeholder="Имя"
                        />
                        <Input
                            name="description"
                            value={clientInfo?.description}
                            placeholder="Описание"
                        />
                        <Input
                            name="phone"
                            value={clientInfo?.phone}
                            placeholder="Телефон"
                        />
                        <Input
                            name="callTime"
                            value={clientInfo?.call_time}
                            placeholder="Время звонка"
                        />
                        <ClientTypeSelect
                            name="type"
                            idOfDefaultType={clientInfo?.type}
                        />
                        <Input
                            name="schedule"
                            value={clientInfo?.schedule.join()}
                            placeholder="Рабочие дни недели"
                        />
                        <div className="flex gap-x-4">
                            <Input
                                name="activePeriodFrom"
                                value={startDayValue}
                                placeholder="Начало работы"
                            />
                            <Input
                                name="activePeriodTo"
                                value={endDayValue}
                                placeholder="Конец работы"
                            />
                        </div>
                        <div>
                            <Button type="submit" title="Cохранить" />
                        </div>
                    </div>
                </form>
                {/* <div className="mt-6">
                    <div className="text-h4-bold">
                        История изменений
                    </div>
                    <div>
                        {clientInfo.history}
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default memo(Sidebar);
