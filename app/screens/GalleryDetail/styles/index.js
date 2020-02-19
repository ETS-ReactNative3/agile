import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';
import metrics from '../../../config/metrics';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: AppStyles.color.COLOR_BLACK,
        flex: 1,
        justifyContent: 'center',
    },
    viewPager: { height: metrics.screenHeight, width: metrics.screenWidth },
});

export default styles;
