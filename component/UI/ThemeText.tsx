import {Children, PropsWithChildren, useContext} from 'react';
import {
  ColorValue,
  StyleSheet,
  StyleSheetProperties,
  Text,
  TextProps,
} from 'react-native';
import {ThemeContext, themes} from '../../store/theme-context';
import {ThemeViewProps} from '../../Util/types';
import {colors} from './Colors';

const ThemeText: React.FC<PropsWithChildren<ThemeViewProps>> = ({
  children,
  style,
  darkColor = colors.dark.title,
  lightColor = colors.light.title,
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Text
      style={[
        style,
        {
          color: themeContext.theme === themes.dark ? darkColor : lightColor,
        },
      ]}>
      {children}
    </Text>
  );
};

export default ThemeText;
