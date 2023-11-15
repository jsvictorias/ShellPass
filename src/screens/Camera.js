import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import { ArrowCircleLeft } from 'phosphor-react-native';

export default function Camera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Não foi scanneado');
  const [alertShown, setAlertShown] = useState(false);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Pedir permissão da câmera
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // O que acontece quando scaneia
  const handleBarCodeScanned = ({ type, data }) => {
    if (!alertShown) {
      setAlertShown(true);
      setScanned(true);
      setText(data);
      console.log('Tipo: ' + type + '\nDados: ' + data);
      showAlert();
    }
  };

  // Verifica as permissões e mostra as telas
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Esperando pela permissão da câmera</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Acesso à câmera negado</Text>
        <Button title={'Permitir câmera'} onPress={() => askForCameraPermission()} />
      </View>)
  }
  const Botao = () => {
    return(
      <TouchableOpacity style={styles.botao}
      onPress={() => {
        setScanned(false);
        setAlertShown(false);
      }}>
        <Text style={styles.textb}> Scanear novamente? </Text>
      </TouchableOpacity>
    )
  }
  const showAlert = () => {
    Alert.alert(
      'CÓDIGO SCANEADO COM SUCESSO!!',
      'Agora você pode seguir as instruções e continuar com seu pagamento...',
      [
        {
          text: 'OK', 
         
        },
      ],
      { cancelable: true }
    );
  };

  // Retorna a câmera
  return (
    <View style={styles.container1}>
      <BotaoVolta1 />
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      

      {scanned && <Botao />}
    </View>
  );
}
const BotaoVolta1 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={{
        left: '-40%',
        top: '-500%',
      }}
        onPress={() => {
          navigation.goBack();
        }}>
        <ArrowCircleLeft size={32} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#70126A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  },
  botao: {
    backgroundColor: '#fff',
    width: '20%',
    height: '4%',
    alignItems: 'center',
    borderRadius: 3,
    marginTop: 15
  },
  textb : {
    textAlign: 'center'
  }
});
