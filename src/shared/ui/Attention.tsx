import {type FC} from "react";
import cn from "clsx";

interface IProps {
    className?: string;
}
export const Attention:FC<IProps> = ({className}) => (
    <div className={cn("flex gap-[12px] items-center", className)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38"
             fill="none">
            <circle cx="19" cy="19" r="19" fill="#B01B1B"/>
            <path
                d="M17.3442 12.5356H21.1306L20.4996 21.8389H17.9753L17.3442 12.5356ZM19.2374 26.9485C18.681 26.9485 18.2128 26.7721 17.8328 26.4192C17.4664 26.0528 17.2831 25.6117 17.2831 25.096C17.2831 24.5803 17.4664 24.1528 17.8328 23.8135C18.1992 23.4606 18.6674 23.2842 19.2374 23.2842C19.8074 23.2842 20.2756 23.4606 20.6421 23.8135C21.0085 24.1528 21.1917 24.5803 21.1917 25.096C21.1917 25.6117 21.0017 26.0528 20.6217 26.4192C20.2553 26.7721 19.7939 26.9485 19.2374 26.9485Z"
                fill="white"/>
        </svg>
        <div className={"text-[15px] font-light text-black leading-[18px]"}>Нажмите на строки таблицы(-ц) для просмотра информации.</div>
    </div>
)