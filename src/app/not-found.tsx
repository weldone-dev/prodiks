"use client"
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {NavBar} from "@/widget/NavBar";
import {Footer} from "@/widget/Footer";

export default function NotFound() {
    const router = useRouter();
    const [hasHistory, setHasHistory] = useState(false);

    useEffect(() => {
        setHasHistory(window.history.length > 1);
    }, []);

    const handleBackClick = () => {
        if (hasHistory) {
            router.back();
        } else {
            router.push('/');
        }
    };
    return (
        <>
            <NavBar className={"bg-white"}/>
            <div className={"flex-grow"}>
                <article className="h-full flex flex-col items-center justify-center pt-[140px] bg-gray-50">
                    <div
                        className="container bg-white shadow-lg rounded-lg pt-[36px] px-6 py-8">
                        <header className="mb-6 text-center">
                            <h1 className="text-[#0C0C0C] text-[50px] leading-[61px] font-light">
                                Упс...
                            </h1>
                        </header>
                        <footer className="text-center">
                            <p className="text-gray-700 text-[18px] leading-[28px] font-medium">
                                Страница не найдена. Возможно, она потерялась на производственной линии.
                            </p>
                            <button
                                onClick={handleBackClick}
                                className="mt-6 inline-block bg-[#33848A] text-white font-semibold py-2 px-4 rounded hover:bg-[#2a6d66] transition"
                            >
                                {hasHistory? "Вернуться назад": "Перейти на главную"}
                            </button>
                        </footer>
                    </div>
                </article>
            </div>
            <Footer/>
        </>
    )
}