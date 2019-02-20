import React from 'react'
import { View, Button, Text } from 'react-native'

export default props => (
  <View>
    <Text>About</Text>
    <Button
      title="GO to contact us"
      onPress={() => props.navigation.navigate({ routeName: 'ContactUs'})}
    />
  </View>
)