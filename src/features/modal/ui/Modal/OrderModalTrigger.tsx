"use client"
import React, { useState } from 'react';
import { OrderModal } from '../OrderModal';

export const OrderModalTrigger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <button
                onClick={openModal}
                className={"bg-[#275E63] text-[#FFFFFF] text-[13px] font-medium font-montserrat py-[11px] px-[46px] my-auto hover:bg-[#28696D] active:bg-[#0C0C0C] transition duration-150 ease-in-out"}
            >
                Заказать
            </button>
            <OrderModal isOpen={isOpen} onClose={closeModal}/>
        </>
    );
};