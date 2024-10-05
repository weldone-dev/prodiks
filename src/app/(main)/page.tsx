import {MainPage} from "@/view/MainPage";
import {fetchCurrencies} from "@/entities/services/currencies/currencies.service";
import {fetchLmaMetalPrice} from "@/entities/services/lme/lme.service";

export default async function Home() {
    const currency = await fetchCurrencies();
    const lmeData = await fetchLmaMetalPrice();
    return (
        <MainPage
            lmeData={lmeData}
            currency={currency}
        />
    );
}


import React, { useState, useRef } from "react";

const AddTask = ({ onAdd, info }) => {
    const [task, setTask] = useState("");
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.trim() === "") {
            alert("Поле обязательно для заполнения!");
            return;
        }

        setTask("");
    };

    const handleAdd = () => {
        const taskAdd = { task };

        if (info) {
            taskAdd.id = info.id;
        }

        onAdd(taskAdd);
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <input
                placeholder="Введите задачу!"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
            />
            <button type="submit" className="button" onClick={handleAdd}>
                Добавить
            </button>
        </form>
    );
};

export default AddTask;