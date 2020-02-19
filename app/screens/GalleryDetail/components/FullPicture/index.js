import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import metrics from '../../../../config/metrics';
import ImageZoom from 'react-native-image-pan-zoom';

export default class FullPicture extends PureComponent {

    render() {
        const { full_picture } = this.props;

        return (
            <ImageZoom
                cropWidth={ metrics.screenWidth }
                cropHeight={ metrics.screenHeight * .85 }
                imageWidth={ metrics.screenWidth }
                imageHeight={ metrics.screenHeight * .85 }
                enableCenterFocus={ false }
            >
                <Image style={ styles.image } source={ { uri: full_picture } }/>
            </ImageZoom>
        );
    }
}

FullPicture.propTypes = {
    full_picture: PropTypes.string,
};

