import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Alert} from 'react-native'
import Button from '../../components/Button'
import {StatusBar} from 'expo-status-bar'




const Login =(props) => {
    return (
        <View style={{flex: 1}}>
            <Button navigation={props.navigation} />
            <View style={styles.container}>
      <StatusBar hidden />


      <Image source={require('../../../assets/logo.png')}
      style={styles.logo}
       />

<Text style={{ color: "#ffe76d", fontSize: 20 }}><h2>Login</h2></Text>

      <TextInput style={styles.input}
      placeholder="Digite seu e-mail" onChangeText={text=>setEmail(text)}/>

<TextInput style={styles.input}
      placeholder="Digite sua senha" onChangeText={text=>setSenha(text)} secureTextEntry={true} />
          
          <TouchableOpacity style={styles.btncadastro} onPress={()=>cadastro()}>
           <Text> Entrar </Text> </TouchableOpacity>
           <TouchableOpacity style={styles.btncadastro} onPress={()=>cadastro()}>
           <Text> Esqueci a senha </Text> </TouchableOpacity>

    </View>
      
        
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#da7ad6',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    logo:{
      width: 180,
      height: 180,
      borderRadius: 100,
      marginBottom: 10,
      shadowOffset:{  width: 100,  height: 100 },
      
    },
  
    input:{
      marginTop: 10,
      padding: 10,
      width: "90%",
      height: 40,
      backgroundColor:'#ffe76d',
      fontSize: 15,
      borderRadius: 8,
      marginBottom: 10
    },
  
    btncadastro:{
      width:100,
      height:50,
      backgroundColor:'#ffe76d',
      borderRadius: 8,
      justifyContent: 'center',
      textAlign:'center',
      marginTop: 10,
      marginBottom: 10 
    }
  });
  