import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native'
const {width, height} = Dimensions.get('window')
export default class Registration extends Component{
    static navigationOptions = {
        header : null
    };

    render(){
        return(
           <View><Text>sub page</Text></View>
        )
    }
}