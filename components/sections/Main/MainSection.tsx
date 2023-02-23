import { memo } from "react";
import Image from "next/image";

import MainSectionImage from "@public/MainSectionImage.gif";
import RightArrow from "@public/RightArrow.png";

import { MainSectionHeadingsPropsType, MainSectionType } from "./types";
import Container from "@components/layout/Container";

const MainSectionHeadings: MainSectionHeadingsPropsType = {
    mainTitle: {
        firstPart: "радио",
        secondPart: "сити",
    },
    subTitle:
        "Крупнейший оператор радиосвязи  Свердловской области с 1995 года.",
    buttonTitle: "Узнать больше",
};

const MainSection: MainSectionType = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-row mt-44 mr-10 mb-48 ml-36 gap-9">
                <div className="flex flex-col justify-center gap-10 w-[35rem]">
                    <div className="flex flex-row text-3xl uppercase">
                        <p>{MainSectionHeadings.mainTitle.firstPart}</p>
                        <p className="text-blue ">—</p>
                        <p>{MainSectionHeadings.mainTitle.secondPart}</p>
                    </div>
                    <div className="text-2xl flex-wrap w-3/4">
                        {MainSectionHeadings.subTitle}
                    </div>
                    <div>
                        <button className="w-[16rem] h-[3.25rem] rounded-[1.25rem] bg-blue ease-in-out duration-200 hover:bg-lavender active:bg-pink">
                            <p className="flex flex-row items-center justify-center gap-2 text-2xl">
                                {MainSectionHeadings.buttonTitle}
                                <Image
                                    src={RightArrow}
                                    width={30}
                                    alt="arrow"
                                />
                            </p>
                        </button>
                    </div>
                </div>
                <div>
                    <Image
                        src={MainSectionImage}
                        alt="Radiowaves"
                        priority={true}
                        height="659"
                        width={670}
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(MainSection);
