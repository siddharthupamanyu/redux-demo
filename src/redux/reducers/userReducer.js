import { START_CALL, END_CALL, GET_SUCCESSFUL } from '../actions/userActions';

const initialState = {
    userList: [],
    isLoading: false,
    error: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_CALL:
            return {
                ...state,
                isLoading: true
            }
        case GET_SUCCESSFUL:
            return {
                ...state,
                userList: action.users
            }
        case END_CALL:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}