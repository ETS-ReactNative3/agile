/*
 * combines all th existing reducers
 */
import * as loginReducer from '../reducers/login';
import * as galleryListReducer from '../reducers/galleryList';
import * as galleryDetailReducer from '../reducers/galleryDetail';
export default Object.assign(loginReducer, galleryListReducer, galleryDetailReducer);
