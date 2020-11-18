import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import BookRequestScreen from './screens/BookRequestScreen';
import BookDonateScreen from './screens/BookDonateScreen';
import {createBottonTabNavigator} from 'react-navigation-tabs';

export const AppTabNavigator=createBottonTabNavigator({
    DonateBooks:{screen:BookDonateScreen},
    navigationOptions:{
        tabBarIcon:<Image source={require("../assets/request-list.png")}
        style={{width:20,height:20}} />,
        tabBarLabel:"Donate Books"
    },
    RequestBooks:{screen:BookRquestScreen},
    navigationOptions:{
        tabBarIcon:<Image source={require("../assets/request-book.png")}
        style={{width:20,height:20}} />,
        tabBarLabel:"Request Books"
    }

})