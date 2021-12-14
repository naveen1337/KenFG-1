import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function ReferPhoneContacts(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('rounded bg-green flex-row items-center justify-center'),
        {paddingVertical: 14, marginBottom: 16},
      ]}>
      <Image
        resizeMode="contain"
        source={assets.refercontacts}
        style={[{width: 20, height: 20}]}
      />
      <Text
        style={[tailwind('font-regular font-14 px-3 uppercase text-white')]}>
        Refer PHONE CONTACTS
      </Text>
    </View>
  );
}
