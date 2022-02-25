import React from 'react'
import Card from "./Card";
const ExcerciseList = ({excercises}) => (
    <div>
        {excercises.map((excercise) => {
            return (
                <Card
                    {...excercise}
                    key={excercise.id}
                />
            )
        })}
    </div>
)

export default ExcerciseList