export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const CREATE_PROFILE = 'CREATE_PROFILE';
export const SET_PROFILES = 'SET_PROFILES'

export const fetchProfiles = () => {
    return async (dispatch, getState) => {
        const response = await fetch(
            'https://cf-cankaya.firebaseio.com/profiles.json'
        );

        const resData = await response.json();
        const loadedProfiles = [];

        for (const key in resData) {
            const profile = {
                id: key,
                name: resData[key].name,
                surname: resData[key].surname,
                startDate: resData[key].startDate,
                endDate: resData[key].endDate,
                userId: resData[key].userId
            }
            loadedProfiles.push(profile)
        }

        dispatch({ type: SET_PROFILES, profiles: loadedProfiles })

    }
}

export const createProfile = () => {
    return async (dispatch, getState) => {
        const token = getState().authReducer.token;
        const userId = getState().authReducer.userId;

        const response = await fetch(`https://cf-cankaya.firebaseio.com/profiles.json?auth=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json,'
            },
            body: JSON.stringify({
                userId
            })
        })

        const resData = await response.json();

        dispatch({
            type: CREATE_PROFILE,
            profileData: {
                userId
            }
        })
    }
}

export const updateProfile = (id, name, surname, startDate, endDate) => {
    return async (dispatch, getState) => {
        const token = getState().authReducer.token;
        const userId = getState().authReducer.userId;

        const response = await fetch(`https://cf-cankaya.firebaseio.com/profiles/${id}.json?auth=${token}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json,'
            },
            body: JSON.stringify({
                name,
                surname, 
                startDate,
                endDate
            })
        })

        const resData = await response.json();

        dispatch({
            type: UPDATE_PROFILE,
            profileId: id,
            userId: userId,
            profileData: {
                name,
                surname,
                startDate,
                endDate
            }
        })
    }
}