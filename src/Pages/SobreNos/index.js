import React from 'react'
import {StyleSheet, View, ImageBackground, Text} from 'react-native'
import Button from '../../components/Button'
import {StatusBar} from 'expo-status-bar'
import Footer from '../../components/Footer'

const SobreNos =(props) => {
    return (
        <View style={{flex: 1}}>
        <Button navigation={props.navigation} />
            <View style={styles.container}>
                <StatusBar hidden />

                <ImageBackground style={styles.image} source={require('./images/about.jpg')}>
                    <Text style={styles.titulo}>Sobre Nós</Text>
                </ImageBackground>
             

                <Text style={styles.text2}>
                    <h2>Quem Somos</h2>
                    <li>
                    Somos um grupo de estudante da Recode Pro, com formação em
                    desenvolvimento Full Stack, e temos como objetivo atender a um dos
                    objetivos de desenvolvimento sustentável da ONU, dentro do tema saúde
                    e bem-estar.
                    </li>
                    <li>
                    Para isso, optamos por disceminar sobre o direito a
                    entrega voluntária, direito este resguardado em lei federal nº
                    13.509/2017, chamada de “Lei da Adoção”, que trouxe alterações ao
                    Estatuto da Criança e do Adolescente - ECA e incluindo a chamada
                    “entrega voluntaria”.
                    </li>
                   
                </Text>
                <Text style={styles.text1}>
                    <h2>Justificativas</h2>
                    <li>Abandono de crianças recém-nascidas;</li>
                    <li>A existência de grande número de adoções irregulares;</li>
                    <li>Pais que não querem ou não têm condições de cuidar de seus filhos, ao
                        invés de entregarem os bebês ou as crianças na Vara da Infância e
                        Juventude, abandonam os filhos ou os entregam a terceiros (vizinhos,
                        padrinhos, colegas de trabalho etc), às vezes mediante pagamento ou
                        promessa de recompensa.
                    </li>
                </Text>
                <Text style={styles.text2}>
                    <h2>Objetivos</h2>
                    <li>Orientar técnicos que trabalham na Rede de Proteção (CREAS, CRAS,
                        Hospitais Públicos, Postos de Saúde, entidades de acolhimento, CAPS,
                        Conselhos Tutelares etc) sobre a legalidade da entrega voluntária para
                        adoção e como devem atuar diante de atendimento de casos em que os
                        pais manifestam o desejo de entregar o(a) filho(a) para adoção;
                    </li>
                    <li>
                        Informar aos pais que é possível e está prevista em lei a entrega
                        voluntária de filho para adoção na Vara da Infância e Juventude e
                        orientá-los acerca do procedimento a ser adotado, esclarecendo que não
                        constitui crime a entrega e não há nenhum tipo de responsabilização
                        dos pais;
                    </li>
                    <li>
                        Conscientizar as pessoas que têm interesse em adotar quanto ao
                        procedimento previsto em lei para a adoção e sobre a importância de
                        ser rigorosamente observada a legislação de regência da matéria.
                    </li>
                </Text>
                <Text style={styles.text1}>
                    <h2>Parceiros</h2>
                    <li>
                        Dr. antonio Carlos Berlini - Presidente da AGASESP - Associação dos
                         grupos de apoio à adoção do Estado de São Paulo
                    </li>
                    <li>Grupo de Apoio a Adoção de Mauá.</li>
                    <li>
                    Madrinha do Projeto Sônia Borges - Somos eternamente gratos por nos
                    apresentar este tema, e por saber transmitir com tanto carinho o
                    conhecimento de um assunto tão delicado.
                    </li>
                </Text>
            <Footer />
            </View>
        </View>
    )
}

export default SobreNos

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    image:{
        width: '100vw',
        height: '30vh',
    },
    titulo: {
        alignItems:'center',
        justifyContent:'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    texto: {
        alignItems:'center',
        justifyContent:'center',
        fontSize: 15,
        color: '#fff'
    },
    text1: {
        backgroundColor: '#029b7c',
        color: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15,
        fontSize: 12,
    },
    text2: {
        backgroundColor: '#f7f7f7',
        color: '#952790',
        paddingHorizontal: 15,
        paddingVertical: 15,
        fontSize: 12,
    }
    
})