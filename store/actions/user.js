export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const CREATE_PROFILE = 'CREATE_PROFILE';

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

export const updateProfile = (email, password) => {
    
}