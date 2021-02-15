import React from "react";
import { View, Text, ScrollView, StyleSheet,TouchableOpacity,Linking, Image} from "react-native";
import {StatusBar} from 'expo-status-bar'
import TextCenter from "../../components/TextCenter";
import Button from "../../components/Button";
import Footer from '../../components/Footer'

const Gestante = (props) => {
  return (
    <View>
      <Button navigation={props.navigation} />
      <StatusBar hidden />
      <View style={styles.container}>
        
        <Image style={styles.imagem} source={require("./images/gestante.jpg")}></Image>
        <Text style={styles.textTitulo}> <h2>Informações a Gestante/Mãe </h2>
         <p>Aqui, você vai encontrar orientações para realização da entrega voluntária da criança para adoção.</p> </Text>
        <ScrollView>
          <Text style={styles.textTitulo2}> Onde Buscar Atendimento
         </Text>
          <Text style={styles.textTexts}>
              <ul>
           <li>Procurar um profissional nas rede de atendimento , nas áreas da
            assistência social, saúde, Conselho Tutelar, Ministério Público,
            Defensoria Pública, Poder Judiciário e demais instituições, conforme
            o que for mais próximo.</li>
            </ul>
          </Text>
          <Text style={styles.textTitulo2}> Como é feito o Atendimento</Text>
          <Text style={styles.textTexts}>
              <ul>
          <li> O atendimento é feito na Vara da Infância e Juventude, a gestante ou
            mãe do bebê ou criança será atendida por psicólogos e assistentes
            sociais, que analisarão com cautela a situação. Esse atendimento
            será pautado em um processo reflexivo para que a gestante possa
            construir uma decisão segura, seja para ficar com o filho ou
            realizar a entrega.</li>
            </ul>
          </Text>
          <Text style={styles.textTitulo2}> Direitos da Gestante/Mãe</Text>
          <Text style={styles.textTexts}>
             <ul>
            <li>A gestante ou mãe de recém-nascido, encontra-se o direito ao sigilo
            sobre a entrega (ECA, art. 19-A, § 5º), sobre o nascimento (ECA-
            art. 19-A, § 9º) e sobre as informações prestadas pela genitora e
            pai ou suposto pai a respeito da entrega do filho em adoção (ECA,
            art. 166, § 3º).</li>{"\n"}
            <li>Ao planejamento familiar, com amplo acesso à rede
            pública de saúde e assistência social;</li>{"\n"}
            <li> De receber atendimento humanizado e sem preconceitos ou julgamentos, inclusive e
            especialmente quando manifesta dúvidas ou já tem a decisão formada
            sobre a vontade de não exercer a maternidade;</li> {"\n"}
            <li>De ser prontamente encaminhada à vara da infância e juventude, tão logo manifeste o
            desejo de entrega voluntária do filho em adoção;</li> {"\n"}
            <li>De ser ouvida e receber todas as informações necessárias para que sua decisão sobre
            a entrega do filho seja madura e fruto de ampla reflexão (durante ou
            após o parto);</li> {"\n"}
            <li>De recusar atendimento pela rede pública de saúde e
            assistência social;</li>{"\n"}
            <li> De indicar ou se recusar a indicar o genitor da criança; De indicar ou se recusar a indicar pessoa da família
            extensa que tenha interesse e condições de, sob guarda judicial,
            receber o filho e criá-lo;</li>{"\n"}
            <li> De desistir (até antes da audiência realizada após o nascimento do filho) e até mesmo retratar-se (em
            até 10 dias após a audiência já referida) a respeito da decisão
            inicial de entregar o filho em adoção.</li>
            </ul>
          </Text>
          <TouchableOpacity  onPress={()=> Linking.openURL("https://projeto-squad05.vercel.app/gestanteMae")}  >
           <Text style={styles.saibaMais}> Saiba Mais Clicando Aqui </Text> </TouchableOpacity>
        </ScrollView>
      </View>
     <Footer/>
    </View>
  );
};

export default Gestante;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    marginTop: 6,
    width: 400,
    height: 200,
  },
  textTitulo: {
    fontSize:18,
    color: "#fff",
    backgroundColor: "#1aa488",
    textAlign:"center",
  },
  textTitulo2: {
    fontSize: 25,
    color: "rgb(255, 231, 109)",
    backgroundColor: "#da7ad6",
    textAlign:"center",
  },
  textTexts:{
      margin:5,
      backgroundColor: "rgb(255, 231, 109)",
      color:"rgb(149, 39, 144)",
  },
  saibaMais:{
      fontSize:20,
      fontWeight:"bold",
      textAlign:"center",
      backgroundColor: "#1aa488",
      padding:30,

  }
});
