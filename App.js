import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Cursos from './screens/cursos/Cursos';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Cursos"
              component={Cursos}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="movie-open" size={26} />
                ),
              }}
            />
          </Tab.Navigator>
          </NavigationContainer>
      </PaperProvider>
    </>
  );
}


