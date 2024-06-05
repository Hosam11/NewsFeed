import {Children, PropsWithChildren, useContext} from 'react';
import {StyleSheet, StyleSheetProperties, Text, TextProps} from 'react-native';
import {ThemeContext, themes} from '../../store/theme-context';

const ThemeText: React.FC<PropsWithChildren<TextProps>> = ({
  children,
  style,
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Text
      style={[
        style,
        {
          color: themeContext.theme === themes.dark ? '#fff' : 'black',
        },
      ]}>
      {children}
    </Text>
  );
};

export default ThemeText;
