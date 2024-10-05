import React, {type FormEvent, useEffect, useState} from 'react';
import {Modal} from '@/shared/ui/Modal';
import {Button} from "@/widget/Button";
import cn from "clsx";

interface OrderModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({isOpen, onClose}) => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => {
                setSubmitted(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [submitted]);
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const formData = {name, email, phone, message};
        try {
            const res = await fetch('/api/send-call-email', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setSubmitted(true);
            } else {
                console.error("Ошибка");
            }
        } catch (error) {
            console.log("Ошибка сети", error);
        } finally {
            setLoading(false);
        }

        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setTimeout(()=>onClose(), 2000);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} className={cn({
            "bg-[#33848A]": submitted
        })}>
            <div className={cn("transition-all duration-200 ease-out text-black", (loading || submitted) ? "opacity-0" : "opacity-100")}>
                <h2 className="text-[#0C0C0C] font-medium text-[15px] leading-[18px] text-center mb-[28px]">
                    Заполните форму
                </h2>
                <form className="space-y-[7px]" onSubmit={handleSubmit}>
                    <input
                        required={true}
                        placeholder="Ваше имя*"
                        onChange={(e) => setName(e.target.value)}
                        className="border border-[#C4C4C4] w-full p-[13px] focus:outline-none placeholder:text-[13px] placeholder:font-light  placeholder:text-[#8C8C8CD9] placeholder:leading-[16px]"
                    />
                    <input
                        required={true} type="email"
                        placeholder="Ваш Email*"
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-[#C4C4C4] w-full p-[13px] focus:outline-none placeholder:text-[13px] placeholder:font-light placeholder:text-[#8C8C8CD9] placeholder:leading-[16px]"
                    />
                    <input
                        required={true} type="tel"
                        placeholder="Ваш телефон*"
                        onChange={(e) => setPhone(e.target.value)}
                        className="border border-[#C4C4C4] w-full p-[13px] focus:outline-none placeholder:text-[13px] placeholder:font-light placeholder:text-[#8C8C8CD9] placeholder:leading-[16px]"
                    />
                    <textarea
                        placeholder="Вы можете оставить заявку в виде текста"
                        onChange={(e) => setMessage(e.target.value)}
                        className="border border-[#C4C4C4] w-full p-[13px] max-h-[25vh] min-h-[50px] focus:outline-none placeholder:text-[13px] placeholder:font-light placeholder:text-[#8C8C8CD9] placeholder:leading-[16px]"
                    />

                    <Button
                        x_type={"primary"}
                        className="!mt-0 border border-[#0C0C0C] w-full py-[15px] text-[#0C0C0C] font-medium text-[13px] leading-[16px]"
                    >
                        Отправить
                    </Button>
                </form>
            </div>
            <div
                className={cn("absolute inset-0 flex justify-center items-center h-[384px] max-w-[380px]", loading ? "block" : "hidden")}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                    width="100"
                    height="100"
                    className={"shape-rendering-auto block bg-transparent animate-spin"}
                >
                    <g data-idx="1">
                        <circle strokeDasharray="164.93361431346415 56.97787143782138" r="35"
                                strokeWidth="10" stroke="#33848A" fill="none" cy="50" cx="50" data-idx="2"
                                transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,100,100)">

                        </circle>
                        <g data-idx="4"></g>
                    </g>
                </svg>
            </div>
            {submitted && (
                <div
                    className={"absolute inset-0 w-full h-full transition-opacity duration-700 opacity-100 mt-4 text-center flex flex-wrap text-white text-[26px] font-light leading-[30px] justify-center items-center"}
                >
                    <div className={"p-[20px]"}>
                        <h2 className={"inline mr-[16px]"}>Спасибо!</h2>
                        <p className={"inline"}>Мы свяжемся с вами в ближайшее время.</p>
                    </div>
                </div>
            )}
        </Modal>
    );
};