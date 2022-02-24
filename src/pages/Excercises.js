import React, {Fragment} from 'react';
import ExcerciseList from './../components/ExcerciseList'
import Welcome from './../components/Welcome'
import AddButton from './../components/AddButton'

const Excercises = ({username, excercises}) => (
        <Fragment>
            <Welcome
                username={username}
            />
            <ExcerciseList
                excercises={excercises}
            />
            <AddButton
            />
        </Fragment>
)

export default Excercises