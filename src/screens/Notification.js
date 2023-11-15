import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Notification() {
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      Alert.alert(
        notification.request.content.title,
        notification.request.content.body
      );
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text>Aqui aparecerá as notificações</Text>
      <Button
        title="Aperte para aparecer a notificação"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Já abasteceu o carro hoje? ",
      body: 'Busque o posto Shell próximo a você e abasteça',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 1 },
  });
}