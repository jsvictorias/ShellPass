import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { House, ArrowsCounterClockwise } from "phosphor-react-native";

export default function PlanoA() {
    return (
        <View style={styles.container}>
            <View style={styles.read}>
                <ScrollView>
                    <Image
                        source={require('../../../assets/perolaPC.png')}
                        style={styles.image1}
                        resizeMode="contain"
                    />
                    <Text style={styles.title}>Seu Plano:</Text>
                    <Text style={styles.text}> O seu carro aparenta estar em boas condições! 😃🎉</Text>
                    <Text style={styles.text}> Para mantê-lo desse jeito é importante prestar atenção nos sinais que o carro pode dar 👀</Text>
                    <Text style={styles.text}> Verifique as luzes do <Text style={{color: '#70126A', fontWeight: 'bold'}}>Painel de instrumentos</Text>, como luz do motor (check engine), caso alguma esteja acesa, vá para algum especialista para te ajudar a resolver.</Text>
                    <Text style={styles.text}> Além disso verifique também se o carro está fazendo <Text style={{color: '#70126A', fontWeight: 'bold'}}>barulhos </Text> ou <Text style={{color: '#70126A', fontWeight: 'bold'}}>vibrações</Text> estranhas. Por exemplo, vibrações excessivas no volante, nos pedais ou na carroceria, podem indicar problemas nos pneus, rodas, freios, suspensão ou em outros componentes do carro. 🚘 </Text>
                    <Text style={styles.text}> Outro sinal que o carro pode dar é o desempenho fraco. Você sente que o carro faz mais "esforço" 🦾 para ligar? ou uma sensação do carro "está amarrado"🪢?. Se sim, isso pode indicar problemas no motor, sistema de ignição, sistema de alimentação de combustível ou na transmissão. </Text>
                    <Text style={styles.text}> Verifique também se o carro está com <Text style={{color: '#70126A', fontWeight: 'bold'}}>vazamentos de fluídos, problemas de partida como problemas de ligar o motor ou o carro "morrendo" continuamente. </Text> Odores de gasolina, óleo queimado, ou outros cheiros estranhos podem indicar vazamentos. 😬 </Text>
                    <Text style={styles.text}> Caso você note qualquer um desses sinais em seu veículo, é aconselhável levar o carro para um mecânico qualificado e fazer uma avaliação e reparos adequados. <Text style={{fontSize: 30}}>🛠️ </Text></Text>


                    <Image
                        source={require('../../../assets/perolaW.png')}
                        style={styles.image2}
                        resizeMode="contain"
                    />
                    <View style={styles.bloco}>
                        <Text style={styles.textConselho}> <Text style={{ color: '#70126A', fontWeight: 'bold' }}> Conselho da Pérola: </Text> "Lembre-se de que a manutenção regular é mais conveniente do que ficar parado à beira da estrada esperando por um reboque."</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <BackHome />
                        <Refazer />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const BackHome  = () => {
    const navigation = useNavigation();
    return(
    <TouchableOpacity
        style={styles.button}
        onPress={() => {
            navigation.navigate('Home');
        }}>
        <House size={32} />
        <Text> Voltar</Text>
    </TouchableOpacity>
    );
};

const Refazer = () => {
    const navigation = useNavigation();
    return(
    <TouchableOpacity
        style={styles.button}
        onPress={() => {
            navigation.navigate('Manualmente');
        }}>
        <ArrowsCounterClockwise size={32} />
        <Text> Refazer</Text>
    </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#70126A',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    read: {
        width: '90%',
        height: '100%',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    image1: {
        width:150,
        height: 150,
        aspectRatio: 1,
        position: 'relative',
        top: 0,
        left: 0,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        left: 160,
        marginTop: '-10%',
    },
    text: {
        fontSize: 20,
        marginTop: 25, 
        alignSelf: 'center',
    },
    image2: {
        width: 300,
        height: 300,
        aspectRatio: 1,
        alignSelf: 'center'
    },
    bloco: {
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
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
    textConselho : {
        fontSize: 20,
        textAlign: 'center',
    }
});
