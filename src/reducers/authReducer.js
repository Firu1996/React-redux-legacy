import { SET_AUTH } from "../actions/authAction"

const initialState = {
    user: null
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH:
            return {
                user: action.payload
            }
            break;

        default:
            return state

    }
}