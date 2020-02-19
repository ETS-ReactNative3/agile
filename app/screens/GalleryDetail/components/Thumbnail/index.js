import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Thumbnail extends PureComponent {

    render() {
        const { cropped_picture } = this.props;

        return (
            <Image
                blurRadius={ 1 }
                style={ styles.thumbnail }
                source={ { uri: cropped_picture } }
            />
        );
    }
}

Thumbnail.propTypes = {
    cropped_picture: PropTypes.string,
};

