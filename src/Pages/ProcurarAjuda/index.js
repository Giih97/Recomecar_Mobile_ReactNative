import React from 'react'
import { View, StyleSheet, Image, Text, FlatList } from 'react-native'
import Button from '../../components/Button'
import { StatusBar } from 'expo-status-bar'
import Footer from '../../components/Footer'

import User from '../../components/User';

const dados = [
    {
    id: Math.random(),
    nome: "ABRAÇAR - COASSEJE",
    cidade: "Americana",
    telefone: "(19) 3461-4050",
  },
  {
    id: Math.random(),
    nome: "ABRACE",
    cidade: "Andradina",
    telefone: "(18) 99826-0510",
  },
  {
    id: Math.random(),
    nome: "ACOLHE",
    cidade: "Araras",
    telefone: "(19) 99729-5386",
  },
  {
    id: Math.random(),
    nome: "Consciência Solidária",
    cidade: "Atibaia",
    telefone: "(11) 99999-9377",
  },
  {
    id: Math.random(),
    nome: "Flor de Liz",
    cidade: "Bauru",
    telefone: "(14) 99719-8810",
  },
  {
    id: Math.random(),
    nome: "Conectando Vidas",
    cidade: "Bertioga",
    telefone: "(13) 99788-4502",
  },
  ]

const ProcurarAjuda = (props) => {
    return (
        <View style={styles.container}>
            <Button navigation={props.navigation} />
            <StatusBar style="auto" />
            <Image
                source={require('../../../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={{ color: "#ffe76d", fontSize: 20 }}><h2>Onde procurar ajuda</h2></Text>
            <View style={styles.containerUsers}>
                <FlatList
                    data={dados}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item }) => (
                        <User nome={item.nome} cidade={item.cidade} telefone={item.telefone} />
                    )}
                />
            </View>
            <Footer/>
        </View>
    )
}

export default ProcurarAjuda

const styles = StyleSheet.create({
    container: {
        flex: "initial",
        backgroundColor: '#da7ad6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 180,
        height: 180,
        borderRadius: 100,
    },
    containerUsers: {

    }

})