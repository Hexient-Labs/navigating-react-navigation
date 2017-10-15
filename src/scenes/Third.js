import React, { Component } from 'react'
import { View } from 'react-native'
import Title from '../components/Title'
import styles from '../styles'

export default class Third extends Component {
  render() {
    return (
      <View
        style={styles.container(styles.tertiaryColor)}
      >
        <Title text="Third Page" />
      </View>
    )
  }
}
