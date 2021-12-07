import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';

interface PropTypes {
  text: string;
  subText?: string;
  goto: string;
}

export default function Actions(props: PropTypes) {
  const navigation = useNavigation<any>();

  return (
    <LinearGradient
      end={{x: 0.0, y: 0.5}}
      start={{x: 0.8, y: 2.0}}
      locations={[0.6, 0.5]}
      style={[tailwind('m-2 rounded flex-col justify-center')]}
      colors={['#1C2B46', '#172338']}>
      <TouchableOpacity
        onPress={() => navigation.navigate(props.goto)}
        style={[tailwind('flex-row items-center  justify-between p-4')]}>
        <View>
          <Text
            style={[tailwind('font-bold uppercase text-dark-1 px-3 font-14')]}>
            {props.text}
          </Text>
          {props.subText && (
            <Text style={[tailwind('font-regular text-dark-1 px-3 font-10')]}>
              {props.subText}
            </Text>
          )}
        </View>

        <Icon name="chevron-forward" size={20} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
}