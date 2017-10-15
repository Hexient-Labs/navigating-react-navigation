import React, { Component } from 'react'
import { View } from 'react-native'
import Title from '../components/Title'
import Button from '../components/Button'
import styles from '../styles'

export default class First extends Component {
  constructor(props) {
    super(props)

    this.goToTabs = () =>
      this.props.navigation.navigate('ExampleTab')
  }

  render() {
    return (
      <View
        style={{
          ...styles.container(styles.primaryColor),
          justifyContent: 'space-around',
        }}
      >
        <Title text="First Page" />
        <Button
          onPress={this.goToTabs}
          title="Go to Tabs"
        />
      </View>
    )
  }
}
