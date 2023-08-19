import "./App.css";
import React, { useState } from "react";
import NewWorkout from "./Components/NewWorkout";
import WeeklyData from "./Components/WeeklyData";

function App() {
    const [calories, setCalories] = useState<number>(0);

    const handleCalorieChange = (calories1: number) => {
        setCalories(calories + calories1);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="card main-card">
                        <div className="col col-7">
                            <WeeklyData calories={calories} />
                        </div>
                        <div className="col col-7">
                            <NewWorkout onCalorieChange={handleCalorieChange} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
