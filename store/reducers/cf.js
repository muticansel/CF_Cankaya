import { NEW_WOD } from '../actions/cf';

const initialState = {
    
}

const cfReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_WOD:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default cfReducer;