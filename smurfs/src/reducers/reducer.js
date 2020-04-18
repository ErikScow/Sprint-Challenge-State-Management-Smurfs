import {
    BEGIN_FETCH,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    BEGIN_POST,
    POST_SUCCESS,
    POST_FAILURE
} from '../actions/actions'

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        //get request cases
        case BEGIN_FETCH:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }

        //post request cases
        case BEGIN_POST:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case POST_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }
        case POST_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        default: 
            return state
    }
}

export default reducer