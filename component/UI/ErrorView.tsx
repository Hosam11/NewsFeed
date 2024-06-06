import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ThemeView from './ThemeView';
import ThemeText from './ThemeText';

const ErrorView: React.FC<{errorMessage: string; onPress?: () => void}> = ({
  errorMessage,
  onPress,
}) => {
  return (
    <ThemeView style={styles.container}>
      <ThemeText style={styles.errorText}>{errorMessage}</ThemeText>
      <Button title="Retry" onPress={onPress} />
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
