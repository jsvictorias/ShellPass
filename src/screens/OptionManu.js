import { View, Text, TouchableOpacity, Image} from "react-native";
import Styles from "../styles/Styles";
import { useNavigation } from "@react-navigation/native";
import { ArrowCircleLeft, ChatCircle, ArrowRight, ArrowLeft, HandPalm, Cpu} from "phosphor-react-native";
import { useState } from "react";

export default function OptionManu() {
    return(
        <View>
            <View style={Styles.Corpo}>
                <BotaoVolta1 />
                <Fala />
            </View>
            <View>
                <Image source={require('../../assets/perolaPC2.png')}
                style={{height: '40%', width: '58%', marginTop: '-10%', left: '-4%'}}
                resizeMode="contain">
                </Image>
                <FalasOpcoes />
                <Manual />
                <Sensor />
            </View>
        </View>
    );
};
const BotaoVolta1  = () => {
    const navigation = useNavigation();
    return(
    <View>
        <TouchableOpacity style={{
            marginLeft: 20,
            marginTop: '15%',
        }}
        onPress={() => {
            navigation.navigate('Manutencao');
          }}>
            <ArrowCircleLeft size={32} />
        </TouchableOpacity>
    </View>
    );
};

const Fala = () => {
    return(
        <View style={{left: '34%', marginTop: '-15%'}}>
            <ChatCircle size={350} />
        </View>
    );
};
const FalasOpcoes = () => {
    const [mostrarFala1, setMostrarFala1] = useState(true); // Inicialmente exibe a Fala1
    const [mostrarFala2, setMostrarFala2] = useState(false);
    const [mostrarFala3, setMostrarFala3] = useState(false);
    const [mostrarFala4, setMostrarFala4] = useState(false);

    const exibirFala1 = () => {
        setMostrarFala1(true);
        setMostrarFala2(false);
        setMostrarFala3(false);
        setMostrarFala4(false); // Certifique-se de ocultar a Fala2 e Fala3 se elas estiverem visíveis
    };

    const exibirFala2 = () => {
        setMostrarFala2(true);
        setMostrarFala1(false);
        setMostrarFala3(false); // Certifique-se de ocultar a Fala1 e Fala3 se elas estiverem visíveis
        setMostrarFala4(false);
    };

    const exibirFala3 = () => {
        setMostrarFala3(true);
        setMostrarFala2(false);
        setMostrarFala1(false); // Certifique-se de ocultar a Fala1 e Fala2 se elas estiverem visíveis
        setMostrarFala4(false);
    };
    const exibirFala4 = () => {
        setMostrarFala4(true);
        setMostrarFala2(false);
        setMostrarFala1(false); // Certifique-se de ocultar a Fala1 e Fala2 se elas estiverem visíveis
        setMostrarFala3(false);
    };


    return (
        <View style={{ flexDirection: 'row' }}>
            <View>
                {mostrarFala1 ? (
                    <Fala1
                        onNext={exibirFala2}
                    />
                ) : mostrarFala2 ? (
                    <Fala2
                        onBack={exibirFala1}
                        onNext={exibirFala3}
                    />
                ) : mostrarFala3 ? (
                    <Fala3
                        onBack={exibirFala2}
                        onNext={exibirFala4}
                    />
                ) : mostrarFala4 ? (
                    <Fala4
                        onBack={exibirFala3}
                    />
                ) : null}
            </View>
        </View>
    );
};
const Fala1 = ({ onNext, onBack }) => {
    return(
        <View> 
            <Text style={{marginTop: '-78%', 
                left: '57%', 
                fontSize: 18, 
                fontWeight: 'bold',
                width: '25%'}}>Para prosseguir com o plano de manutenção do seu carro, Você
                tem duas opções: </Text>
                <TouchableOpacity onPress={onNext}>
                    <View style={{left: '76%'}}>
                        <ArrowRight
                            size={25}
                            color="black" />
                    </View>
                </TouchableOpacity>
        </View>
    );
};
const Fala2 = ({ onNext, onBack }) => {
    return(
        <View>
            <Text style={{marginTop: '-70%', 
                left: '48%', 
                fontSize: 18, 
                fontWeight: 'bold',
                width: '20%'}}> Você pode escolher entre a obtenção de dados do seu carro
                manualmente ou pelo sensor OBD2.</Text>
                <TouchableOpacity onPress={onNext}>
                    <View style={{left: '65%'}}>
                        <ArrowRight
                            size={25}
                            color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onBack}>
                    <View style={{left: '50%'}}>
                        <ArrowLeft
                            size={25}
                            color="black" />
                    </View>
                </TouchableOpacity>
        </View>
    );
};
const Fala3 = ({ onNext, onBack }) => {
    return(
        <View>
        <Text style={{marginTop: '-86%', 
            left: '62%', 
            fontSize: 18, 
            fontWeight: 'bold',
            width: '30%'}}>Caso queira saber mais sobre o OBD2 clique na opção "Tudo sobre OBD2" </Text>
            <TouchableOpacity onPress={onNext}>
                <View style={{left: '87%'}}>
                    <ArrowRight
                        size={25}
                        color="black" />
                 </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onBack}>
                    <View style={{left: '70%'}}>
                        <ArrowLeft
                            size={25}
                            color="black" />
                    </View>
                </TouchableOpacity>
        </View>
    );
};
const Fala4 = ({  onBack }) => {
    return(
        <View>
        <Text style={{marginTop: '-92%', 
            left: '67%', 
            fontSize: 18, 
            fontWeight: 'bold',
            width: '30%'}}>Se preferir fazer manualmente, clique na opção "Fazer manualmente." </Text>
            <TouchableOpacity onPress={onBack}>
                <View style={{left:'74%'}}>
                    <ArrowLeft
                        size={25}
                        color="black" 
                        />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const Manual = () => {
    const navigation = useNavigation();
    return(
        <View style={Styles.Manual}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Manualmente')
          }}>
          <Text style={{top: '8%', left: '2%'}}>
                <HandPalm size={48} color="#70126A" />
                </Text>
                <Text style={{left: 65, top: '-55%', fontSize: 18, fontWeight: 'bold'}}>
                Fazer Manualmente
                </Text>
          </TouchableOpacity>
        </View>
    );
};
const Sensor = () => {
    const navigation = useNavigation();
    return(
        <View style={Styles.Sensor}>
               <TouchableOpacity onPress={() => {
                navigation.navigate('SobreOBD')
               }}>
               <Text style={{top: '8%', left: '2%'}}>
                <Cpu size={48} color="#70126A" />
                </Text>
                <Text style={{left: 65, top: '-55%', fontSize: 18, fontWeight: 'bold'}}>
                    Tudo sobre OBD2
                </Text>
               </TouchableOpacity>
        </View>
    );
};