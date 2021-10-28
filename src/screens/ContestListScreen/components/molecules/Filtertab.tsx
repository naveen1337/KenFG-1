import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

const TABS = [
  {
    id: '1',
    name: 'Entry',
    active: true,
  },
  {
    id: '2',
    name: 'Spots',
    active: false,
  },
  {
    id: '3',
    name: 'Prize Pool',
    active: false,
  },
  {
    id: '4',
    name: '% Winning',
    active: false,
  },
];
const BUTTON_HEIGHT = 40;

export default function FilterTabs(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      <View style={[tailwind('flex-col px-4  justify-center')]}>
        <Text
          style={[tailwind('font-regular uppercase text-gray-400 font-15')]}>
          Sort By
        </Text>
      </View>
      <FlatList
        contentContainerStyle={[tailwind('')]}
        data={TABS}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={[
                tailwind(`flex flex-col items-center  bg-primary py-2 px-4`),
                {height: BUTTON_HEIGHT},
              ]}>
              <Text style={[tailwind('font-regular font-15 text-white')]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />
      <View style={[tailwind('flex-col px-4 justify-center')]}>
        <Icon name="funnel-outline" color="white" size={20} />
      </View>
    </View>
  );
}
