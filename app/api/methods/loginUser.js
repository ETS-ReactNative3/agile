import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function loginUser() {
    return Api(
        ApiConstants.LOGIN,
        ApiConstants.API_KEY,
        'post',
        null,
    );
}
