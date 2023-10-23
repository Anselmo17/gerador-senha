import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/home';
import { Password } from './pages/password';
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='home'
                component={Home}
                options={{
                    tabBarShowLabelLabel:false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        const nameCurrent = focused ? 'home' : 'home-outline';
                        return <Ionicons size={size} color={color} name={nameCurrent} />
                    }
                }}
            />
            <Tab.Screen
                name='password'
                component={Password}
                options={{
                    tabBarShowLabelLabel:false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        const nameCurrent = focused ? 'lock-closed' : 'lock-closed-outline';
                        return <Ionicons size={size} color={color} name={nameCurrent} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}


