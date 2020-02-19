import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Share from 'react-native-share';

export default class BottomPart extends PureComponent {

    render() {
        const { author, camera, full_picture } = this.props;

        return (
            <View style={ styles.bottomContainer }>
                <View>
                    <Text style={ styles.author }>{ author }</Text>
                    <Text style={ styles.camera }>{ camera }</Text>
                </View>
                <TouchableOpacity
                    onPress={ () => Share.open({ url: full_picture }) }
                >
                    <Text style={ styles.shareText }>Share!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

BottomPart.propTypes = {
    author: PropTypes.string,
    camera: PropTypes.string,
    full_picture: PropTypes.string,
};

