import { takeEvery } from 'redux-saga/effects';
import * as galleryListTypes from '../actions/galleryList/types';
import * as galleryDetailTypes from '../actions/galleryDetail/types';
import { getImagesAsync } from './galleryList';
import { getImageDetailAsync } from './galleryDetail';

export const mainSagas = [
    takeEvery(galleryListTypes.GET_IMAGES_REQUEST, getImagesAsync),
    takeEvery(galleryDetailTypes.GET_IMAGE_DETAIL_REQUEST, getImageDetailAsync),
];
