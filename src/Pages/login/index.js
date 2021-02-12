import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import TextCenter from '../../components/TextCenter'
import Button from '../../components/Button'



const Login =(props) => {
    return (
        <View style={{flex: 1}}>
            <Button navigation={props.navigation} />
            <TextCenter text="Login" />
        
        </View>
    )
}

export default Login