import React, {useRef, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal, SafeAreaView, Animated, Easing} from "react-native";
import { ArrowCircleLeft,AppleLogo, AndroidLogo  } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";


export default function Config() {
    return(
        <ScrollView> 
            <View style={Bloco1.estilo}>
                <BotaoVolta1 />
            </View>
            
              <Text adjustsFontSizeToFit style={{fontSize: 38, color: 'black', textAlign: 'center'}}> 
              Configuração do OBD2:</Text>

              <Text style={styles.text}>   Agora que você já sabe o que é o OBD2, vamos configurar o seu. 😄 </Text>

              <Text style={styles.text}>   Primeiramente é importante saber qual você deve comprar: 👀 </Text>

              <Text style={styles.text}>   A indicação da Pérola, depende de qual sistema operacional é o seu celular🤳, para assim você conseguir fazer a conexão corretamente.</Text>
          
             <Image source={require('../../assets/perolaW.png')}
             style={styles.image}
             resizeMode="contain"/>

            
                <View style={styles.buttonContainer}>
                    <BotaoAndroid />
                    <BotaoApple />

                </View>
            
            <Text style={styles.text}> Com o OBD em mãos, a próxima etapa é achar a entrada do OBD no seu carro 🔎!!  </Text>
            
            <Text style={styles.text}> Verifique próximo a caixa de fusíveis, que é onde geralmente está. Caso não encontre, consulte o manual do seu carro ou pesquise na internet "Entrada OBD para (modelo do seu carro)" .</Text>
            <Text style={styles.text}> Após isso, desligue o carro e plugue o OBD na entrada. Ele deverá acender uma "luzinha" vermelha 🏮 no OBD, isso significa que o sensor está conectado corretamente.   </Text>
            <Text style={styles.text}> Com o sensor conectado no carro, pegue seu aparelho Android, entre nas configurações e em seguida na opção "Bluetooth".    </Text>
            <Text style={styles.text}> O nome do aparelho OBDII deverá aparecer no seu dispositivo, e caso seja a primeira vez que você está conectando, ele pedirá uma senha. A senha é, por padrão, 0000 ou 1234.  </Text>
            <Text style={styles.text}> 🚨🚨 Se nenhuma dessas senhas funcionou, entre em contato com o fornecedor do sensor para mais informações. </Text>
            <Text style={styles.text}> Para poder ler os dados, é necessário instalar um aplicativo em seu dispositivo. A Pérola te recomenda o <Text style={{fontWeight: 'bold', color: '#70126A'}}>Car Scanner ELM OBD2</Text> . </Text>
            <Text style={styles.text}> Siga as orientações do aplicativo para configurá-lo corretamente. É possível que ele pergunte qual a marca do seu carro, responda corretamente.😁 </Text>
            <Text style={styles.text}> Para conectar o aplicativo com o carro, é importante ligar a parte elétrica do carro. O painel tem que está ligado, para isso, dê meia-volta com a chave do carro. Após isso, só fazer a conexão.</Text>  
            <Text style={styles.text}> Agora é só seguir as informações do aplicativo, e entender mais sobre a saúde do seu carro 😊. </Text>
            <Text style={styles.text}> Caso você esteja usando IOS, a conexão é parecida: </Text>
            <Text style={styles.text}> 📍- Busque a entra do OBD em seu carro; </Text>
            <Text style={styles.text}> 📍- Nos ajustes do seu dispositivo IOS, clique na opção Wi-Fi, ali irá aparecer a opção de conexão com o OBD; </Text>
            <Text style={styles.text}> 📍- Após a conecão ser feita com sucesso, entre no aplicativo <Text style={{fontWeight: 'bold', color: '#70126A'}}>Car Scanner ELM OBD2</Text> ; </Text>
            <Text style={styles.text}> 📍 - Pronto, agora é só seguir as informações do aplicativo e ler as informações do seu carro 😊.</Text>  
            <View style={Bloco2.estilo}></View>
              </ScrollView>

  
    );
};

const Bloco1 = StyleSheet.create({
    container: {
        flex: 1
    },
    estilo: {
        height: '5%',
        backgroundColor: '#FFD700',
        
    },
});
const Bloco2 = StyleSheet.create({
    container: {
        flex: 1
    },
    estilo: {
        height: '8%',
        backgroundColor: '#FFD700',
        marginTop: '05%',
    },
});
const BotaoAndroid = () => {
    const [visible, setVisible] = useState(false);
    const scale = useRef(new Animated.Value(0)).current
    function resizeBox(to){
        to === 1 && setVisible(true)
        Animated.timing(scale, {
            toValue: to,
            useNativeDriver: true,
            duration: 200,
            easing: Easing.linear
        }).start(() => to === 0 && setVisible(false))
    }
    return (
        <>
            <TouchableOpacity style={{ marginRight: '20%' }} onPress={() => resizeBox(1)}>
                <AndroidLogo size={52} />
                <Text style={{ textAlign: 'center', fontSize: 12 }}>Para Android</Text>
            </TouchableOpacity>
            <Modal transparent visible={visible}>
                <SafeAreaView style={{ flex: 1}} onTouchStart={() => setVisible(false)}>
                <Animated.View style={[styles.popup,
                    {
                        transform: [
                            {scale: scale}
                        ]
                    }
                    ]}>
                        <Text adjustsFontSizeToFit style={{
                            fontSize: 15
                        }}> Para configurar em dispositivo android, a Pérola recomenda o <Text style={{color: '#70126A', fontWeight: 'bold'}}> OBDII ELM327 Bluetooth: </Text> </Text>
                        <Image source={require('../../assets/obdAndroid.png')}
                        style={styles.imageobd}
                        resizeMode="contain"/>
                    </Animated.View>
                </SafeAreaView>
            </Modal>
        </>
    )
}

const BotaoApple = () => {
    const [visible, setVisible] = useState(false);
    const scale = useRef(new Animated.Value(0)).current
    function resizeBox(to){
        to === 1 && setVisible(true)
        Animated.timing(scale, {
            toValue: to,
            useNativeDriver: true,
            duration: 200,
            easing: Easing.linear
        }).start(() => to === 0 && setVisible(false))
    }
    return (
        <>
            <TouchableOpacity style={{ marginLeft: '20%' }} onPress={() => resizeBox(1)}>
                <AppleLogo size={52} />
                <Text style={{ textAlign: 'center', fontSize: 12 }}>Para IOS</Text>
            </TouchableOpacity>
            <Modal transparent visible={visible}>
                <SafeAreaView style={{ flex: 1}} onTouchStart={() => setVisible(false)}>
                    <Animated.View style={[styles.popupios,
                    {
                        transform: [
                            {scale: scale}
                        ]
                    }
                    ]}>
                        <Text adjustsFontSizeToFit style={{
                            fontSize: 15
                        }}> Para configurar em dispositivo IOS, a Pérola recomenda o <Text style={{color: '#70126A', fontWeight: 'bold'}}> OBDII ELM327 WIFI: </Text> </Text>
                        <Image source={require('../../assets/obdIOS.png')}
                        style={styles.imageobd}
                        resizeMode="contain"/>
                    </Animated.View>
                </SafeAreaView>
            </Modal>
        </>
    )
}



const BotaoVolta1  = () => {
    const navigation = useNavigation()
    return(
    <View>
        <TouchableOpacity style={{
            marginLeft: 20,
            marginTop: 40,
        }}
        onPress={() => {
            navigation.navigate('SobreOBD');
          }}>
            <ArrowCircleLeft size={32} />
        </TouchableOpacity>
    </View>
    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        margin: 10,
    },
    image: {
        width: 100,
        height: 100,
        aspectRatio: 1,
        alignSelf: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    button: {
        margin: 10,
        alignItems: 'center',
    },
    popup: {
        borderRadius: 8,
        borderColor: '#FFD700',
        borderWidth: 2,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        position: 'absolute',
        zIndex: 73,
        left: '20%',
        width: '40%',
        top: '35%'
        
    },
    imageobd: {
        width: 80,
        height: 80,
        aspectRatio: 1,
        alignSelf: 'center'
    },
    popupios: {
        borderRadius: 8,
        borderColor: '#FFD700',
        borderWidth: 2,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        position: 'absolute',
        zIndex: 73,
        right: '20%',
        width: '40%',
        top: '35%'
       
        
    },
})