import createReducer from 'app/lib/createReducer';
import * as types from '../actions/galleryDetail/types';

const initialState = {
    loading: false,
    loadingFailed: false,
    currentImageId: null,
    full_picture: null,
    author: null,
    camera: null,
    cropped_picture: null,
};

export const galleryDetailReducer = createReducer(initialState, {
    [types.GALLERY_DETAIL_ENABLE_LOADER](state) {
        return {
            ...state,
            loading: true,
        };
    },
    [types.GALLERY_DETAIL_DISABLE_LOADER](state) {
        return {
            ...state,
            loading: false,
        };
    },
    [types.SET_CURRENT_IMAGE_ID](state, { id }) {
        return {
            ...state,
            currentImageId: id,
        };
    },
    [types.GET_IMAGE_DETAIL_REQUEST](state) {
        return {
            ...state,
            loadingFailed: false,
        };
    },
    [types.GET_IMAGE_DETAIL_SUCCESS](state, { data: { full_picture, author, camera, cropped_picture } }) {
        return {
            ...state,
            full_picture,
            author,
            camera,
            cropped_picture,
        };
    },
    [types.GET_IMAGE_DETAIL_FAILED](state) {
        return {
            ...state,
            loadingFailed: true,
        };
    },
});
