import React from 'react'
import { StackNavigator } from 'react-navigation'
import DrawerNavigator from './ExampleDrawerNavigator'
import ExampleTabNavigator from './ExampleTabNavigator'

export default StackNavigator({
  Root: {
    screen: DrawerNavigator,
  },
  ExampleTab: {
    screen: ExampleTabNavigator,
  },
})
