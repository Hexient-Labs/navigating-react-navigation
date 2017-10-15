import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const MenuToggler = ({ onPress }) => (
  <Text
    onPress={onPress}
    style={{
      padding: 10,
    }}
  >
    Toggle
  </Text>
)

MenuToggler.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default MenuToggler
