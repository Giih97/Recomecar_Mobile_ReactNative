import React from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import TextCenter from '../../components/TextCenter'
import Button from '../../components/Button'




const Gestante =(props) => {
    return (
        <View style={styles.container}>
            
            <Button navigation={props.navigation} />
            <TextCenter text="Informações a Gestante/Mãe" />
            <Image style= {styles.imagem} source={require('../../../assets/fluxogramaGestante.png')}/>
        
        </View>
    )
}

export default Gestante

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#da7ad6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagem:{
        width: 150,
        height: 200,
      }
    })