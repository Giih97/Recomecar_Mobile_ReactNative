import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import TextCenter from '../../components/TextCenter'
import Button from '../../components/Button'



const Profissional =(props) => {
    return (
        <View style={{flex: 1}}>
            <Button navigation={props.navigation} />
            <TextCenter text="Profissional" />
        
        </View>
    )
}

export default Profissional