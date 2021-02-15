import React from 'react'
import { View, StyleSheet } from 'react-native'

const Footer = () => {
    return (
      <View style={styles.footer}>
          <p>&copy; Recomeçar 2021 - Todos os Direitos Reservados</p>
      </View>
    );
};
export default Footer;

const styles = StyleSheet.create({
    footer: {
        //backgroundColor: '#ffe76d',
        backgroundColor: '#952790',
        width: '100vw',
        color: '#d9e2ef',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 12,
    }
})