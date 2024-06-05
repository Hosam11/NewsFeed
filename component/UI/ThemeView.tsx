import {PropsWithChildren, useContext} from 'react';
import {View, ViewProps} from 'react-native';
import {ThemeContext, themes} from '../../store/theme-context';

const ThemeView: React.FC<PropsWithChildren<ViewProps>> = ({
  children,
  style,
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <View
      style={[
        style,
        {
          backgroundColor: themeContext.theme === themes.dark ? 'grey' : '#fff',
        },
      ]}>
      {children}
    </View>
  );
};

export default ThemeView;
