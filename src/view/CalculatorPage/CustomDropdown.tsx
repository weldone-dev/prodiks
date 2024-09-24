import {type FC, useEffect, useState} from "react";
import cn from "clsx";


interface IProps {
    defaultOption?: string;
    options: string[];
    className?: string;
    currentOption?: string | null;
    onSelect: (selectedOption: string) => void;
}


export const CustomDropdown:FC<IProps> = ({defaultOption = 'Выберите вариант', options, onSelect, className, currentOption}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>(defaultOption );

    const toggleDropdown = () => {
        if (options.length === 0) {
            setSelectedOption(defaultOption)
            setIsOpen(false)
            return
        }
        setIsOpen(!isOpen)
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option); // Передаем выбранную опцию родителю
    };
    useEffect(()=>{
        if (!currentOption) return
        setSelectedOption(defaultOption)
        setIsOpen(false);

    }, [currentOption])

    return (
        <div className={cn("relative inline-block text-left", className)}>
            <div className={cn({
                "opacity-20": options.length === 0
            })}>
                <button
                    type="button"
                    className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                    onClick={toggleDropdown}
                >
                    {selectedOption}
                    <svg
                        className={`ml-2 h-5 w-5 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            <div
                className={`${
                    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                } transition-all duration-200 ease-out absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform`}
            >
                <div className="py-1">
                    {options.map((option) => (
                        <button
                            key={option}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>



        </div>
    )
}