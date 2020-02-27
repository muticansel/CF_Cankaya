import { CREATE_PROFILE } from '../actions/user';

const initialState = {
    profiles: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PROFILE:
            const newProfile = {
                userId: action.profileData.userId
            }
            return {
                ...state,
                profiles: state.profiles.concat(newProfile)
            }
        default:
            return state;
    }
}

export default userReducer;