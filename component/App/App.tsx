/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import Root from './Root';
import MyThemeProvider from '../../store/theme-context';

const App: React.FC = () => {
  return (
    <MyThemeProvider>
      <SafeAreaView style={styles.contaier}>
        <StatusBar />
        <Root />
      </SafeAreaView>
    </MyThemeProvider>
  );
};

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
  },
});

export default App;
