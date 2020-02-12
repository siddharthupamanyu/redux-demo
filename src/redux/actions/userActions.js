/**
*   Constants
*/
export const START_CALL = 'START_CALL';
export const GET_SUCCESSFUL = 'GET_SUCCESSFUL'
export const END_CALL = 'END_CALL';

/**
 *  Actions
 */

export const startCall = () => {
    return ({ type: START_CALL });
};

export const endCall = () => {
    return ({ type: END_CALL });
}

export const getSuccessful = payload => {
    return ({ type: GET_SUCCESSFUL, users: payload });
};

export const getUser = () => {
    return async dispatch => {
        dispatch(startCall());
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.status === 200) {
            response.json()
                .then(data => {
                    dispatch(getSuccessful(data));
                    dispatch(endCall());
                })
        }
    }
}