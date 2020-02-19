import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import GalleryList from 'app/screens/GalleryList';
import GalleryDetail from 'app/screens/GalleryDetail';

const RNApp = createStackNavigator(
    {
        GalleryList: {
            screen: GalleryList,
        },
        GalleryDetail: {
            screen: GalleryDetail,
        },
    },
    {
        initialRouteName: 'GalleryList',
    },
);

export default createAppContainer(RNApp);
