import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import InputErrorView from './InputErrorView';

const Input: React.FC<{
  placeholder: string;
  errorText?: string;
  keyboardType?: KeyboardTypeOptions;
  onChange?: (value: string) => void;
}> = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        onChangeText={props.onChange}
      />
      <InputErrorView errorText={props.errorText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    borderColor: 'grey',
    padding: 8,
    fontSize: 18,
    backgroundColor: '#fff',
    borderWidth: 1,
  },
});

export default Input;
