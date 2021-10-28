import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
interface PropTypes {
  amount: string;
}

export default function LobbyTopBar(props: PropTypes) {
  return (
    <View>
      <View style={[tailwind('flex-row  justify-between')]}>
        <View style={[tailwind('relative bottom-1 right-1')]}>
          <Image
            resizeMode="cover"
            source={assets.logo_back_rectangle}
            style={[{width: 167, height: 73}]}
          />
        </View>
        <View style={[tailwind('absolute left-3 top-3'), {width: 90}]}>
          <Image
            resizeMode="contain"
            source={assets.logo}
            style={[tailwind('w-full'), {height: 50}]}
          />
        </View>

        <View style={[tailwind('flex-row items-end justify-end px-2')]}>
          <View style={[tailwind('px-2')]}>
            <Text
              style={[
                tailwind('font-bold uppercase'),
                {fontSize: 11, color: '#5F401C'},
              ]}>
              Cash Balance
            </Text>
            <Text style={[tailwind('font-regular text-primary font-16')]}>
              Rs. {props.amount}
            </Text>
          </View>
          <Image
            resizeMode="contain"
            source={assets.wallet}
            style={[tailwind(''), {width: 35, height: 33}]}
          />
        </View>
      </View>

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[tailwind('mx-4 my-2')]}
        colors={['#C4A858', '#D8BE71', '#BFA14E']}>
        <View style={[tailwind(''), {height: 3}]}></View>
      </LinearGradient>
    </View>
  );
}
