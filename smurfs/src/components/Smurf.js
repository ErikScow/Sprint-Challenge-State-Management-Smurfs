import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { deleteSmurf } from '../actions/actions'

const SmurfBox = styled.div`
    text-align: center;
    width: 20%;
    padding: 20px;
    border: 1px solid black;
    margin: 30px;
`

const Smurf = props => {
    return (
        <SmurfBox>
            <h2>{props.smurf.name}</h2>
            <h3>Age: {props.smurf.age}</h3>
            <h3>Height: {props.smurf.height}</h3>
            <button onClick={() => {
                props.deleteSmurf(props.smurf.id)
            }}>Banish from village</button>
        </SmurfBox>
    )
}

export default connect(null, { deleteSmurf })(Smurf)