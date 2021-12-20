import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  teamName1: string;
  teamName2: string;
}

export default function MatchStat(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-between')]}>
      <View style={[tailwind('flex-col'), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-white font-14')]}>
          {props.teamName1}
        </Text>
        <View style={[tailwind('flex-row items-center py-2')]}>
          <Text style={[tailwind('font-bold text-white font-20')]}>43/1</Text>
          <Text style={[tailwind('font-regular text-dark-1 pl-2 font-14')]}>
            (3)
          </Text>
        </View>
      </View>

      <LiveIndicator />

      <View style={[tailwind('flex-col items-end'), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-white font-14')]}>
          {props.teamName2}
        </Text>
        <View style={[tailwind('flex-row items-center py-2')]}>
          <Text style={[tailwind('font-bold text-white font-20')]}>183/6</Text>
          <Text style={[tailwind('font-regular text-dark-1 pl-2 font-14')]}>
            (20)
          </Text>
        </View>
      </View>
    </View>
  );
}

const LiveIndicator = () => {
  return (
    <View style={[tailwind('flex-row justify-center items-center'), {flex: 2}]}>
      <View
        style={[
          tailwind('rounded-full'),
          {backgroundColor: '#EB5757', width: 6, height: 6},
        ]}></View>
      <Text style={[tailwind('font-bold uppercase text-red-400 font-13 px-1')]}>
        LIVE
      </Text>
    </View>
  );
};