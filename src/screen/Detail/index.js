import React from 'react';
import { View } from 'react-native';

import Intro from '@app-component/Intro';

const Detail = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Intro title={'Welcome to React Native'}/>
    </View>
  )

}

export default Detail;
