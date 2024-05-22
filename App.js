import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>Tela Inicial</Text>
    </View>
  );
};

const NotificationsScreen = () => {
  return (
    <View>
      <Text>Notificações</Text>
    </View>
  );
};

const ProductsScreen = () => {
  return (
    <View>
      <Text>Produtos</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} title="Home" />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} title="Notificações" />
        <Drawer.Screen name="Products" component={ProductsScreen} title="Produtos" />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
