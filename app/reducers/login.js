import createReducer from 'app/lib/createReducer';
import * as types from '../actions/login/types';

const initialState = {
    loading: false,
    token: null,
    loginFailed: false,
};

export const loginReducer = createReducer(initialState, {
    [types.LOGIN_ENABLE_LOADER](state) {
        return {
            ...state,
            loading: true,
        };
    },
    [types.LOGIN_DISABLE_LOADER](state) {
        return {
            ...state,
            loading: false,
        };
    },
    [types.LOGIN_REQUEST](state) {
        return {
            ...state,
            loginFailed: false,
        };
    },
    [types.LOGIN_SUCCESS](state, { data: { token } }) {
        return {
            ...state,
            token,
        };
    },
    [types.LOGIN_FAILED](state) {
        return {
            ...state,
            loginFailed: true,
        };
    },
});
