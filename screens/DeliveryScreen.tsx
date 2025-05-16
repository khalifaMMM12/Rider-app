import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Order = {
  id: string;
  customer: string;
  address: string;
  food: string;
};

type RootStackParamList = {
  Home: undefined;
  Delivery: { order: Order };
};

type DeliveryScreenProps = NativeStackScreenProps<RootStackParamList, 'Delivery'>;

export default function DeliveryScreen({ route, navigation }: DeliveryScreenProps) {
  const { order } = route.params;
  const [status, setStatus] = useState('Awaiting Rider');

  const handleAccept = () => setStatus('On the Way');
  const handleComplete = () => {
    setStatus('Delivered');
    setTimeout(() => navigation.goBack(), 1500); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delivery for {order.customer}</Text>
      <Text style={styles.sub}>Food: {order.food}</Text>
      <Text style={styles.sub}>Address: {order.address}</Text>
      <Text>Status: {status}</Text>

      {status === 'Awaiting Rider' && <Button title="Accept Delivery" onPress={handleAccept} />}
      {status === 'On the Way' && <Button title="Mark as Delivered" onPress={handleComplete} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  title: { fontSize: 22, fontWeight: 'bold' },
  sub: { fontSize: 16, marginVertical: 5 },
});
