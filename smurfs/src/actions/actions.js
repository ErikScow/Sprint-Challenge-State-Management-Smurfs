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

export const addSmurf = newSmurf => dispatch => {
    dispatch ({type: BEGIN_POST})
    axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => dispatch ({
            type: POST_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: POST_FAILURE,
            payload: err
        }))
}