/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';

import UserInfoScreen from './component/User/UserInfoScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.contaier}>
      <StatusBar />
      <View style={styles.contaier}>
        <UserInfoScreen />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
  },
});

export default App;
