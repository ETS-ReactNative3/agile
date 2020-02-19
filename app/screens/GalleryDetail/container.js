import { connect } from 'react-redux';
import view from './view';
import * as galleryDetailActions from '../../actions/galleryDetail';

function mapStateToProps(state) {
    const { loading, loadingFailed, currentImageId, full_picture, author, camera, cropped_picture } = state.galleryDetailReducer;
    const { pictures } = state.galleryListReducer;
    return { loading, loadingFailed, currentImageId, full_picture, author, camera, pictures, cropped_picture };
}

function mapDispatchToProps(dispatch) {
    return {
        getImageById: (id) => dispatch(galleryDetailActions.getImageDetailRequest(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(view);
