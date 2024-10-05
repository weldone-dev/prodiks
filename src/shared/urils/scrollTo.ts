"use client"
import type {RefObject} from "react";

type ScrollToTarget = string | RefObject<HTMLElement>;

export const scrollToElement = (target: ScrollToTarget, offset: number = 0) => {
    let element: HTMLElement | null = null;

    // target = (id) || (ref)
    if (typeof target === "string") {
        element = document.getElementById(target);
    } else if (target && target.current) {
        element = target.current;
    }

    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: elementPosition + offset,
            behavior: "smooth",
        });

        const checkScrollEnd = () => {
            const currentScrollY = window.scrollY;
            if (Math.abs(currentScrollY - (elementPosition + offset)) < 1) {
                return;
            }
            requestAnimationFrame(checkScrollEnd);
        };

        checkScrollEnd();
    }
};