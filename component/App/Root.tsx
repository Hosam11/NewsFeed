import {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {getUserInfo} from '../Storage/Storage';
import {NavigationContainer, LinkingOptions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsScreen from '../News/NewsScreen/NewsScreen';
import SettingScreen from '../Settings/SettingScreen';
import UserInfoScreen from '../User/UserInfoScreen';
import Loading from '../UI/Loading';
import NewsDetailsScreen from '../News/NewsDetailsScreen/NewsDetailsScreen';
import {RootStackParamList} from '../../Util/types';
import {ThemeContext} from '../../store/theme-context';
import {colors} from '../UI/Colors';
import {StatusBar} from 'react-native';
import {getLocalizationText} from '../../Util/lang';
import {LanguageContext} from '../../store/language-context';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomNavigator: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const headerColor = themeContext.isDarkTheme()
    ? colors.dark.header
    : colors.light.header;
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: themeContext.isDarkTheme()
            ? colors.dark.header
            : colors.light.header,
        },
        headerTintColor: themeContext.isDarkTheme()
          ? colors.dark.title
          : colors.dark.title,

        tabBarStyle: {
          backgroundColor: headerColor,
          borderColor: 'white',
        },
        tabBarIconStyle: {display: 'none'},
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          color: themeContext.isDarkTheme()
            ? colors.dark.title
            : colors.dark.title,
          fontSize: 18,
        },
      }}>
      <Tab.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{
          headerLeft: () => null,
          tabBarLabel: getLocalizationText('news'),
          title: getLocalizationText('news'),
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          headerLeft: () => null,
          tabBarLabel: getLocalizationText('settings'),
          title: getLocalizationText('settings'),
        }}
      />
    </Tab.Navigator>
  );
};

const Root: React.FC = () => {
  const [firstTime, setFirstTime] = useState(false);
  const [loading, setLoading] = useState(true);
  const themeContext = useContext(ThemeContext);
  const localicationContext = useContext(LanguageContext);
  useEffect(() => {
    const checkIfUserExists = async () => {
      const data = await getUserInfo();
      const isFirstTime = data === false;
      setFirstTime(isFirstTime);
      setLoading(false);
    };
    checkIfUserExists();
  }, []);

  const headerColor = themeContext.isDarkTheme()
    ? colors.dark.header
    : colors.light.header;

  const linking: LinkingOptions<RootStackParamList> = {
    prefixes: ['https://newsfeed.com'],
    config: {
      screens: {
        NewsDetailsScreen: {
          path: 'details/:title',
          parse: {
            title: (title: string) => title,
          },
        },
      },
    },
  };
  const mainView = (
    <>
      <StatusBar backgroundColor={headerColor} />
      <NavigationContainer linking={linking}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: headerColor},
            headerTintColor: themeContext.isDarkTheme()
              ? colors.dark.title
              : colors.dark.title,
            contentStyle: {
              backgroundColor: themeContext.isDarkTheme()
                ? colors.dark.background
                : colors.light.background,
            },
          }}>
          {firstTime && (
            <Stack.Screen
              name="UserInfoScreen"
              component={UserInfoScreen}
              options={{
                title: localicationContext.localization['userInfo'],
              }}
            />
          )}
          <Stack.Screen
            name="BottomNavigator"
            component={BottomNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="NewsDetailsScreen"
            component={NewsDetailsScreen}
            options={{
              title: getLocalizationText('newsDetails'),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );

  return loading ? <Loading /> : mainView;
};

export default Root;
