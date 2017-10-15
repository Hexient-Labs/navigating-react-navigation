import React, { Component } from 'react'
import { View } from 'react-native'
import Title from '../components/Title'
import styles from '../styles'

export default class Second extends Component {
  render() {
    return (
      <View
        style={styles.container(styles.secondaryColor)}
      >
        <Title text="Second Page" />
      </View>
    )
  }
}
