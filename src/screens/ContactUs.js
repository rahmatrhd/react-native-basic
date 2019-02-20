import React from 'react'
import { View, Button, Text } from 'react-native'

export default props => (
  <View>
    <Text>Contact Us</Text>
    <Button
      title="GO to about"
      onPress={() => props.navigation.navigate({ routeName: 'About'})}
    />
  </View>
)