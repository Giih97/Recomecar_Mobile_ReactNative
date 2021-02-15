import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated';


const Button = (props) => {
    return (
        <View style={{ alignItems: 'flex-start', padding: 20, width: "100%", backgroundColor: '#952790' }}>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.openDrawer();
                    setTimeout(() => {
                        props.navigation.closeDrawer();
                    }, 4000);
                }}
            >
                <Text style={{ fontSize: 40, color: "#ffe76d" }}>Menu</Text>
            </TouchableOpacity>


        </View>
    )
}

export default Button;
