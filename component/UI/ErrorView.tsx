import {StyleSheet, Text, View} from 'react-native';

const ErrorView: React.FC<{errorText?: string}> = props => {
  return (
    <View style={styles.errorView}>
      {props.errorText && <Text style={styles.error}>{props.errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 16,
  },
  errorView: {
    paddingVertical: 12,
  },
});

export default ErrorView;
