import createReducer from 'app/lib/createReducer';
import * as types from '../actions/galleryList/types';

const initialState = {
    loading: false,
    pictures: [],
    page: 1,
    hasMore: null,
    loadingFailed: false,
};

export const galleryListReducer = createReducer(initialState, {
    [types.GALLERY_LIST_ENABLE_LOADER](state) {
        return {
            ...state,
            loading: true,
        };
    },
    [types.GALLERY_LIST_DISABLE_LOADER](state) {
        return {
            ...state,
            loading: false,
        };
    },
    [types.GET_IMAGES_REQUEST](state) {
        return {
            ...state,
            loadingFailed: false,
        };
    },
    [types.GET_IMAGES_SUCCESS](state, { data: { pictures, page, hasMore } }) {
        return {
            ...state,
            page,
            hasMore,
            pictures: page === 1 ? pictures : [...state.pictures, ...pictures],
        };
    },
    [types.GET_IMAGES_FAILED](state) {
        return {
            ...state,
            loadingFailed: true,
        };
    },
    [types.GET_IMAGE_DETAIL_REQUEST](state) {
        return {
            ...state,
            loadingFailed: false,
        };
    },
    [types.GET_IMAGE_DETAIL_SUCCESS](state, { data: { pictures, page, hasMore } }) {
        return {
            ...state,
            page,
            hasMore,
            pictures: page === 1 ? pictures : [...state.pictures, ...pictures],
        };
    },
    [types.GET_IMAGE_DETAIL_FAILED](state) {
        return {
            ...state,
            loadingFailed: true,
        };
    },
});
