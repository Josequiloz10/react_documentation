import React, {useState, useEffect} from 'react';
import Excercices from './Excercises'
import Loading from './../components/Loading'
import FatalError from './500'

const ExcercisesContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    
    useEffect(()  => {
        const fetchExcercises = async () => {
            try {
                let result = await fetch('http://localhost:8000/api/exercises')
                let data = await result.json()
                setData(data)
                setLoading(false)

            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchExcercises()
    }, [])
    
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