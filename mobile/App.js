import { Text, TouchableOpacity, View, StatusBar } from 'react-native';


import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes';
import Header from './src/components/Header';
import Menu from './src/components/Menu';
import Footer from './src/components/Footer';



export default function App() {
  return (
    <>
      <Header />
      <NavigationContainer>
        <Menu />
        <StatusBar backgroundColor='#f0f4ff' barStyle='dark-content' />
        <Routes />
      </NavigationContainer>
      <Footer />

    </>

  );
}

