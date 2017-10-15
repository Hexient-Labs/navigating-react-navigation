import React from 'react'
import { StackNavigator } from 'react-navigation'
import First from '../scenes/First'
import Second from '../scenes/Second'
import Third from '../scenes/Third'

export default StackNavigator({
  First: {
    screen: First,
  },
  Second: {
    screen: Second,
  },
  Third: {
    screen: Third,
  }
})
