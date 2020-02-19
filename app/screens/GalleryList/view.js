import React, { PureComponent } from 'react';
import {
    Text,
    SafeAreaView,
    FlatList,
    RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import ListItem from './components/ListItem';
import AppStyles from '../../config/styles';

export default class GalleryList extends PureComponent {
    state = {};

    static navigationOptions = {
        title: 'Gallery app',
        headerTitleStyle: {
            color: AppStyles.color.COLOR_WHITE,
        },
        headerStyle: {
            backgroundColor: AppStyles.color.COLOR_BLACK,
        },
    };

    componentDidMount() {
        this.getFirstPageOfImages();
    }

    getFirstPageOfImages = () => {
        this.props.getImages(1);
    };

    loadMoreImages = () => {
        const { page, hasMore, loading } = this.props;
        if (hasMore && !loading) {
            this.props.getImages(parseInt(page) + 1);
        }
    };

    render() {
        const { loading, pictures, loadingFailed, navigation: { navigate }, setCurrentImageId } = this.props;
        return (
            <SafeAreaView style={ styles.container }>
                <FlatList
                    onEndReached={ this.loadMoreImages }
                    data={ pictures }
                    ListEmptyComponent={ <Text>Sorry the list is empty</Text> }
                    refreshControl={
                        <RefreshControl
                            refreshing={ loading && !pictures }
                            onRefresh={ this.getFirstPageOfImages }
                        />
                    }
                    renderItem={ ({ item }) => (
                        <ListItem item={ item } navigate={ navigate } setCurrentImageId={ setCurrentImageId } />
                    ) }
                    numColumns={ 2 }
                    keyExtractor={ ({ id }) => id.toString() }
                />
                { loadingFailed && <Text> Something went wrong </Text> }
            </SafeAreaView>
        );
    }
}

GalleryList.propTypes = {
    loading: PropTypes.bool,
    pictures: PropTypes.array,
    page: PropTypes.number,
    hasMore: PropTypes.bool,
    loadingFailed: PropTypes.bool,
    getImages: PropTypes.func,
    setCurrentImageId: PropTypes.func,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
};

