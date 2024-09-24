"use client"
import {useState} from "react";
import cn from "clsx";

const data = [
    {
        question: "Какой полог лучше?",
        answers: "Оставь контакты и мы подберем под Ваши задачи то что нужно"
    },
    {
        question: "Какой полог лучше?",
        answers: "Оставь контакты и мы подберем под Ваши задачи то что нужно"
    },
    {
        question: "Какой полог лучше?",
        answers: "Оставь контакты и мы подберем под Ваши задачи то что нужно"
    },
    {
        question: "Какой полог лучше?",
        answers: "Оставь контакты и мы подберем под Ваши задачи то что нужно"
    },
    {
        question: "Какой полог лучше?",
        answers: "Оставь контакты и мы подберем под Ваши задачи то что нужно"
    }
]

export function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setOpen(open === index ? null : index);
    };

    const formatNumber = (number: number) => {
        return number < 10 ? `0${number}` : number;
    };

    return (
        <article className={"bg-[#effffd] pt-[58px] pb-[96px] md:pt-[114px] md:pb-[111px]"}>
            <div className={"container "}>
                <header className={"w-full border-t border-[#0C0C0C] mb-[40px] md:mb-[73px]"}>
                    <h1 className={"pt-[14px] md:pt-[36px] text-[25px] font-light leading-[30px]"}>Вопросы и ответы</h1>
                </header>
                <div>
                    {data.map((item, index) => (
                        <div key={index} className="border-b border-[#D4D4D4]">
                            <button
                                onClick={() => toggleAnswer(index)}
                                className="w-full text-left py-4 focus:outline-none flex justify-between items-center"
                            >
                                <div className="text-[15px] md:text-[18px] flex gap-x-[27px] xl:gap-x-[77px]">
                                    <span className={"text-[#595959] font-semibold"}>{formatNumber(index + 1)}</span>
                                    <span className={"text-[#0C0C0C]"}>{item.question}</span>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="11"
                                    viewBox="0 0 26 11"
                                    fill="none"
                                    className={cn("transform transition-transform duration-300", {'rotate-180': open === index})}
                                >
                                    <path d="M1 1L13 9L25 1" stroke="#0C0C0C" strokeWidth="2"/>
                                </svg>
                            </button>
                            <div
                                className={`pl-[46px] xl:pl-[96px] overflow-hidden transition-all duration-500 ease-in-out ${
                                    open === index ? 'max-h-40' : 'max-h-0'
                                }`}
                            >
                                <p className="pt-0 pb-[20px] text-gray-600">{item.answers}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}