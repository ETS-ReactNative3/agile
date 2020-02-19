import { call, put, select } from 'redux-saga/effects';
import * as loginActions from '../actions/login';
import { path } from 'ramda';
import loginUser from '../api/methods/loginUser';

export const getToken = state => state.loginReducer.token;

export function* loginAsync(reset = false) {
    const token = yield select(getToken);
    if (!token || reset) {
        yield put(loginActions.enableLoader());
        yield put(loginActions.loginRequest());
        const response = yield call(loginUser);
        const auth = path(['auth'], response);
        if (auth) {
            yield put(loginActions.loginSuccess(response));
        } else {
            yield put(loginActions.loginFailed());
        }
        yield put(loginActions.disableLoader());
    }
}
