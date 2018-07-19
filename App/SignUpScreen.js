import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity, TextInput} from 'react-native'
const {width, height} = Dimensions.get('window')

export default class SignUpScreen extends Component{

    static navigationOptions = {
        header : null
    };
    constructor(props) {
        super(props);
        this.state = {


        }
    }

    render(){

        return(
        <View>Home page</View>
        )
    }
}