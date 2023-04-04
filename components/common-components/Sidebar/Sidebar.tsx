import {FormEvent, memo, useRef} from "react";
import {usePathname, useRouter} from "next/navigation";

import Button from "../Buttons/Button/Button";
import Input from "../Input";
import useOnOutsideClick from "@utils/useOnOutsideClick";
import {createClient} from "@api/clientsAPI";

import {SidebarType} from "./types";

const Sidebar: SidebarType = ({clientInfo, onOutsideClick}) => {
    const sidebar = useRef<HTMLDivElement>(null);
    useOnOutsideClick(sidebar, onOutsideClick);
    const router = useRouter();
    const pathName = usePathname();
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formdata = new FormData(event.target as any);
        const data = {
            active_period_from: formdata.get("activePeriodFrom"),
            active_period_to: formdata.get("activePeriodTo"),
            call_time: formdata.get("callTime"),
            description: formdata.get("description"),
            name: formdata.get("name"),
            phone: formdata.get("phone"),
            schedule: formdata.get("schedule"),
            type: formdata.get("type"),
        } as any;

        try {
            await createClient(data);
            alert("Клиент создан");
            router.push(`${pathName}`);
        } catch (error) {
            alert("Упс, что-то пошло не так.");
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
                        <Input
                            name="type"
                            value={clientInfo?.type}
                            placeholder="Тип клиента"
                        />
                        <Input
                            name="schedule"
                            value={clientInfo?.schedule.join()}
                            placeholder="Рабочие дни недели"
                        />
                        <div className="flex gap-x-4">
                            <Input
                                name="activePeriodFrom"
                                value={clientInfo?.active_period_from}
                                placeholder="Начало работы"
                            />
                            <Input
                                name="activePeriodTo"
                                value={clientInfo?.active_period_to}
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
