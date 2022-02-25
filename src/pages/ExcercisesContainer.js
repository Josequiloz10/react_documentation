import React from 'react';
import Excercices from './Excercises'
import Loading from './../components/Loading'
import FatalError from './500'
import useFetch from './../hooks/useFetch'

const ExcercisesContainer = () => {

    const {data, loading, error} = useFetch ('http://localhost:8000/api/exercises')

    if (loading)
        return <Loading/>

    if (error)
        return <FatalError/>

    return <Excercices
        username="Jose"
        excercises={data}
    />
}

export default ExcercisesContainer