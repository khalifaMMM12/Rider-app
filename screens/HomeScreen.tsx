import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

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

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const mockOrders: Order[] = [
  { id: '1', customer: 'John', address: 'Lekki Phase 1', food: 'Pizza' },
  { id: '2', customer: 'Ada', address: 'Yaba', food: 'Jollof Rice' },
];

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Deliveries</Text>
      <FlatList
        data={mockOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('Delivery', { order: item })}
          >
            <Text>{item.customer} - {item.food}</Text>
            <Text>{item.address}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 10, elevation: 3 },
});
