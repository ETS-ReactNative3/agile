import { StyleSheet } from 'react-native';
import AppStyles from '../../../../config/styles';

const styles = StyleSheet.create({
    author: { color: AppStyles.color.COLOR_WHITE, fontSize: 20, fontWeight: 'bold' },
    bottomContainer: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 2 },
    camera: { color: AppStyles.color.COLOR_WHITE, fontSize: 16 },
    shareText: { color: AppStyles.color.COLOR_GREY, fontSize: 20, fontWeight: 'bold' },
});

export default styles;
