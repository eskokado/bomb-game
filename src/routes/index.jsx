import { NavigationContainer } from '@react-navigation/native'
import Start from '../pages/start'
import Rules from '../pages/rules'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Start' component={Start} />
        <Stack.Screen name='Rules' component={Rules} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
