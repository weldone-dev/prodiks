import styles from "./styles.module.scss";
import {Button} from "@/widget/Button";
import {SecondaryOrderButton} from "@/features/modal/ui/Modal/SecondaryOrderButton";
import {scrollToElement} from "@/shared/urils/scrollTo";


export function MainHeader() {

    return (
        <section className={styles.header}>
            <div className={"container flex flex-col justify-between max-h-[900px] h-full"}>
                <article className={"pt-[87px]"}>
                    <ul className={"flex flex-col items-end gap-[38px]"}>
                        {([
                            "Отличное соотношение цены и качества",
                            "Соответствует стандартам ГОСТ",
                            "Ответственность в выполнении обязательств"
                        ]).map((item, index) => (
                            <li className={"flex gap-[22px] text-end"} key={index}>
                                <div
                                    className={"max-w-[163px] font-montserrat font-normal text-[13px] sm:text-[15px] leading-[18px] sm:leading-[21px] text-[#0C0C0C]"}
                                >
                                    {item}
                                </div>
                                <span className={"w-[11px] h-[11px] bg-black rounded-full"}></span>
                            </li>
                        ))}
                    </ul>
                </article>
                <article className={"mt-auto mb-[115px]"}>
                    <p className={"text-[#0C0C0C] text-[25px] sm:text-[38px] font-light leading-[59px] max-w-[957px]"}>
                        <b className={"font-medium"}>Продикс</b> — производит свинцовый
                        и оловянный металлопрокат в городе <span className={"whitespace-nowrap"}>Санкт-Петербург</span>
                    </p>
                    <div className={"border-black border-t-[1px] my-[10px] flex flex-wrap gap-x-[16px]"}>
                        <p className="mt-4 text-15px] sm:text-[24px] leading-[34px]">
                            Мы открыты для делового сотрудничества, <strong className={"font-semibold"}>взаимовыгодного партнерства</strong> и
                            перспективных отношений.
                        </p>
                        <div className="mt-6 gap-[13px] flex flex-wrap">
                            <Button
                                x_type={"primary"}
                                className={"w-[152px] h-[46px]"}
                                onClick={()=>scrollToElement("terms-of-cooperation", -500)}
                            >
                                Связаться
                            </Button>
                            <SecondaryOrderButton />
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}