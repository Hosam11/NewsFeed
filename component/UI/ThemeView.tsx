import {PropsWithChildren, useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext, themes} from '../../store/theme-context';
import {ThemeViewProps} from '../../Util/types';
import {colors} from './Colors';

const ThemeView: React.FC<PropsWithChildren<ThemeViewProps>> = ({
  children,
  style,
  darkColor = colors.dark.background,
  lightColor = colors.light.background,
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <View
      style={[
        style,
        {
          backgroundColor:
            themeContext.theme === themes.dark ? darkColor : lightColor,
        },
      ]}>
      {children}
    </View>
  );
};

export default ThemeView;
