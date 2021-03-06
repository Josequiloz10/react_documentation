import {useState, useEffect} from 'react'

const useFetch = url => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()  => {
        const fetchResource = async () => {
            try {
                let result = await fetch(url)
                let data = await result.json()
                setData(data)
                setLoading(false)

            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchResource()
    }, [url])


    return {data, loading, error}

}

export default useFetch