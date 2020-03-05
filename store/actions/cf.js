export const NEW_WOD = "NEW_WOD";

export const newWod = (date, wodDetail) => {
    return async (dispatch, getState) => {
        const token = getState().authReducer.token;
        const userId = getState().authReducer.userId;

        const response = await fetch(`https://cf-cankaya.firebaseio.com/wods.json?auth=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json,'
            },
            body: JSON.stringify({
                date,
                wodDetail
            })
        })

        const resData = await response.json();

        dispatch({
            type: NEW_WOD,
            wodData: {
                date,
                wodDetail
            }
        })
    }
}