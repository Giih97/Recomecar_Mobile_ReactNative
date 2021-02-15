import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

export const TextCenter = ({text}) => {
    return (
        <div>
            <View style={css.container}>
                <Text style={css.text}>
                    {text}
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
        backgroundColor: 'rgb(218, 122, 214)',
        width: "100",
    },

    text:{
        fontSize: 30,
        color: '#fff',
    }
})