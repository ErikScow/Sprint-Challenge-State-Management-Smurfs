import axios from 'axios'

export const BEGIN_FETCH = 'BEGIN_FETCH'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const fetchSmurfs = () => dispatch => {
    dispatch({type: BEGIN_FETCH})
    axios.get('http://localhost:3333')
        .then(res => dispatch({
            type: FETCH_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: FETCH_FAILURE,
            payload: err
        }))
}