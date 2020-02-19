import * as types from './types';

export function enableLoader() {
    return {
        type: types.GALLERY_DETAIL_ENABLE_LOADER,
    };
}

export function disableLoader() {
    return {
        type: types.GALLERY_DETAIL_DISABLE_LOADER,
    };
}

export function setCurrentImageId(id) {
    return {
        type: types.SET_CURRENT_IMAGE_ID,
        id
    };
}

export function getImageDetailRequest(id) {
    return {
        type: types.GET_IMAGE_DETAIL_REQUEST,
        id
    };
}

export function getImageDetailSuccess(data) {
    return {
        type: types.GET_IMAGE_DETAIL_SUCCESS,
        data,
    };
}

export function getImageDetailFailed() {
    return {
        type: types.GET_IMAGE_DETAIL_FAILED,
    };
}
