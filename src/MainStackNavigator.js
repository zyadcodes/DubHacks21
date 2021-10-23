import { createStackNavigator } from '@react-navigation/stack';
import Scanner from './Scanner/Scanner';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Scanner" component={Scanner} />
    </Stack.Navigator>
  );
}

export default MyStack;