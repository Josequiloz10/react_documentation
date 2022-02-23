import React from 'react'
import Card from "./Card";

function ExcerciseList(props) {
        return (
            <div>
                {props.excercises.map((excercise) => {
                    return (
                        <Card
                            title={excercise.title}
                            description={excercise.description}
                            img={excercise.img}
                            leftColor={excercise.leftColor}
                            rightColor={excercise.rightColor}
                            key={excercise.id}
                        />
                    )
                })}
            </div>
        )
}

export default ExcerciseList