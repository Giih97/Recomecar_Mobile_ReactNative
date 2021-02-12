import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

export const TextCenter = ({text}) => {
    return (
        <div>
            <View style={css.container}>
                <Text style={css.next}>
                    
                </Text>
            </View>
            
        </div>
    );
};


export default TextCenter;

const css = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItens:'center',
        backgroundColor: '#000',
        width: "500",
    },

    text:{
        fontSize: 50,
        color: '#fff',
    }
})