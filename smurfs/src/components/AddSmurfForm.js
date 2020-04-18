import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addSmurf } from '../actions/actions'

const AddSmurfForm = props => {

    const [fields, setFields] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChange = e => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addSmurf(fields)
        setFields({
            name: '',
            age: '',
            height: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Add a new smurf:
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    value={fields.name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='age'
                    placeholder='age'
                    value={fields.age}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='height'
                    placeholder='height'
                    value={fields.height}
                    onChange={handleChange}
                />
                <button type='submit'>Add!</button>
            </label>
        </form>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { addSmurf }) (AddSmurfForm)