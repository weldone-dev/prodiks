import React, {type ChangeEvent, type FC, useEffect, useRef, useState} from 'react';



interface DynamicWidthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const DynamicWidthInput:FC<DynamicWidthInputProps> = ({ value, onChange, ...props }) => {
    const inputRef = useRef(null);
    const [inputWidth, setInputWidth] = useState('auto');
    const [currentValue, setCurrentValue] = useState<number | null>(null);
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        onChange(event)
        console.log({currentValue})
        setCurrentValue(parseInt(event.target.value, 10))
    }
    useEffect(() => {
        if (inputRef.current) {
            const tempSpan = document.createElement('span');
            // tempSpan.style.visibility = 'hidden';
            tempSpan.style.position = 'absolute';
            tempSpan.style.whiteSpace = 'pre';
            tempSpan.style.font = window.getComputedStyle(inputRef.current).font;
            tempSpan.textContent = value.toString();
            document.body.appendChild(tempSpan);

            setInputWidth(tempSpan.offsetWidth + 20 + 'px'); // добавляем небольшой запас для внутреннего отступа
            console.log({tempSpan: tempSpan.offsetWidth })
            document.body.removeChild(tempSpan);
        }
    }, [value, currentValue]);

    return (
        <input
            {...props}
            ref={inputRef}
            defaultValue={value}
            onChange={handleChange}
            style={{ width: inputWidth }}
            type="number"
            className="border rounded"
        />
    );
};

export default DynamicWidthInput;