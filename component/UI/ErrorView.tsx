import React, { useContext } from 'react';
import {StyleSheet, Button} from 'react-native';
import ThemeView from './ThemeView';
import ThemeText from './ThemeText';
import {getLocalizationText} from '../../Util/lang';
import {ThemeContext} from '../../store/theme-context';
import { colors } from './Colors';

const ErrorView: React.FC<{errorMessage: string; onPress?: () => void}> = ({
  errorMessage,
  onPress,
}) => {
  const themeContext = useContext(ThemeContext);
  return (
    <ThemeView style={styles.container}>
      <ThemeText style={styles.errorText}>{errorMessage}</ThemeText>
      <Button
        title={getLocalizationText('retry')}
        color={
          themeContext.isDarkTheme() ? colors.dark.header : colors.light.header
        }
        onPress={onPress}
      />
    </ThemeView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
});

export default ErrorView;
