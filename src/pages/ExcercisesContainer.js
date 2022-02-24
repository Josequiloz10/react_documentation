import React from 'react';
import Excercices from './Excercises'
import Loading from './../components/Loading'
import FatalError from './500'


class ExcercisesContainer extends React.Component {

    state = {
        data: [],
        loading: true,
        error: null
    }

    async componentDidMount() {
        await this.fetchExcercises()
    }

    fetchExcercises = async () => {
        try {
            let result = await fetch('http://localhost:8000/api/exercises')
            let data = await result.json()
            this.setState({
                data,
                loading: false
            })
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }

    }

    render() {

        if(this.state.loading)
            return <Loading />


        if(this.state.error)
            return <FatalError/>


            return <Excercices
                username="Jose"
                excercises={this.state.data}
            />

    }

}

export default ExcercisesContainer