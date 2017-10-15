import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import MenuToggler from '../components/MenuToggler'
import First from '../scenes/First'
import Second from '../scenes/Second'
import Third from '../scenes/Third'

export default DrawerNavigator({
  First: {
    screen: First,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon
          name="dashboard"
          color={tintColor}
        />
      ),
    },
  },
  Second: {
    screen: Second,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon
          name="done-all"
          color={tintColor}
        />
      ),
    },
  },
  Third: {
    screen: Third,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon
          name="account-circle"
          color={tintColor}
        />
      ),
    },
  }
}, {
  navigationOptions: ({ navigation }) => ({
    headerLeft: (
      <MenuToggler
        onPress={() => navigation.navigate('DrawerToggle')}
      />
    )
  }),
})
