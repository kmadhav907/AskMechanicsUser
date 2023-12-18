import * as React from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { splashScreenStyles } from '../constants/styles';
import { splashViewImage } from '../constants/assests';
import { YELLOW } from '../constants/colors';
import { navigateToRouteWithoutReset } from '../utils/utilsForNavigation';
import { LOGINSCREEN } from '../constants/navigations';
import { SPLASHSCREEN_TIMEOUT } from '../constants/genral';
interface SplashScreenProps {
    navigation:any;
}
const SpalshScreen:React.FunctionComponent<SplashScreenProps> = ({navigation})=> {
    React.useEffect(()=> {
        setTimeout(()=>{
            navigateToRouteWithoutReset(LOGINSCREEN, navigation);
        },SPLASHSCREEN_TIMEOUT);
    }, [])


    return <View style={splashScreenStyles.root}>
        <Image source={splashViewImage} style={splashScreenStyles.rootImage}/>
        <ActivityIndicator 
        color={YELLOW}
        size="large"
        style={splashScreenStyles.rootLoader}
        animating={true}
        ></ActivityIndicator>
        <Text>This is a image</Text>
    </View>;
}

export default SpalshScreen;