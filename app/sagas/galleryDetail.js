import { call, put, select } from 'redux-saga/effects';
import * as galleryDetailActions from '../actions/galleryDetail';
import { path } from 'ramda';
import { getImageDetail } from '../api/methods/gallery';
import { getToken, loginAsync } from './login';

export function* getImageDetailAsync({ id }) {
    yield put(galleryDetailActions.enableLoader());

    const token = yield select(getToken);
    const response = yield call(getImageDetail, id, token);
    const data = path(['id'], response);
    if (data) {
        yield put(galleryDetailActions.getImageDetailSuccess(response));
    } else if (status === 'Unauthorized') {
        yield call(loginAsync, { reset: true });
        yield call(getImageDetailAsync, { id });
    } else {
        yield put(galleryDetailActions.getImageDetailFailed());
    }
    yield put(galleryDetailActions.disableLoader());
}
