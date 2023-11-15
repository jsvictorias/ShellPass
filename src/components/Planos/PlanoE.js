import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { House, ArrowsCounterClockwise } from "phosphor-react-native";

export default function PlanoE() {
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
                    <Text style={styles.text}>  Parabéns por cuidar tão bem do seu carro! 💘 Ele está em boas condições, porém, é sempre bom verificar algumas coisas, como por exemplo 👇 :</Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Troca de pneus:</Text> É necessária pela sua segurança, e também para prevenir futuros danos no carro. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Troca regular do filtro de ar:</Text> É uma medida simples e econômica que pode melhorar o desempenho de veículo, economizar combustível, prolongar a vida útil do motor e contribuir para um ambiente mais limpo. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Troca do filtro de óleo:</Text> É uma parte crucial da manutenção do veículo que ajuda a proteger o motor, garantir o desempenho e economizar dinheiro a longo prazo. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Troca do filtro de combustível:</Text> Melhora a eficiência do veículo, economiza combustível e garante a confiabilidade a longo prazo. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Troca regular dos cabos de ignição e das velas:</Text> É importante para manter o desempenho do motor do carro, melhorar a eficiência do combustível, reduzir as emissões prejudiciais e evitar problemas de funcionamento. </Text>
                    <Text style={styles.text}> É importante sempre prestar atenção nos <Text style={{color: '#70126A', fontWeight: 'bold'}}> sinais </Text> Verifique se o carro tem vazamentos, barulhos estranhos como <Text style={{color: '#70126A', fontWeight: 'bold'}}>chiados, batidas, rangidos ou vibrações excessivos</Text> no volante, pedais ou carroceria. Esses sinais podem indicar problemas graves🚨🚨🚨.</Text>
                    <Image
                        source={require('../../../assets/perolaW.png')}
                        style={styles.image2}
                        resizeMode="contain"
                    />
                    <View style={styles.bloco}>
                        <Text style={styles.textConselho}> <Text style={{ color: '#70126A', fontWeight: 'bold' }}> Conselho da Pérola: </Text> "Sua segurança e de sua família estão em jogo. Faça a manutenção regular para evitar falhas inesperadas e acidentes."</Text>
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
