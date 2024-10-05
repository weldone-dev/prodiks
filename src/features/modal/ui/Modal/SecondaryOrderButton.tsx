"use client"
import React, { useState } from 'react';
import { OrderModal } from '../OrderModal';
import {Button} from "@/widget/Button";

export const SecondaryOrderButton  = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <Button onClick={openModal} x_type={"secondary"} className={"w-[152px] h-[46px]"}>Заказать</Button>
            <OrderModal isOpen={isOpen} onClose={closeModal}/>
        </>
    );
};