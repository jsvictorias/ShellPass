import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { House, ArrowsCounterClockwise } from "phosphor-react-native";

export default function PlanoD() {
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
                    <Text style={styles.text}>  Seu carro está em um ótimo estado 🥳! Parabéns !! Para mantê-lo nesse nível, é importante prestar atenção a certos pontos🏆, como:</Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Troca de pneus:</Text> É necessária pela sua segurança, e também para prevenir futuros danos no carro. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Troca regular do filtro de ar:</Text> É uma medida simples e econômica que pode melhorar o desempenho de veículo, economizar combustível, prolongar a vida útil do motor e contribuir para um ambiente mais limpo. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Manutenção fo fluido da direção hidráulica:</Text> É fundamental, pois ela é responsável pelo desempenho da direção, prevenção de danos a bombas e a sua segurança. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Monitoramento do líquido de transmissão:</Text> É essencial para garantir o desempenho, a eficiência e a confiabilidade do seu veículo. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Manutenção das Mangeuiras e Correias:</Text> As Mangeuiras são importantes para o transporte de fluidos, resistência a pressão e temperatura, já as correias são importantes para a transmissão de energia e manutenção do motor. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Troca regular dos cabos de ignição e das velas:</Text> É importante para manter o desempenho do motor do carro, melhorar a eficiência do combustível, reduzir as emissões prejudiciais e evitar problemas de funcionamento de. </Text>
                    <Text style={styles.text}> É importante seguir as <Text style={{color: '#70126A', fontWeight: 'bold'}}> recomendações dos fabricantes </Text> e manter o sistema de freio em boas condições para garantir a segurança pessoal e de outros motoristas.</Text>
                    <Image
                        source={require('../../../assets/perolaW.png')}
                        style={styles.image2}
                        resizeMode="contain"
                    />
                    <View style={styles.bloco}>
                        <Text style={styles.textConselho}> <Text style={{ color: '#70126A', fontWeight: 'bold' }}> Conselho da Pérola: </Text> "Cuide bem do seu carro como ele cuida de você, e você desfrutará de uma relação de confiança por muitos anos."</Text>
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
