import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
interface PropTypes {
  text?: string;
}

export default function LobbyNav(props: PropTypes) {
  const {width, height} = useWindowDimensions();

  return (
    <View style={[tailwind('pt-1 flex-row justify-between')]}>
      <View
        style={[
          tailwind('flex-col items-center justify-end py-1'),
          {width: width / 5.5},
        ]}>
        <Image
          resizeMode="contain"
          source={assets.profile_round}
          style={[tailwind('w-7 h-7')]}
        />
        <Text style={[tailwind('font-regular text-primary font-10')]}>
          Hi, Naveen
        </Text>
      </View>

      <View style={[tailwind('flex-1')]}>
        <View style={[tailwind('flex-row items-center justify-around ')]}>
          <View
            style={[
              tailwind('flex flex-col items-center border-b-2 mb-0.5'),
              {borderBottomColor: '#162238'},
            ]}>
            <Image
              resizeMode="contain"
              source={assets.cricket_icon}
              style={[tailwind('w-5 h-5')]}
            />
            <Text
              style={[
                tailwind(
                  'font-bold text-center px-2 uppercase text-xs font-11 tracking-widest',
                ),
              ]}>
              Cricket
            </Text>
          </View>

          <View style={[tailwind('flex flex-col items-center mb-0.5')]}>
            <Image
              resizeMode="contain"
              source={assets.football_icon}
              style={[tailwind('w-5 h-5')]}
            />
            <Text
              style={[
                tailwind(
                  'font-bold text-center px-2 uppercase text-xs font-11 tracking-widest',
                ),
                {color: '#695023'},
              ]}>
              FootBall
            </Text>
          </View>
        </View>
        <View style={[tailwind('flex-row')]}>
          <View
            style={[
              tailwind('w-full bg-dark'),
              {
                height: 10,
                borderStyle: 'solid',
                borderLeftWidth: 20,
                borderRightWidth: 20,
                borderTopWidth: 0,
                borderBottomWidth: 10,
                borderRightColor: '#bd9e4d',
                borderLeftColor: '#bfa04e',
                borderTopColor: 'transparent',
                borderBottomColor: '#0c1320',
              },
            ]}></View>
        </View>
      </View>

      <View
        style={[
          tailwind('flex-col items-center justify-end py-2 '),
          {width: width / 5.5},
        ]}>
        <View style={[tailwind('relative')]}>
          <Image
            resizeMode="contain"
            source={assets.topBarbell}
            style={[tailwind('w-7 h-7')]}
          />
          <View
            style={[
              tailwind(
                'w-3 h-3 absolute right-0 top-0 rounded-full bg-red-500',
              ),
            ]}></View>
        </View>
      </View>
    </View>
  );
}

{
  /* <View
            style={{
              width: 0,
              height: 4,
              backgroundColor: 'transparent',
              borderStyle: 'solid',
              borderRightWidth: 20,
              borderTopWidth: 10,
              borderRightColor: '#172339',
              borderTopColor: 'transparent',
            }}></View> */
}
