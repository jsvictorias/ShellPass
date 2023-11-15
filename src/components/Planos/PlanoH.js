import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { House, ArrowsCounterClockwise } from "phosphor-react-native";

export default function PlanoH() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.read}>
                <ScrollView>
                    <Image
                        source={require('../../../assets/perolaPC.png')}
                        style={styles.image1}
                        resizeMode="contain"
                    />
                    <Text style={styles.title}>Seu Plano:</Text>
                    <Text style={styles.text}> Seu carro tem sorte de ter um dono(a) como você!! 🎉 🎈✨ Parabéns, a pérola está orgulhosa de você!! É sempre bom ficar atento a alguns pontos como: </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Troca regular dos cabos de ignição e das velas </Text> É importante para manter o desempenho do motor do carro 🚚, melhorar a eficiência do combustível, reduzir as emissões prejudiciais e evitar problemas de funcionamento do veículo.</Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Luzes do Painel de Instrumentos: </Text> Luzes de advertência no painel de instrumentos, como a luz do motor (check engine), luz dos freios, luz da bateria, entre outras, podem acender e indicar problemas específicos no veículo.</Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Barulhos Anormais:</Text> Ruídos estranhos, como batidas, rangidos, chiados, ou qualquer som não habitual, podem ser indicativos de problemas mecânicos. Barulhos vindos do motor, sistema de escapamento, transmissão ou suspensão, por exemplo, devem ser investigados. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Vibrações :</Text> Vibrações excessivas no volante, nas pedais ou na carroceria podem indicar problemas nos pneus, nas rodas, nos freios, na suspensão ou em outros sistemas. </Text>
                    <Text style={styles.text}> Não estacione em <Text style={{color: '#70126A', fontWeight: 'bold'}}> terrenos inclinados </Text> com a marcha engatada<Text style={{color: '#70126A', fontWeight: 'bold'}}> pois pode sobrecarregar a embreagem. </Text></Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Desempenho Fraco:</Text> Perda de potência, dificuldade em acelerar, ou uma sensação de que o carro está "amarrado" podem ser sinais de problemas no motor, no sistema de ignição, no sistema de alimentação de combustível ou na transmissão. </Text>
                    <Text style={styles.text}> Evite acelerar o <Text style={{color: '#70126A', fontWeight: 'bold'}}> motor </Text> a frio, deixe-o atingir<Text style={{color: '#70126A', fontWeight: 'bold'}}> uma temperatura de funcionamento </Text> antes de exigir muito dele.</Text>
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
        </SafeAreaView>
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
        width: 150,
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
    },
    image2: {
        width: 300,
        height: 300,
        aspectRatio: 1,
        alignSelf: 'center',

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
