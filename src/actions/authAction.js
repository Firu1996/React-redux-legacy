export const SET_AUTH = 'SET_AUTH'


export function setAuth(user) {
    return {
        type: SET_AUTH,
        payload: user
    }
}