import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native'
const {width, height} = Dimensions.get('window')
export default class Registration extends Component{
    static navigationOptions = {
        header : null
    };

    render(){
        return(
            <View style={{width, height, backgroundColor: 'red'}}>
                <View style={{width: width * 0.7, height: height* 0.3, marginTop: height* 0.15, marginLeft: width* 0.08, backgroundColor:'red'}}>
                    <Image source={require('./Images/logo.png')} style={{width: width * 0.8, height: height* 0.2}}/>
                    <Text style={{color:'white',  marginLeft: width* 0.2}}>Beautiful, Private Sharing</Text>
                </View>
                <View style={{width:width, height: height* 0.55, alignItems:'center'}}>
                    <TouchableOpacity style={{width: width* 0.6, height: height* 0.09, backgroundColor:'white', borderRadius: 10, marginTop: height * 0.06, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'red', fontSize: 20, fontWeight:'bold'}}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={{color:'white', marginTop: height* 0.03}}>Already have a Path account?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login", {screen: "Login"})} style={{width: width* 0.6, height: height* 0.09, borderWidth:1, borderColor:'white', borderRadius: 10, marginTop: height * 0.01, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white', fontSize: 20, }}>Log In</Text>
                    </TouchableOpacity>
                    <Text style={{color:'white', marginTop: height* 0.02}}>By using Path, you agree to Path's</Text>
                    <Text style={{color:'white'}}>Terms of Use and Privacy Policy</Text>
                </View>
            </View>
        )
    }
}