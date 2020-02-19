import React, { PureComponent } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import AppStyles from '../../config/styles';
import ViewPager from '@react-native-community/viewpager';
import { path } from 'ramda';
import FullPicture from './components/FullPicture';
import Thumbnail from './components/Thumbnail';
import BottomPart from './components/BottomPart';

export default class GalleryDetail extends PureComponent {
    state = {
        currentPage: null,
    };

    static navigationOptions = {
        title: '',
        headerTitleStyle: {
            color: AppStyles.color.COLOR_WHITE,
        },
        headerStyle: {
            backgroundColor: AppStyles.color.COLOR_BLACK,
        },
    };

    onPageSelected = (e) => {
        const { getImageById, pictures } = this.props;
        const position = path(['nativeEvent', 'position'], e);
        if (this.state.currentPage !== position) {
            this.setState({ currentPage: position });
            const id = pictures[position].id;
            getImageById(id);
        }
    };

    render() {
        const { pictures, loadingFailed, full_picture, author, currentImageId, cropped_picture, camera } = this.props;
        const initialPage = pictures.findIndex(picture => picture.id === currentImageId);
        return (
            <SafeAreaView style={ styles.container }>
                <ViewPager
                    style={ styles.viewPager }
                    initialPage={ initialPage }
                    onPageSelected={ this.onPageSelected }
                >
                    {
                        pictures.map((picture, key) => {
                            return (
                                <View key={ key }>
                                    { cropped_picture !== picture.cropped_picture && (
                                        <>
                                            <Thumbnail cropped_picture={ picture.cropped_picture } />
                                            <ActivityIndicator size="small" />
                                        </>
                                    )}
                                    { cropped_picture === picture.cropped_picture && (
                                        <>
                                            <FullPicture full_picture={ full_picture } />
                                            <BottomPart
                                                full_picture={ full_picture }
                                                author={ author }
                                                camera={ camera }
                                            />
                                        </>
                                    )}
                                </View>
                            );
                        })
                    }
                    { loadingFailed && <Text> Something went wrong </Text> }
                </ViewPager>
            </SafeAreaView>
        );
    }
}

GalleryDetail.propTypes = {
    loading: PropTypes.bool,
    currentImageId: PropTypes.string,
    full_picture: PropTypes.string,
    cropped_picture: PropTypes.string,
    author: PropTypes.string,
    camera: PropTypes.string,
    pictures: PropTypes.array,
    loadingFailed: PropTypes.bool,
    getImageById: PropTypes.func,
};

