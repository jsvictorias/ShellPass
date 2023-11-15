import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { House, ArrowsCounterClockwise } from "phosphor-react-native";

export default function PlanoJ() {
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
                    <Text style={styles.text}> Seu carro tem alguns pontos em que se deve tomar cuidados!! Tente verificar com um especialista, e reveja alguns pontos: </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Sistema de Ignição: </Text> Verifique e substitua as velas de ignição, cabos de velas e bobinas de ignição conforme necessário para manter o motor funcionando suavemente..</Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Correia Dentada:</Text> Se o seu veículo possui correia dentada (em vez de corrente), siga as recomendações do fabricante para a substituição. Uma correia dentada rompida pode causar danos significativos ao motor. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Sistema de Arrefecimento:</Text> Mantenha o sistema de arrefecimento em boas condições. Verifique se não há vazamentos, substitua o líquido de arrefecimento conforme recomendado e certifique-se de que o sistema não esteja superaquecendo. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Suspensão e Amortecedores:</Text> Verifique a suspensão e os amortecedores para garantir uma condução suave e segura. Substitua componentes desgastados. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Direção e Alinhamento:</Text> Faça verificações regulares da direção e do alinhamento para garantir um manuseio adequado do veículo e para evitar desgaste irregular dos pneus. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Pneus:</Text>Mantenha a pressão dos pneus adequada e substitua os pneus desgastados por modelos novos. Pneus desgastados afetam a aderência e a segurança. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Inspeções Profissionais:</Text> Realize inspeções regulares do veículo por um mecânico qualificado, especialmente se o carro estiver com alta quilometragem. Um profissional pode identificar problemas ocultos e fornecer orientações específicas para a manutenção do seu veículo. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Sistema Elétrico:</Text> Verifique o funcionamento de todas as luzes, faróis, lanternas, setas e componentes elétricos do veículo. </Text>
                    <Text style={styles.text}> Além disso, siga o programa de manutenção especificado no manual do proprietário do seu veículo e leve-o a um mecânico qualificado para inspeções regulares. A manutenção regular e a atenção a esses pontos ajudarão a manter seu carro em boas condições, garantindo sua segurança, durabilidade e desempenho confiável. </Text>
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
