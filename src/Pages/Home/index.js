import React from 'react'
import TextCenter from '../../components/TextCenter'
import { StyleSheet, View, ImageBackground, Text } from 'react-native'
import Button from '../../components/Button'
import {StatusBar} from 'expo-status-bar'
import Footer from '../../components/Footer'

const Home = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Button navigation={props.navigation} />
            <View style={styles.container}>
                <StatusBar hidden />

                <ImageBackground style={styles.image} source={require('./images/a1.jpg')}>
                    <Text style={styles.titulo}>Título</Text>
                    <Text style={styles.texto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        labore et dolore magna aliqua. Ut enim ad minim veniam!
                    </Text>
                </ImageBackground>
                {/* <Image
                    style={styles.image}
                    source={require('./images/a2.jpg')}
                />
                <Image
                    style={styles.image}
                    source={require('./images/a3.jpg')}
                />
                <Image
                    style={styles.image}
                    source={require('./images/a4.jpg')}
                /> */}

                <Text style={styles.text1}>
                    <h2>É SOBRE SALVAR VIDAS E ENTREGAR RECOMEÇOS E ESPERANÇAS</h2>
                    <p>
                    Aspiramos que mesmo diante do desespero, nenhuma mulher decida
                    pelo abandono do recém-nascido, mas que procure os serviços
                    existentes e seja bem e prontamente atendida, num ambiente capaz
                    de lhe oferecer o acolhimento adequado, protegida de toda forma de
                    discriminação e preconceito.
                    </p>
                </Text>
                <Text style={styles.text2}>
                    <h2>ENTREGAR É DIFERENTE DE ABANDONAR</h2>
                    <li>
                    Entregar um bebê à Justiça (ao Fórum) para adoção é um direito garantido por lei. Entregar é diferente de abandonar. A entrega do bebê para a Justiça não é crime.
                    </li>
                    <li>
                    O Estatuto da Criança e do Adolescente também prevê a assistência psicológica necessária para o processo de decisão da mãe.
                    </li>
                    <li>
                    Procure um psicólogo ou assistente social (no Fórum) para mais informações. A mulher poderá decidir com mais segurança sobre a entrega do bebê para adoção e, durante o acompanhamento, terá a liberdade para mudar da ideia, caso desista da entrega.
                    </li>
                    <li>
                    Prometer ou entregar um bebê a terceiros mediante pagamento ou recompensa é crime, assim como registrar um bebê de outra pessoa como se fosse seu filho. Também é crime abandonar o bebê em locais públicos.
                    </li>
                    <li>
                    Se o bebê é entregue de forma ilegal, corre o risco de ser oferecido a uma família despreparada e não receber proteção, afeto e cuidados para se desenvolver. Além disso, o bebê pode ser retirado desta família pela Justiça e encaminhado para uma instituição de acolhimento (abrigo), onde aguardará para ser adotado de forma legal.                        
                    </li>
                    <li>
                    Quando uma mulher entrega o bebê de forma legalizada, ele será entregue para uma família que foi avaliada e habilitada pela Vara da Infância e Juventude para dedicar cuidados adequados a uma criança. A entrega legal torna este processo mais rápido.    
                    </li>
                    <li>
                    Profissionais da saúde, da assistência social, representantes religiosos e líderes comunitários devem fazer a imediata comunicação ao judiciário ao ter conhecimento de casos de mãe ou gestante interessada em entregar o bebê para adoção. A Lei nº 12.010 de 2009, art. 258-B prevê penalizações e pagamento de multas caso a lei não seja cumprida.
                    </li>
                </Text>
                <Text style={styles.text3}>
                    <h2>É CRIME</h2>
                    <li>
                    Praticar aborto clandestino e, portanto, ilegal, correndo sérios riscos de vida e, inclusive, de responder a processo criminal;
                    </li>
                    <li>
                    Abandone o filho recém-nascido, podendo causar a morte da criança, sonegando-lhe, assim, o direito à vida, hipótese em que também responderá criminalmente;
                    </li>
                    <li>
                    Entregue (de forma gratuita ou negociada) o filho recém-nascido a pessoas estranhas, sem laços de parentesco, geralmente despreparadas, sem projeto de adoção e que, por vezes, escondem da criança a própria história. Esse procedimento também pode configurar crime;
                    </li>
                    <li>
                    Contribua para que o sistema legal de adoção seja totalmente desrespeitado, burlando-se a ordem cronológica do Sistema Nacional de Adoção e culminando com as denominadas “adoções à brasileira”, “adoção direta”, “adoção intuito personae” ou “adoção dirigida”.                        
                    </li>
                </Text>
            <Footer />
            </View>
        </View>

    )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#da7ad6',
      alignItems: 'center',
    },
    image:{
        width: '100vw',
        height: '30vh',
    },
    titulo: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    texto: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        color: '#fff'
    },
    text1: {
        backgroundColor: '#029b7c',
        color: '#fff',
        paddingHorizontal: 50,
        paddingVertical: 20,
        fontSize: 12,
    },
    text2: {
        backgroundColor: '#f7f7f7',
        color: '#da7ad6',
        paddingHorizontal: 50,
        paddingVertical: 20,
        fontSize: 12,
    },
    text3: {
        backgroundColor: '#df4759',
        color: '#fff',
        paddingHorizontal: 50,
        paddingVertical: 20,
        fontSize: 12,
    }
})