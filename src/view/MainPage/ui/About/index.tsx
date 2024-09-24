import Image from "next/image";
import styles from "./styles.module.scss";
export function About() {
    return (
        <article className={"container py-[70px] sm:pt-[140px]"}>
            <header>
                <h1 className={"block text-[25px] sm:text-[50px] font-light leading-[30px] sm:leading-[61px] font-montserrat text-[#0C0C0C]"}>
                    О нас
                </h1>
                <p className={"flex mt-[44px] sm:mt-[95px]"}>
                    <span className={"font-semibold whitespace-nowrap"}>
                        <b className={"font-semibold mr-[10px]"}>Продикс</b> —
                    </span>
                    <span className={"ml-[10px] max-w-[600px]"}>
                            производственная, технологически оснащённая компания, профессионально занимается свинцовым и оловянным металлопрокатом, соблюдает все стандарты ГОСТ.
                    </span>
                </p>
            </header>
            <section
                className="grid grid-cols-1 xl:grid-cols-12 items-center w-full bg-white mt-[50px] sm:mt-[100px] relative gap-[50px] md:gap-y-[79px] -z-10"
            >

                <div className={styles.image}>
                    <Image
                        src="/about-images.jpg"
                        alt="Lead and Tin Products"
                        className="rounded-[20px] shadow-md w-auto xl:w-full h-full object-cover ml-[3px] m-[18px] xl:m-0 max-h-[216px] md:max-h-[352px]"
                        width={482}
                        height={348}

                    />
                </div>
                <div className="w-full order-1 xl:order-2 xl:col-span-6">
                    <h2 className="text-[15px] font-semibold leading-[21px] text-[#0C0C0C]">
                        Мы предлагаем широкий спектр свинцово-оловянной продукции:
                    </h2>
                    <p className="text-[#858585] mt-[20px]">
                        свинец различных марок, свинцовый лист, свинцовые уплотнительные
                        прокладки для тюбингов, свинцовые кирпичи, свинцовый пруток,
                        свинцовую проволоку, свинцово-сурьмянистые и оловянные аноды,
                        свинцовое литье, оловянно-свинцовые припои, а также производство
                        свинцовых изделий по индивидуальным потребностям заказчика.
                    </p>
                </div>
                <div className="w-full order-3 xl:order-3 xl:col-span-6">
                    <h3 className="text-xl font-semibold text-[#0C0C0C]">Наши преимущества:</h3>
                    <p className="text-[#858585] mt-[20px]">
                        Большой опыт работы и строгое соответствие стандартам ГОСТ,
                        ответственность в выполнении обязательств, уважение и гибкий подход
                        к запросам клиентов, отличное соотношение цены и качества продукции,
                        поставляемой как на отечественный рынок, так и за рубеж.
                    </p>
                </div>
            </section>
        </article>
    )
}