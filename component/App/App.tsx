/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import Root from './Root';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.contaier}>
      <StatusBar />
      <Root />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
  },
});

export default App;
