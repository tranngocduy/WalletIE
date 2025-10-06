import React from 'react';
import { View } from 'react-native';

import Intro from '@app-component/Intro';

const App = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Intro />
    </View>
  )

}

export default App;
