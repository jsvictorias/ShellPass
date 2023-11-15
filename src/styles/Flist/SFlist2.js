import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, Image } from "react-native";

export default function SFList2() {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={{height: 200, width: 282, backgroundColor: "#70126A", marginRight: 10, borderRadius: 15}}
        onPress={() => {
            navigation.navigate('SobreOBD')
        }}>
             <View style={{height: '80%', width: '80%'}}>
                <View style={{height: 170, width: 252, backgroundColor: "#FFE44F", left: 15, borderRadius: 15, marginTop: 15}}>
                    <Image source={require('../../../assets/Flist2.png')}
                    style={{width: 190, height: 170, borderRadius:15, left: 35 }}></Image>
                </View>
            </View>
        </TouchableOpacity>
    );
};