import { NavigationContainer } from '@react-navigation/native'
import Start from '../pages/start'
import Rules from '../pages/rules'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PlayAlone from '../pages/play_alone'
import PlayTogether from '../pages/play_together'

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
        <Stack.Screen name='PlayAlone' component={PlayAlone} />
        <Stack.Screen name='PlayTogether' component={PlayTogether} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
