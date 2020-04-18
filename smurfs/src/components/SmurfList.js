import React,  { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchSmurfs } from '../actions/actions'

import Smurf from './Smurf'

const SmurfList = props => {

    useEffect(() => {
        props.fetchSmurfs()
    },[])

    return (
        <div>
            {props.smurfs.map((smurf, i) => {
                return <Smurf key={i} smurf={smurf}/>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList)