import {StyleSheet, Switch, View} from 'react-native';
import ThemeText from './ThemeText';
import {PropsWithChildren} from 'react';
import {colors} from './Colors';

const Toggle: React.FC<
  PropsWithChildren<{
    value?: boolean;
    onValueChange: (value: boolean) => void;
    label?: string;
  }>
> = ({children, value = false, onValueChange, label}) => {
  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <ThemeText style={styles.toggleLabel}>{children}</ThemeText>
        <Switch value={value} onValueChange={onValueChange} />
      </View>
      <ThemeText
        style={styles.label}
        darkColor={colors.dark.value}
        lightColor={colors.light.value}>
        {label}
      </ThemeText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleLabel: {
    fontSize: 18,
    color: '#000',
  },
  label: {
    fontSize: 16,
  },
});

export default Toggle;
