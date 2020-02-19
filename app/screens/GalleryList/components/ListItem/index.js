import React, { PureComponent } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class ListItem extends PureComponent {
    onPress = () => {
        const { navigate, setCurrentImageId, item: {id} } = this.props;
        setCurrentImageId(id);
        navigate('GalleryDetail');
    };

    render() {
        const { item: {cropped_picture} } = this.props;

        return (
            <TouchableOpacity style={ styles.imageContainer} onPress={ this.onPress }>
                <Image style={ styles.image } source={ { uri: cropped_picture } }/>
            </TouchableOpacity>
        );
    }
}

ListItem.propTypes = {
    item: PropTypes.shape({
        cropped_picture: PropTypes.string,
        id: PropTypes.string,
    }),
    navigate: PropTypes.func,
    setCurrentImageId: PropTypes.func,
};

