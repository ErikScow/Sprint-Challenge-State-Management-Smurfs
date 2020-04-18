import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { addSmurf } from '../actions/actions'

const Form = styled.form`
    text-align: center;
    height: 200px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
`

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
        <Form onSubmit={handleSubmit}>
            <h4>Add to village:</h4>
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

        </Form>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { addSmurf }) (AddSmurfForm)