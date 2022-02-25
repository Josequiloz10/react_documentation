import React from 'react'
import FatalError from './500'
import ExerciseNew from './ExerciseNew'
import url from './../config'

class ExcerciseNewContainer extends React.Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
    };


    render() {

        if(this.state.error)
            return <FatalError/>

        return  <ExerciseNew
                form={this.state.form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                />
    }


    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form, [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = async e => {
        e.preventDefault()

        this.setState({
            loading: true
        })

        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let response = await fetch(`${url}/exercises`, config)
            let json = await response.json()

            this.setState({
                loading: false
            })

            this.props.history.push('/excercise')

        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }
}

export default ExcerciseNewContainer