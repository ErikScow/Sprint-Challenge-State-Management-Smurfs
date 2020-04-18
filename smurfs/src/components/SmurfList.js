import React,  { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { fetchSmurfs } from '../actions/actions'

import Smurf from './Smurf'

const SmurfContainer = styled.div`
    padding-top: 20px;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`

const SmurfList = props => {

    useEffect(() => {
        props.fetchSmurfs()
    },[])

    return (
        <SmurfContainer>
            {props.smurfs.map((smurf, i) => {
                return <Smurf key={i} smurf={smurf}/>
            })}
        </SmurfContainer>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList)