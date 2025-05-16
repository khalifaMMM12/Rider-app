import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DeliveryScreen from '../screens/DeliveryScreen';

// Define the param list type
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

// Pass the type to the stack
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Delivery" component={DeliveryScreen} />
    </Stack.Navigator>
  );
}
