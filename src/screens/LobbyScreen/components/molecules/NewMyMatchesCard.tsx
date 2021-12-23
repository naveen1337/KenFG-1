import React from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TopSection from '../../components/atoms/MyMatches/TopSection';
import Teams from '../../components/atoms/MyMatches/Teams';
import SlideAddMyMatchCard from '../atoms/SlideAddMyMatchCard';
import {useNavigation} from '@react-navigation/core';
interface PropTypes {
  text?: string;
}

export default function NewMyMatchesCard(props: PropTypes) {
  const navigation = useNavigation<any>();

  const {width} = useWindowDimensions();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        navigation.navigate('ContestsLiveMatchScreen');
      }}
      style={[tailwind('rounded bg-dark-3')]}>
      <TopSection />
      <Teams />
      <SlideAddMyMatchCard />
    </TouchableOpacity>
  );
}
