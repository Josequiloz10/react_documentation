import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ExcercisesContainer from './../pages/ExcercisesContainer'
import ExcercisesNewContainer from './../pages/ExcercisesNewContainer'
import NotFound from './../pages/NotFound'


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/excercise" component={ExcercisesContainer}/>
            <Route exact path="/excercise/new" component={ExcercisesNewContainer}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default App