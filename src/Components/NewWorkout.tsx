import React, { useState } from "react";
import "./NewWorkcout.css";

interface Card {
    id: number;
    title: string;
    content: string;
}

interface Props {
    onCalorieChange: (calories: number) => void;
}

const NewWorkout = ({ onCalorieChange }: Props) => {
    const [cards, setCards] = useState<Card[]>([]);
    const [titleInput, setTitleInput] = useState("");
    const [contentInput, setContentInput] = useState("");
    const [calories, setCalories] = useState<number>(0);

    const addCard = () => {
        const newCard = {
            id: Date.now(), // Unique identifier
            title: titleInput,
            content: contentInput,
        };

        handleCalorieInput();

        setCards([...cards, newCard]);

        setCalories(parseFloat(contentInput));
    };

    const handleCalorieInput = () => {
        onCalorieChange(calories);
    };

    return (
        <div>
            <div className="card w-200 nwc ">
                <div className="card-body">
                    Add New Workout
                    <br />
                    <label htmlFor="titleInput" className="form-label">
                        Day
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="titleInput"
                        value={titleInput}
                        onChange={(e) => setTitleInput(e.target.value)}
                    />
                    <label htmlFor="contentInput" className="form-label">
                        Calories Burnt
                    </label>
                    <textarea
                        className="form-control"
                        id="contentInput"
                        rows={3}
                        value={contentInput}
                        onChange={(e) => {
                            setContentInput(e.target.value);
                        }}
                    />
                    <button className="btn btn-primary" onClick={addCard}>
                        Add
                    </button>
                </div>
            </div>
            <div className="card-container mt-4">
                {cards.map((card) => (
                    <div className="card" key={card.id}>
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewWorkout;
