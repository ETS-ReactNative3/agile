import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getImages(pageNumber, token) {
    return Api(
        `${ ApiConstants.IMAGES }?page=${ pageNumber }`,
        null,
        'get',
        token,
    );
}

export function getImageDetail(id, token) {
    return Api(
        `${ ApiConstants.IMAGES }/${ id }`,
        null,
        'get',
        token,
    );
}
