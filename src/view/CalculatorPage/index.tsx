"use client"
import React, {type ChangeEvent, useState} from "react";
import cn from "clsx";
import {CustomDropdown} from "./CustomDropdown";
import {calcItemsData} from "./model/calcItemsData";
import {steelOptions} from "./model/steelData";

export function CalculatorPage() {
    const [activeProfiles, setActiveProfiles] = useState(0)
    const [selectedSteel, setSelectedSteel] = useState<string | null>(null);
    const [availableGrades, setAvailableGrades] = useState<string[]>([]);

    const handleSteelSelect = (steel: string) => {
        setSelectedSteel(steel);
        setAvailableGrades(steelOptions[steel] || []);
    };


    function handleProfileChange(value: number) {
        setActiveProfiles(value)
    }
    const handleSelectMetal = (selectedOption: string) => {
        console.log('Выбранный вариант:', selectedOption);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>, metrics: string) => {
        const inputValue = event.target.value;
        let numericValue = inputValue.replace(/\D/g, '');
        if (numericValue.startsWith('0')) {
            numericValue = numericValue.replace(/^0+/, '');
            if (numericValue.length === 0) {
                numericValue = "0"
            }
        }
        event.target.value = `${numericValue} ${metrics}`;
    }


    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
        metrics: string
    ) => {
        const inputElement = event.target as HTMLInputElement;
        const { key } = event;

        // Разрешаем только цифры и управляющие клавиши
        if (!/^\d$/.test(key) && !["Backspace", "Delete", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
            event.preventDefault();
            return;
        }
        const inputValue = inputElement.value;
        let numericValue = inputValue.replace(/[^0-9]/g, "");
        let value = parseInt(numericValue || "0", 10);
        const cursorPosition = inputElement.selectionStart || 0;
        const selectionStart = inputElement.selectionStart || 0;
        const selectionEnd = inputElement.selectionEnd || 0;

        if (selectionStart === 0 && selectionEnd+metrics.length === numericValue.length) {
            if (key === "Backspace" || key === "Delete") {
                event.preventDefault();
                inputElement.value = `0 ${metrics}`;
                inputElement.setSelectionRange(2, 2); // Устанавливаем курсор после "0 "
                return;
            }
        }

        switch (key) {
            case "Backspace":
                if (cursorPosition > 0) {
                    event.preventDefault();
                    numericValue = numericValue.slice(0, numericValue.length - 1)
                    value = Math.max(0, parseInt(numericValue || "0", 10));
                    inputElement.value = `${value} ${metrics}`;
                    inputElement.setSelectionRange(numericValue.length, numericValue.length);
                }
                break;
            case "Delete":
                if (cursorPosition < numericValue.length) {
                    event.preventDefault();
                    numericValue =
                        numericValue.slice(0, cursorPosition) +
                        numericValue.slice(cursorPosition + 1);
                    value = Math.max(0, parseInt(numericValue || "0", 10));
                    inputElement.value = `${value} ${metrics}`;
                    inputElement.setSelectionRange(cursorPosition, cursorPosition);
                }
                break;
            case "ArrowUp":
                event.preventDefault();
                inputElement.value = `${value + 1} ${metrics}`;
                inputElement.setSelectionRange(cursorPosition, cursorPosition);
                break;
            case "ArrowDown":
                event.preventDefault();
                inputElement.value = `${Math.max(0, value - 1)} ${metrics}`;
                inputElement.setSelectionRange(cursorPosition, cursorPosition);
                break;
            default:
                inputElement.setSelectionRange(numericValue.length, numericValue.length);
                break
        }
    };



    return (
        <article className={"py-[80px] "}>
            <div className={"container"}>
                <div className={"flex flex-col items-center mb-[41px]"}>
                    <ul className={"flex gap-[19px] flex-wrap justify-center"}>
                        {calcItemsData.map((item, index) => (
                            <li key={index}
                                onClick={() => handleProfileChange(index)}
                                className={cn("w-[67px] h-[67px] flex justify-center items-center rounded-[5px] border border-[#cdcdcd] cursor-pointer hover:scale-110 transition ease-in", activeProfiles === index? "scale-110 bg-white": "bg-[#F5F5F578]")}
                            >
                                {item.icon}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={"flex gap-[18px] justify-center"}>
                    <CustomDropdown
                        defaultOption={"Сталь"}
                        options={Object.keys(steelOptions)}
                        onSelect={handleSteelSelect}
                        className={"w-full max-w-[320px]"}
                    />
                    <CustomDropdown
                        defaultOption={"Марка"}
                        options={availableGrades}
                        currentOption={selectedSteel}
                        onSelect={handleSelectMetal}
                        className={"w-full max-w-[320px]"}
                    />
                </div>
                <article className={"mt-[103px]"}>
                    <div className={"max-w-[550px] w-full mx-auto flex gap-[26px] justify-between flex-wrap"}>
                        <div className={"m-auto"}>
                            {calcItemsData[activeProfiles].img}
                        </div>
                        <ul className={"grid md:grid-cols-1 gap-y-[14px] gap-x-[43px] mx-auto"}>
                            {calcItemsData[activeProfiles].estimateItems.map((item, index) => (
                                <li key={`${activeProfiles}_${index}`} className={""}>
                                    <div className={"text-[19px] leading-[23px]"}>{item.name}:</div>
                                    <div className={"flex bg-[#C0C0C04D] items-center rounded-[2px]"}>
                                        <input
                                            onKeyDown={(e)=>handleKeyDown(e, item.metrics)}
                                            onChange={(e)=>handleInputChange(e, item.metrics)}
                                            defaultValue={`0 ${item.metrics}`}
                                            className={"bg-transparent py-[5px] px-[7px] focus:outline-none text-[#000000B2]"}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            </div>

        </article>
    )
}