import * as Type from "./actionsTypes";

const INITAL_STATE = {
    username: '',
    password: '',
    device: ''
};

export default function (state = INITAL_STATE, action) {
    switch (action.type) {
        case Type.FETCH_AUTH_SUCCESS: {
            return {
                ...state,
                username: action.username,
                password: action.password,
                device: action.device
            }
        }

        default:
            return state;
    }
};

export const getAuth = (state) => state.rootState.auth;
