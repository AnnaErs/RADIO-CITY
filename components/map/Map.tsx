"use client";
import {memo, useEffect, useRef} from "react";

const Map = () => {
    const ref = useRef(null);

    useEffect(() => {
        // TODO добавить карту
    }, [ref]);

    return <div ref={ref} />;
};

export default memo(Map);
