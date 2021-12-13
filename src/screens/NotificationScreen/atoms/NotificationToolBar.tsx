import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function NotificationsToolbar(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('bg-dark-3 p-3 mb-3 flex-row items-center justify-between'),
      ]}>
      <Text style={[tailwind('font-regular text-dark-1 font-13')]}>
        You have unread notifications
      </Text>
      <View style={[tailwind('flex-row items-center')]}>
        <Image
          resizeMode="contain"
          source={assets.chart}
          style={[
            tailwind(''),
            {
              width: 25,
              height: 25,
            },
          ]}
        />
        <Image
          resizeMode="contain"
          source={assets.notify_more}
          style={[
            tailwind(''),
            {
              width: 27,
              height: 27,
            },
          ]}
        />
      </View>
    </View>
  );
}
