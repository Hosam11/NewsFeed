/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {SafeAreaView, StyleSheet} from 'react-native';
import Root from './Root';
import MyThemeProvider from '../../store/theme-context';

const App: React.FC = () => {
  return (
    <MyThemeProvider>
      <SafeAreaView style={styles.contaier}>
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
