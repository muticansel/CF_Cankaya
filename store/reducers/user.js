import { CREATE_PROFILE, UPDATE_PROFILE, SET_PROFILES } from '../actions/user';

const initialState = {
    profiles: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILES:
            return {
                ...state,
                profiles: action.profiles
            }
        case CREATE_PROFILE:
            const newProfile = {
                userId: action.profileData.userId
            }
            return {
                ...state,
                profiles: state.profiles.concat(newProfile)
            }
        case UPDATE_PROFILE:
            const profileIndex = state.profiles.findIndex(profile => profile.id === action.profileId);

            const updatedProfile = {
                id: action.profileId,
                name: action.profileData.name,
                surname: action.profileData.surname,
                startDate: action.profileData.startDate,
                endDate: action.profileData.endDate,
                userId: action.userId
            };

            const updatedProfiles = [...state.profiles];
            updatedProfiles[profileIndex] = updatedProfile;

            return {
                ...state,
                profiles: updatedProfiles
            }
        default:
            return state;
    }
}

export default userReducer;