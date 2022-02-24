import React from 'react';
import ExcerciseList from './../components/ExcerciseList'
import Welcome from './../components/Welcome'
import AddButton from './../components/AddButton'
import Loading from './../components/Loading'
import FatalError from './500'


class Excercises extends React.Component {

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

            return (
                <div>
                    <Welcome
                        username="Jose"
                    />
                    <ExcerciseList
                        excercises={this.state.data}
                    />
                    <AddButton
                    />
                </div>
            )
    }

}

export default Excercises