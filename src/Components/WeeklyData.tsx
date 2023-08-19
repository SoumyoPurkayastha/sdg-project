import React from "react";

interface Props {
    calories: number;
}

const WeeklyData = ({ calories }: Props) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    Total calories burnt this week: {calories}
                </div>
            </div>
        </div>
    );
};

export default WeeklyData;
