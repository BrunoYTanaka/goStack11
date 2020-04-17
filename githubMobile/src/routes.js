import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Main from './pages/Main'
import User from './pages/User'
import Repository from './pages/Repository'

const AppStack = createStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerBackTitle: false,
        }}
      >
        <AppStack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Usuários' }}
        />
        <AppStack.Screen name="User" component={User} />
        <AppStack.Screen name="Repository" component={Repository} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
