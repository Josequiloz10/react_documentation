import React from 'react'
import Card from "../components/Card";
import ExcerciseForm from "../components/ExcerciseForm";

const ExerciseNew = ({form, onChange, onSubmit}) => (
    <div className="row">
        <div className="col-sm">
            <Card
                {...form}
            />
        </div>
        <div className="col-sm">
            <ExcerciseForm
                onChange={onChange}
                onSubmit={onSubmit}
                form={form}
            />
        </div>
    </div>
)

export default ExerciseNew