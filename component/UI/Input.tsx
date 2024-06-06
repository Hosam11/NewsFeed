import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import InputErrorView from './InputErrorView';
import {useContext} from 'react';
import {ThemeContext} from '../../store/theme-context';
import {colors} from './Colors';

const Input: React.FC<{
  placeholder: string;
  errorText?: string;
  keyboardType?: KeyboardTypeOptions;
  onChange?: (value: string) => void;
}> = props => {
  const themeContext = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          {
            color: themeContext.isDarkTheme()
              ? colors.dark.title
              : colors.light.title,
            borderColor: themeContext.isDarkTheme()
              ? colors.dark.title
              : colors.light.title,
          },
        ]}
        placeholderTextColor={
          themeContext.isDarkTheme() ? colors.dark.value : colors.light.value
        }
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
    padding: 8,
    fontSize: 18,
    borderWidth: 1,
  },
});

export default Input;
