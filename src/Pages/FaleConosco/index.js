import React from 'react'
import TextCenter from '../../components/TextCenter'
import Button from '../../components/Button'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import Footer from '../../components/Footer'

const styles = StyleSheet.create({
    container: {
        flex: "initial",
        backgroundColor: '#da7ad6',
        alignItems: 'center',
        justifyContent: 'center',

    },

    input: {
        marginTop: 10,
        padding: 10,
        width: 350,
        backgroundColor: '#ffe76d',
        fontSize: 15,
        borderRadius: 5
    },

    btncadastro: {
        width: 100,
        height: 50,
        backgroundColor: '#ffe76d',
        borderRadius: 8,
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },

    logo: {
        width: 180,
        height: 180,
        borderRadius: 100,
    },


});

const FaleConosco = (props) => {
  
    return (
        

        <View style={styles.container}>
            <Button navigation={props.navigation} />

            <StatusBar style="auto" />

            <Image source={require('../../../assets/logo.png')}
                style={styles.logo}
            ></Image>
            <Text style={{ color: "#ffe76d", fontSize: 20 }}><h2>Fale Conosco</h2>
            </Text>
            <TextInput style={styles.input}

                placeholder="Digite seu nome" />

            <TextInput style={styles.input}
                placeholder="Digite seu e-mail:" />


            <TextInput style={styles.input}
                placeholder="mensagem" />

            <TouchableOpacity style={styles.btncadastro} >
                <Text> Enviar </Text> </TouchableOpacity>
                <View>
                    <Footer/>
                </View>
        </View>
        
    )
};

export default FaleConosco


