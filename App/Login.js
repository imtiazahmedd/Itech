import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity, TextInput} from 'react-native'
const {width, height} = Dimensions.get('window')

export default class Login extends Component{
    static navigationOptions = {
        header : null
    };
    render(){
        return(
            <View style={{width: width, height:height}}>
                <View style={{width: width* 0.15, height: height* 0.05, marginTop: height* 0.03, marginLeft: width* 0.03}}>
                    <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                        <Image source={require('./Images/leftArrow.png')} style={{width: 25, height: 25}}/>
                    </TouchableOpacity>
                </View>
                <View style={{width:width, height: height* 0.1, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize: 22, fontWeight: 'bold'}}>Create an Account</Text>
                </View>
                <View style={{width:width, height: height* 0.5, alignItems:'center'}}>
                    <View>
                        <TextInput
                            underlineColorAndroid = 'transparent'
                            placeholder= 'First Name'
                            style={{width: width* 0.7, height: height*0.07, borderWidth:1, borderColor:'grey', borderRadius:7}}
                        />
                    </View>
                    <View>
                        <TextInput
                            underlineColorAndroid = 'transparent'
                            placeholder= 'last Name'
                            style={{width: width* 0.7, height: height*0.07, borderWidth:1, borderColor:'grey', borderRadius:7, marginTop:10}}
                        />
                    </View>
                    <View>
                        <TextInput
                            underlineColorAndroid = 'transparent'
                            placeholder= 'Email'
                            style={{width: width* 0.7, height: height*0.07, borderWidth:1, borderColor:'grey', borderRadius:7, marginTop:10}}
                        />
                    </View>
                    <View>
                        <TextInput
                            underlineColorAndroid = 'transparent'
                            placeholder= 'Password'
                            style={{width: width* 0.7, height: height*0.07, borderWidth:1, borderColor:'grey', borderRadius:7, marginTop:10}}
                        />
                    </View>
                    <View>
                        <TextInput
                            underlineColorAndroid = 'transparent'
                            placeholder= 'Re-type Password'
                            style={{width: width* 0.7, height: height*0.07, borderWidth:1, borderColor:'grey', borderRadius:7, marginTop:10}}
                        />
                    </View>
                </View>
            </View>
        )
    }
}