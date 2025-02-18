"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Analytics() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("config", "G-B5EKW2ECL5", {
                page_path: pathname,
            });
        }
    }, [pathname]);

    return null; // this component doesn't render anything
}