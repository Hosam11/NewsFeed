import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ErrorView: React.FC<{errorMessage: string; onPress?: () => void}> = ({
  errorMessage,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{errorMessage}</Text>
      <Button title="Retry" onPress={onPress} />
    </View>
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
