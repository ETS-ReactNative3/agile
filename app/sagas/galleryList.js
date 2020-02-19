import { call, put, select } from 'redux-saga/effects';
import * as galleryActions from '../actions/galleryList';
import { path } from 'ramda';
import getImages from '../api/methods/gallery';
import { getToken, loginAsync } from './login';

export function* getImagesAsync({ page }) {
    yield put(galleryActions.enableLoader());

    const token = yield select(getToken);
    const response = yield call(getImages, page, token);

    const data = path(['pictures'], response);
    const status = path(['status'], response);
    if (data) {
        yield put(galleryActions.getImagesSuccess(response));
    } else if (status === 'Unauthorized') {
        yield call(loginAsync, { reset: true });
        yield call(getImagesAsync, { page });
    } else {
        yield put(galleryActions.getImagesFailed());
    }
    yield put(galleryActions.disableLoader());
}
