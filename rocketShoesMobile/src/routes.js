import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'

const AppStack = createStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          header: ({ navigation }) => <Header navigation={navigation} />,
          cardStyle: {
            backgroundColor: '#191914',
          },
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Cart" component={Cart} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
