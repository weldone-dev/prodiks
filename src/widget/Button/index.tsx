import type {HTMLAttributes} from "react";
import cn from "clsx";


interface IProps extends HTMLAttributes<HTMLButtonElement> {
    x_type: 'primary' | 'secondary' | "tertiary"
}
export function Button ({children, className="", x_type, ...props}: IProps) {

    return <button className={cn({
        "bg-transparent border-[#0C0C0C] border text-[13px] text-[#0C0C0C] font-medium leading-[16px] transition duration-150 ease-in-out hover:bg-[#0C0C0C] hover:text-white": x_type==="primary",
        "bg-[#0C0C0C] border-[#0C0C0C] text-white text-[13px] font-medium leading-[16px] transition duration-150 ease-in-out hover:bg-transparent hover:text-[#0C0C0C] hover:border": x_type==="secondary",
        "bg-transparent border border-white text-white text-[13px] font-medium leading-[16px] transition duration-150 ease-in-out hover:bg-white hover:text-black hover:border": x_type==="tertiary",

    }, "", className)} {...props} >
        {children}
    </button>
}