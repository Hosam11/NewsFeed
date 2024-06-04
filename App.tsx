/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import UserInfoScreen from './component/User/UserInfoScreen';
import {getUserInfo, userInfoKey} from './Storage';

const App: React.FC = () => {
  useEffect(() => {
    const checkIfUserExists = async () => {
      await getUserInfo(userInfoKey);
      console.log('useEffect called');
    };
    checkIfUserExists();
  }, []);

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
