import {Button} from "@/widget/Button";


export function TermsOfCooperation () {
    return (
        <article className={"bg-[#275F63] py-[53px] md:py-[84px] font-montserrat"}>
            <div className={"container"}>
                <header className={"text-center text-white font-light mb-[40px]"}>
                    <h1 className={"text-[25px] leading-[30px] mb-[20px] md:text-[35px] md:leading-[43px] md:mb-[26px]"}>Условия сотрудничества</h1>
                    <p className={"text-[15px] leading-[18px]"}>Мы работаем с юр. лицами и ИП</p>
                </header>
                <form action="" className={"flex flex-col w-full max-w-[340px] items-center mx-auto"}>
                    <div className={"flex flex-col w-full gap-[7px] mb-[33px]"}>
                        <input type="text" placeholder={"Ваше имя"} name={"name"} className={"p-[15px] border border-[#8C8C8CD9] text-[13px] font-light leading-[16px] outline-none"} autoComplete={"off"}/>
                        <input type="email" placeholder={"Ваш Email"} name={"email"} className={"p-[15px] border border-[#8C8C8CD9] text-[13px] font-light leading-[16px] outline-none"}/>
                        <input type="text" placeholder={"Ваш телефон"} name={"phone"} className={"p-[15px] border border-[#8C8C8CD9] text-[13px] font-light leading-[16px] outline-none"}/>
                    </div>
                    <Button x_type={"tertiary"} className={"w-full py-[15px]"}>Связаться</Button>
                </form>
            </div>
        </article>
    )
}