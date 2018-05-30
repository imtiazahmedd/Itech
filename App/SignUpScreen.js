import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity, TextInput, AsyncStorage} from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'
const {width, height} = Dimensions.get('window')

export default class SignUpScreen extends Component{

    static navigationOptions = {
        header : null
    };
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            retypePass:''

        }
    }
    signUp(){
        const {email, password } = this.state
        var myArr = []
        let user = { email: email, password: password}
        myArr.push(user)
console.log(user)
        console.log(myArr,'kkkkkkkkkkkkkkkkkkk')
        try{
            AsyncStorage.setItem("myKey", "My value here")
        }catch (error){
            alert(error)
        }

        console.log(email)
        console.log(password)
    }
    render(){
        let data = [{
            value: 'Banana',
        }, {
            value: 'Mango',
        }, {
            value: 'Pear',
        }];
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
                <View style={{width:width, height: height* 0.6, alignItems:'center'}}>
                    <View>
                        <TextInput
                            underlineColorAndroid = 'transparent'
                            placeholder= 'First Name'
                            style={{width: width* 0.7, height: height*0.07, borderWidth:1, borderColor:'grey', borderRadius:7}}
                            onChangeText = {(text)=> this.setState({firstName: text})}
                        />
                    </View>
                    <View>
                        <TextInput
                            underlineColorAndroid = 'transparent'
                            placeholder= 'last Name'
                            style={{width: width* 0.7, height: height*0.07, borderWidth:1, borderColor:'grey', borderRadius:7, marginTop:10}}
                            onChangeText = {(text)=> this.setState({lastName: text})}
                        />
                    </View>
                    <View>
                        <TextInput
                            underlineColorAndroid = 'transparent'
                            placeholder= 'Email'
                            style={{width: width* 0.7, height: height*0.07, borderWidth:1, borderColor:'grey', borderRadius:7, marginTop:10}}
                            onChangeText = {(text)=> this.setState({email: text})}
                        />
                    </View>
                    <View>
                        <TextInput
                            underlineColorAndroid = 'transparent'
                            placeholder= 'Password'
                            style={{width: width* 0.7, height: height*0.07, borderWidth:1, borderColor:'grey', borderRadius:7, marginTop:10}}
                            onChangeText = {(text)=> this.setState({password: text})}
                        />
                    </View>
                    <View>
                        <TextInput
                            underlineColorAndroid = 'transparent'
                            placeholder= 'Re-type Password'
                            style={{width: width* 0.7, height: height*0.07, borderWidth:1, borderColor:'grey', borderRadius:7, marginTop:10}}
                            onChangeText = {(text)=> this.setState({retypePass: text})}
                        />
                    </View>
                    <View>
                        <Dropdown
                            label='Favorite Fruit'
                            containerStyle= {{width: width* 0.7, height: height*0.07, borderWidth:1, borderColor:'grey', borderRadius:7, marginTop:10, justifyContent:'center'}}
                            data={data}
                        />
                    </View>
                    <View>
                        <DatePicker
                            style={{width: width* 0.7, height: height*0.07, borderWidth:1, borderColor:'grey', borderRadius:7, marginTop:10}}
                            date={this.state.date}
                            showIcon= {false}
                            mode="date"
                            placeholder="select date"
                            format="MM-DD-YYYY"
                            minDate="2016-05-01"
                            maxDate="2020-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                              dateInput: {
                                borderWidth: 0
                              }
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=> this.signUp()} style={{width: width* 0.7, height: height*0.07,borderRadius:7, marginTop:30, backgroundColor:'red', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:18, color:'white'}}>SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}