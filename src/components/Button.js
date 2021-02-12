import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
    return (
        <View style={{alignItems: 'flex-start', padding: 20}}>
            <TouchableOpacity
            onPress={() => {
                props.navigation.openDrawer();
                setTimeout(()=>{
                    props.navigation.closeDrawer();
                }, 4000);
            }}
            >
                <Text style={{ fontSize:40}}>Menu</Text>
            </TouchableOpacity>

        
        </View>
    )
}

export default Button;
