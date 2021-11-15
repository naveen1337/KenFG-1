import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// interface PropTypes {
//   text?: string;
// }

export default function CurrentOverStats() {
  return (
    <View style={[tailwind('')]}>
      <View style={[tailwind('flex-row justify-between items-center')]}>
        <Text
          numberOfLines={2}
          style={[tailwind('font-regular text-light font-15'), {flex: 6}]}>
          A. Millence
        </Text>
        <View
          style={[tailwind('flex-row justify-end items-center'), {flex: 6}]}>
          <Text style={[tailwind('font-regular text-light font-15')]}>
            2/34
          </Text>
          <Text style={[tailwind('font-regular px-1 text-gray-300 font-15')]}>
            (3.2)
          </Text>
        </View>
      </View>
    </View>
  );
}
