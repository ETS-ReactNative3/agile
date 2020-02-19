import { connect } from 'react-redux';
import view from './view';
import * as galleryListActions from '../../actions/galleryList';
import * as galleryDetailActions from '../../actions/galleryDetail';

function mapStateToProps(state) {
    const { loading, pictures, page, hasMore, loadingFailed } = state.galleryListReducer;
    return { loading, pictures, page, hasMore, loadingFailed };
}

function mapDispatchToProps(dispatch) {
    return {
        getImages: (page) => dispatch(galleryListActions.getImagesRequest(page)),
        setCurrentImageId: (id) => dispatch(galleryDetailActions.setCurrentImageId(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(view);
