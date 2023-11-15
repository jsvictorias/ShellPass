import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { House, ArrowsCounterClockwise } from "phosphor-react-native";

export default function PlanoF() {
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
                    <Text style={styles.text}>  Seu carro está em ótimas condições 🏆 ! Parabéns!! Para mantê-lo desse jeito, é importante se atentar a alguns pontos, por exemplo:  🚙 </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Manutenção do líquido de arrefecimento:</Text> É uma forma simples de evitar problemas sérios no motor e garantir que o veículo funcione de maneira confiável e eficiente. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Manutenção do fluido da direção hidráulica:</Text> É importante pois ela é responsável pelo desempenho da direção, prevenção de danos a bombas e a sua segurança. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Monitoramento do líquido de transmissão:</Text> É essencial para garantir o desempenho, a eficiência e a confiabilidade do seu veículo. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Monitoramento das Mangueiras e Correias:</Text> As mangueiras são importantes para o transporte de fluidos, resistência a pressão e temperatura, já as correias são importantes para a transmissão de energia e manutenção do motor. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Troca dos cabos de ignição e velas:</Text> Esses são pontos importantes no carro, pois mantém o desempenho do motor do carro, melhora a eficiência do combustível, reduz as emissões prejudiciais e evita problemas de funcionamento do veículo. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Atenção as Luzes:</Text> A troca regular de luzes do carro é importante por várias razões relacionadas à segurança, visibilidade e conformidade com as regulamentações do trânsito. </Text>
                    <Text style={styles.text}> Lembre-se de sempre se atentar a <Text style={{color: '#70126A', fontWeight: 'bold'}}> vazamentos, cheiros incomuns e barulhos diferentes </Text> Sempre são <Text style={{color: '#70126A', fontWeight: 'bold'}}> sinais </Text> de que o carro está com problemas.</Text>
                    <Image
                        source={require('../../../assets/perolaW.png')}
                        style={styles.image2}
                        resizeMode="contain"
                    />
                    <View style={styles.bloco}>
                        <Text style={styles.textConselho}> <Text style={{ color: '#70126A', fontWeight: 'bold' }}> Conselho da Pérola: </Text> "Manter o carro em perfeitas condições é um investimento na sua segurança e na durabilidade do veículo."</Text>
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
