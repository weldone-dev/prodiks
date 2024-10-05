import React, {useEffect, useRef} from 'react';
import cn from "clsx";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

export const Modal: React.FC<ModalProps> = ({isOpen, onClose, className, children}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (
                (event instanceof MouseEvent || event instanceof TouchEvent) &&
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };
        const listener: Array<keyof DocumentEventMap> = ["mousedown", "touchend"]
        if (isOpen) {
            listener.forEach((e) => {
                document.addEventListener(e, handleClickOutside);
            })

        } else {
            listener.forEach((e) => {
                document.removeEventListener(e, handleClickOutside);
            })
        }
        return () => {
            listener.forEach((e) => {
                document.removeEventListener(e, handleClickOutside);
            })
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div ref={modalRef} className={cn("relative bg-white shadow-lg max-w-[380px] pt-[23px] pb-[11px] px-[11px]", className)}>
                {children}
            </div>
        </div>
    );
};