"use client"
import cn from "clsx";
import {type FormEvent, useEffect, useState} from "react";
import {Button} from "@/widget/Button";

interface IProps {
    id?:string;
}
export function TermsOfCooperation({id}:IProps) {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => {
                setSubmitted(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [submitted]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/send-call-email', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, phone, email})
            });
            if (res.ok) {
                setSubmitted(true);
            } else {
                console.error("Ошибка")
            }
        } catch (error) {
            console.log("Ошибка сети", error)
        } finally {
            setLoading(false)
        }

    };
    return (
        <article className={"h-[442px] lg:h-[534px] bg-[#275F63] py-[53px] md:py-[42px] font-montserrat relative"} id={id}>
            <div className={cn("container h-full", submitted ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100')}>
                <header className={"text-center text-white font-light mb-[40px]"}>
                    <h1 className={"text-[25px] leading-[30px] mb-[20px] md:text-[35px] md:leading-[43px] md:mb-[26px]"}>Условия
                        сотрудничества</h1>
                    <p className={"text-[15px] leading-[18px]"}>Мы работаем с юр. лицами и ИП</p>
                </header>
                {(!loading)
                    ? (<form action="" className={"flex flex-col w-full max-w-[340px] items-center mx-auto"}
                             onSubmit={handleSubmit}>
                        <div className={"flex flex-col w-full gap-[7px] mb-[33px]"}>
                            <input required={true} type="text" placeholder={"Ваше имя"} name={"name"}
                                   onChange={(e) => setName(e.target.value)}
                                   className={"p-[15px] border border-[#8C8C8CD9] text-[13px] font-light leading-[16px] outline-none"}
                                   autoComplete={"off"}/>
                            <input required={true} type="email" placeholder={"Ваш Email"} name={"email"}
                                   onChange={(e) => setEmail(e.target.value)}
                                   className={"p-[15px] border border-[#8C8C8CD9] text-[13px] font-light leading-[16px] outline-none"}/>
                            <input required={true} type="tel" placeholder={"Ваш телефон"} name={"phone"}
                                   onChange={(e) => setPhone(e.target.value)}
                                   className={"p-[15px] border border-[#8C8C8CD9] text-[13px] font-light leading-[16px] outline-none"}/>
                        </div>
                        <Button x_type={"tertiary"} className={"w-full py-[15px]"}>Связаться</Button>
                    </form>)
                    : (
                        <div className={"flex justify-center pt-[40px]"}>
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
                                            strokeWidth="10" stroke="#fff" fill="none" cy="50" cx="50" data-idx="2"
                                            transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,100,100)">

                                    </circle>
                                    <g data-idx="4"></g>
                                </g>
                            </svg>
                        </div>
                    )
                }
            </div>
            {submitted && (
                <div
                    className={"absolute inset-0 w-full h-full transition-opacity duration-700 opacity-100 mt-4 text-center flex flex-wrap text-white text-[25px] lg:text-[35px] font-light leading-[30px] lg:leading-[43px] justify-center items-center"}
                >
                    <div className={"p-[20px]"}>
                        <h2 className={"inline mr-[16px]"}>Спасибо!</h2>
                        <p className={"inline"}>Мы свяжемся с вами в ближайшее время.</p>
                    </div>
                </div>
            )}
        </article>
    )
}