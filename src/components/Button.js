import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

const Button = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      width: styles.screenWidth - 50,
      height: 50,
      borderRadius: 6,
      alignItems: styles.center,
      justifyContent: styles.center,
      backgroundColor: styles.successColor,
    }}
  >
    <Text style={{ color: styles.white }}>
      {title}
    </Text>
  </TouchableOpacity>
)

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default Button
