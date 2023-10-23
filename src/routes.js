import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/home';
import { Password } from './pages/password';


const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name='home'
            component={Home}
            options={{
                headerShown:false
            }}
            />
            <Tab.Screen
            name='password'
            component={Password}
            options={{
                headerShown:false
            }}
            />
        </Tab.Navigator>
    )
}


