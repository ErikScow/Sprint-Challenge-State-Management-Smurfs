import {
    BEGIN_FETCH,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from '../actions/actions'

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
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
        default: 
            return state
    }
}

export default reducer