import { NavigationContainer } from '@react-navigation/native';
import {  createNativeStackNavigator } from '@react-navigation/native-stack';
import Muunnin from './Components/Muunnin'

const Tab = createNativeStackNavigator();


export default function App() {
  return (
<NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen name="Muunnin" component={Muunnin} />
  </Tab.Navigator>
</NavigationContainer>
  );
};
