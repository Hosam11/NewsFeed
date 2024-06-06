import {SafeAreaView, StyleSheet} from 'react-native';
import Root from './Root';
import MyThemeProvider from '../../store/theme-context';
import LocalizationProvider from '../../store/language-context';

const App: React.FC = () => {
  return (
    <MyThemeProvider>
      <LocalizationProvider>
        <SafeAreaView style={styles.contaier}>
          <Root />
        </SafeAreaView>
      </LocalizationProvider>
    </MyThemeProvider>
  );
};

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
  },
});

export default App;
