import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image} from 'react-native';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  teamname: string;
  teamcount: string;
  reverseUI: boolean;
}

export default function Team1(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          `px-1 items-center ${
            props.reverseUI ? 'flex-row-reverse' : 'flex-row'
          }`,
        ),
        {flex: 6},
      ]}>
      <View style={[tailwind(''), {flex: 8}]}>
        <Image
          resizeMode="contain"
          source={assets.teamIndia}
          style={[tailwind(''), {width: '100%', height: 48}]}
        />
      </View>
      <View style={[tailwind('px-1'), {flex: 4}]}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={
            props.reverseUI ? ['#872525', '#B2933D'] : ['#C5A858', '#172338']
          }
          style={[tailwind('rounded-full p-0.5')]}>
          <Text
            allowFontScaling={true}
            adjustsFontSizeToFit={true}
            style={[tailwind('font-bold text-white font-11')]}>
            {props.teamname}
          </Text>
        </LinearGradient>
        <Text style={[tailwind('font-bold text-right text-brown-4 font-20')]}>
          {props.teamcount}
        </Text>
      </View>
    </View>
  );
}