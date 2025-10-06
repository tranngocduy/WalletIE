import React from 'react';
import { Alert, View, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {

  const { navigate } = useNavigation();

  const _onPressDetail = () => navigate('Detail');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title='Detail'
        testID='detail-button'
        onPress={() => Alert.alert('Bắt đầu!')}
      />
    </View>
  )

}

export default Dashboard;
