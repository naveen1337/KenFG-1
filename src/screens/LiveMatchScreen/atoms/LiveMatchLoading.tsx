import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, ActivityIndicator, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {TopBar} from '../../../sharedComponents/';
import LiveMatchTopBar from './LiveMatchTopBar';

interface PropTypes {
  text: string;
}

export default function LiveMatchLoading(props: PropTypes) {
  return (
    <View style={[tailwind('h-full bg-dark')]}>
      <LiveMatchTopBar text={'ICC T20 World Cup Contest'} />
      <View style={[tailwind('my-3')]}>
        <ActivityIndicator color="#d1b45a" size={'large'} />
      </View>
    </View>
  );
}
