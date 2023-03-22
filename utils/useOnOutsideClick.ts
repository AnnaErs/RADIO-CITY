"use client"
import { useEffect, RefObject } from "react";

const useOnOutsideClick = (ref:RefObject<HTMLDivElement>, handler: ()=>void) => {
    useEffect(() => {
        const closeSidebar = (event: MouseEvent) => {
            if (!ref.current?.contains(event.target as Node)) {
                handler?.();
            }
        };
        document.addEventListener("click", closeSidebar);
        return () => {
            document.removeEventListener("click", closeSidebar);
        };
    }, []);
}

export default useOnOutsideClick;