import axios from 'axios'

export const BEGIN_FETCH = 'BEGIN_FETCH'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const fetchSmurfs = () => dispatch => {
    dispatch({type: BEGIN_FETCH})
    axios.get('http://localhost:3333/smurfs')
        .then(res => dispatch({
            type: FETCH_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: FETCH_FAILURE,
            payload: err
        }))
}

export const BEGIN_POST = 'BEGIN_POST'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_FAILURE = 'POST_FAILURE'

export const addSmurf = smurf => dispatch => {
    dispatch ({type: BEGIN_POST})
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => dispatch ({
            type: POST_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: POST_FAILURE,
            payload: err
        }))
}

export const BEGIN_DELETE = 'BEGIN_DELETE'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const DELETE_FAILURE = 'DELETE_FAILURE'

export const deleteSmurf = smurfId => dispatch => {
    dispatch ({type: BEGIN_DELETE})
    axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
        .then(res => dispatch ({
            type: DELETE_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: DELETE_FAILURE,
            payload: err
        }))
}