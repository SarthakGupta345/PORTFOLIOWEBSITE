"use client";

import { useEffect } from "react";
import Script from "next/script";
import "./fluid.css";

export default function FluidBackground() {
    useEffect(() => {
        let cleanup: (() => void) | undefined;

        const startFluid = () => {
            if (typeof window !== "undefined" && typeof (window as any).initFluid === "function") {
                if (cleanup) cleanup();
                cleanup = (window as any).initFluid();
            }
        };

        // If script is already loaded and global function exists (e.g. remount)
        if (typeof window !== "undefined" && typeof (window as any).initFluid === "function") {
            startFluid();
        }

        // Listen for the custom ready event from public/fluid.js
        const handleScriptLoad = () => {
            startFluid();
        };
        window.addEventListener("fluidReady", handleScriptLoad);

        return () => {
            window.removeEventListener("fluidReady", handleScriptLoad);
            if (cleanup) {
                cleanup();
            }
        };
    }, []);

    return (
        <>
            <canvas id="fluid" />

            <Script
                src="/fluid.js"
                strategy="afterInteractive"
            />
        </>
    );
}