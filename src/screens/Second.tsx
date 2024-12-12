import React from 'react';
import { SafeAreaView, Text } from 'react-native';

interface SecondProps {}

function Second({}: SecondProps) {
  return (
    <SafeAreaView>
      <Text>second</Text>
    </SafeAreaView>
  );
}

export default Second;
