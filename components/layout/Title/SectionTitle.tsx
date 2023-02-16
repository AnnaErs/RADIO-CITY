import { memo } from "react";

interface Props {
    title: string;
}

const SectionTitle = ({ title }: Props) => {
    return (
        <div className="inline-block mb-8 desktop:mb-16 text-[2rem] bg-black text-white font-bold">
            {title}
        </div>
    );
};

export default memo(SectionTitle);
