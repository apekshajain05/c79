import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';

const MyHeader=(props)=>{
    return(
        <Header
         backgroundColor='pink'
         centerComponent={{text:this.props.title,style:{color:'black',fontSize:20,fontWeight:'bold'}}}
        />
    )
}
export default MyHeader;