import * as types from './types';

export function loginRequest() {
    return {
        type: types.LOGIN_REQUEST,
    };
}

export function loginFailed() {
    return {
        type: types.LOGIN_FAILED,
    };
}

export function loginSuccess(data) {
    return {
        type: types.LOGIN_SUCCESS,
        data,
    };
}

export function enableLoader() {
    return {
        type: types.LOGIN_ENABLE_LOADER,
    };
}

export function disableLoader() {
    return {
        type: types.LOGIN_DISABLE_LOADER,
    };
}
