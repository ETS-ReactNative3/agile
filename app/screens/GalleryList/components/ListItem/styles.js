import { StyleSheet } from 'react-native';
import metrics from '../../../../config/metrics';

const styles = StyleSheet.create({
    image: { height: metrics.screenHeight * 0.25, width: metrics.screenWidth * .48 },
    imageContainer: {margin: metrics.screenWidth * .01},
});

export default styles;
