import * as types from './types';

export function enableLoader() {
    return {
        type: types.GALLERY_LIST_ENABLE_LOADER,
    };
}

export function disableLoader() {
    return {
        type: types.GALLERY_LIST_DISABLE_LOADER,
    };
}

export function getImagesRequest(page) {
    return {
        type: types.GET_IMAGES_REQUEST,
        page
    };
}

export function getImagesSuccess(data) {
    return {
        type: types.GET_IMAGES_SUCCESS,
        data,
    };
}

export function getImagesFailed() {
    return {
        type: types.GET_IMAGES_FAILED,
    };
}
