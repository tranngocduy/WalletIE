import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Into = ({ title }) => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity><Text>{title}</Text></TouchableOpacity>
    </View>
  )

}

export default Into;
