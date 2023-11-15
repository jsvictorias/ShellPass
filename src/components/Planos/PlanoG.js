import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { House, ArrowsCounterClockwise } from "phosphor-react-native";

export default function PlanoG() {
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
                    <Text style={styles.text}> Parabéns 🎊 por cuidar tão bem do seu carro, ele está em boas condições. Mas é sempre importante se atentar a alguns pontos, por exemplo:  👇 </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Troca regular dos pneus:</Text> É fundamental verificar regularmente a condição dos pneus e substituí-los quando estiverem desgastados🚘. Recomenda-se seguir as orientações do fabricante do veículo e medir a profundidade do sulco dos pneus para determinar quando é a hora certa de efetuar a troca. Além disso, mantenha os pneus devidamente calibrados e alinhados para garantir um desempenho ideal. 🚚 </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Manutenção do filtro de ar:</Text> é aconselhável verificar o filtro de ar a cada 12.000 a 24.000 quilômetros ou conforme as recomendações do manual do proprietário. No entanto, se você dirige em condições de estrada empoeirada ou poluída, pode ser necessário trocar o filtro de ar com mais frequência. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Monitoramento do líquido de transmissão:</Text> É essencial para garantir o desempenho, a eficiência e a confiabilidade do seu veículo. </Text>
                    <Text style={styles.text}> 📍 <Text style={{color: '#70126A', fontWeight: 'bold'}}>Manutenção do filtro de óleo:</Text> O intervalo recomendado para a troca do filtro de óleo pode variar dependendo do fabricante e do tipo de óleo usado, mas geralmente, a cada troca de óleo, o filtro deve ser substituído. Certifique-se de seguir as recomendações do fabricante do veículo e de manter um registro das trocas de óleo e do filtro para garantir a manutenção adequada do seu veículo. </Text>
                    <Text style={styles.text}> Não estacione em <Text style={{color: '#70126A', fontWeight: 'bold'}}> freios </Text> terrenos inclinados com a marcha engatada<Text style={{color: '#70126A', fontWeight: 'bold'}}> pois pode sobrecarregar a embreagem. </Text></Text>
                    <Text style={styles.text}> Mantenha os <Text style={{color: '#70126A', fontWeight: 'bold'}}> freios </Text> em bons estados, substitua as<Text style={{color: '#70126A', fontWeight: 'bold'}}> pastilhas e discos </Text> conforme necessário e faça verificações regulares.</Text>
                    <Text style={styles.text}> Evite acelerar o <Text style={{color: '#70126A', fontWeight: 'bold'}}> motor </Text> a frio, deixe-o atingir<Text style={{color: '#70126A', fontWeight: 'bold'}}> uma temperatura de funcionamento </Text> antes de exigir muito dele.</Text>
                    <Image
                        source={require('../../../assets/perolaW.png')}
                        style={styles.image2}
                        resizeMode="contain"
                    />
                    <View style={styles.bloco}>
                        <Text style={styles.textConselho}> <Text style={{ color: '#70126A', fontWeight: 'bold' }}> Conselho da Pérola: </Text> "Um carro bem mantido oferece uma condução suave, economia de combustível e um desempenho confiável."</Text>
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
