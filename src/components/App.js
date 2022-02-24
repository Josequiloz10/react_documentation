import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Excercises from './../pages/Excercises'
import ExcercisesNew from './../pages/ExcercisesNew'
import NotFound from './../pages/NotFound'


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/excercise" component={Excercises}/>
            <Route exact path="/excercise/new" component={ExcercisesNew}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default App