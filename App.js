/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView, Text,
} from 'react-native';

const MainTabNavigator = createBottomTabNavigator();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Video from 'react-native-video';

const TabOne = () => {
    return <Text>tab one</Text>;
};

const TabTwo = () => {
    return <Video
        paused={true}
        style={{width: 300, height: 400}}
        source={{uri: 'https://sivideo.sfo3.cdn.digitaloceanspaces.com/output.mp4'}}
        resizeMode="cover"
        controls={false}/>;
};

function App() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <MainTabNavigator.Navigator
                    tabBarPosition="bottom"
                    initialRouteName="tabOne">
                    <MainTabNavigator.Screen
                        component={TabOne}
                        name="tabOne">
                    </MainTabNavigator.Screen>
                    <MainTabNavigator.Screen
                        component={TabTwo}
                        name="tabTwo">
                    </MainTabNavigator.Screen>
                </MainTabNavigator.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default App;
