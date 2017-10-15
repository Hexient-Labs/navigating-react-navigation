import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import styles from '../styles'

const Title = ({ text }) => (
  <Text
    style={{
      color: styles.white,
      fontSize: styles.fontSize,
      fontWeight: 'bold',
      textAlign: styles.center,
    }}
  >
    {text}
  </Text>
)

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title
