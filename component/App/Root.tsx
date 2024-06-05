import {useLayoutEffect, useState} from 'react';
import {getUserInfo, userInfoKey} from '../Storage/Storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigations} from '../../Util/utils';
import NewsScreen from '../News/NewsScreen';
import SettingScreen from '../Settings/SettingScreen';
import UserInfoScreen from '../User/UserInfoScreen';
import Loading from '../UI/Loading';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={navigations.newsScreen}
        component={NewsScreen}
        options={{
          headerLeft: () => null,
          tabBarLabel: 'News',
        }}
      />
      <Tab.Screen
        name={navigations.settingScreen}
        component={SettingScreen}
        options={{
          headerLeft: () => null,
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};

const Root: React.FC = () => {
  const [firstTime, setFirstTime] = useState(false);
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    const checkIfUserExists = async () => {
      const data = await getUserInfo(userInfoKey);
      const isFirstTime = data === false;
      setFirstTime(isFirstTime);
      setLoading(false);
    };
    checkIfUserExists();
  }, []);

  const mainView = (
    <NavigationContainer>
      <Stack.Navigator>
        {firstTime && (
          <Stack.Screen
            name={navigations.userInfoScreen}
            component={UserInfoScreen}
            options={{
              title: 'User information',
            }}
          />
        )}
        <Stack.Screen
          name={navigations.bottomTabScreen}
          component={BottomNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  return loading ? <Loading /> : mainView;
};

export default Root;
