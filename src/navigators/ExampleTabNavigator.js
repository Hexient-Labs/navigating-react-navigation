import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import First from '../scenes/First'
import Second from '../scenes/Second'
import Third from '../scenes/Third'

export default TabNavigator({
  First: {
    screen: First,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="dashboard"
          color={tintColor}
        />
      )
    },
  },
  Second: {
    screen: Second,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="done-all"
          color={tintColor}
        />
      )
    },
  },
  Third: {
    screen: Third,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="account-circle"
          color={tintColor}
        />
      )
    },
  }
})
