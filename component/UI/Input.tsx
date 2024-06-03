import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {sharedStyles} from './SharedStyles';

const Input: React.FC<{
  placeholder: string;
  errorText?: string;
  keyboardType?: KeyboardTypeOptions;
}> = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
      />
      {props.errorText && <Text style={sharedStyles.error}>Error</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    borderColor: 'grey',
    padding: 8,
    fontSize: 18,
    backgroundColor: '#fff',
    borderWidth: 1,
  },
});

export default Input;
