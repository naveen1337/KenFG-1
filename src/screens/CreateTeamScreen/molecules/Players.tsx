import React from 'react';
import tailwind from '../../../../tailwind';
import assets from '../../../constants/assets_manifest';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {BottomLine} from '../../../sharedComponents';

interface PropTypes {
  player_key: string;
  teamname: string;
  image: string;
  name: string;
  role: string;
  info: string;
  anounced: boolean;
  points: number;
  credits: number;
  isSelected: boolean;
  canBeSelected: boolean;
  checkPlayerSelection(player_key: string, player_role: string): void;
}

export default function Player(props: PropTypes) {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          tailwind('pt-3 flex-row'),
          {
            backgroundColor: props.isSelected ? '#3C362C' : '#172338',
            // opacity: !props.canBeSelected ? 1 : 0.3,
          },
        ]}
        onPress={() =>
          props.checkPlayerSelection(props.player_key, props.role)
        }>
        {/* Image */}
        <View style={[tailwind(''), {flex: 2}]}>
          <Image
            resizeMode="contain"
            source={assets.player}
            style={[tailwind(''), {height: 65, width: 65}]}
          />
          <TeamBadge team1={true} name={props.teamname} />
        </View>
        <View style={[tailwind('pl-4'), {flex: 4}]}>
          <Text
            numberOfLines={1}
            style={[tailwind('font-bold text-light font-14 pb-0.5')]}>
            {props.name}
          </Text>
          <Text
            numberOfLines={1}
            style={[
              tailwind('font-regular text-light font-11 text-dark-1 py-1'),
            ]}>
            {props.info}
          </Text>
          <View style={[tailwind('flex-row items-center')]}>
            <View
              style={[
                tailwind('w-1 h-1 mr-2 rounded-full'),
                {backgroundColor: '#B2933D'},
              ]}></View>
            <Text
              numberOfLines={1}
              style={[tailwind('font-regular text-secondary font-9')]}>
              Played Last Match
            </Text>
          </View>
        </View>
        <View
          style={[tailwind('flex-col items-center justify-center'), {flex: 2}]}>
          <Text style={[tailwind('font-regular text-dark-1 font-15')]}>
            {props.points}
          </Text>
        </View>
        <View
          style={[tailwind('flex-row justify-start items-center'), {flex: 2}]}>
          <Text
            style={[tailwind('font-bold px-2 text-center text-light font-17')]}>
            {props.credits}
          </Text>
          {props.isSelected ? <AddedButton /> : <AddButton />}
        </View>
      </TouchableOpacity>

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[tailwind('')]}
        colors={['#172338', '#FFFFFF', '#172338']}>
        <View style={[tailwind(''), {height: 0.4}]}></View>
      </LinearGradient>
    </View>
  );
}

const TeamBadge = (props: any) => {
  return (
    <View
      style={[
        tailwind('absolute bottom-0 rounded-t'),
        {backgroundColor: props.team1 ? '#244785' : '#70211E', padding: 3},
      ]}>
      <Text style={[tailwind('font-bold uppercase text-light font-9')]}>
        {props.name}
      </Text>
    </View>
  );
};

const AddButton = (props: any) => {
  return (
    <LinearGradient
      colors={['#006A4D', '#00513B']}
      style={[
        tailwind(
          'flex-col items-center justify-center absolute rounded-l-lg py-2 right-0',
        ),
      ]}>
      <Icon name="add" color="white" size={24} />
    </LinearGradient>
  );
};

const AddedButton = (props: any) => {
  return (
    <LinearGradient
      colors={['#816D2E', '#614920']}
      style={[
        tailwind(
          'flex-col items-center justify-center absolute rounded-l-lg py-2 right-0',
        ),
      ]}>
      <Icon name="remove" color="white" size={24} />
    </LinearGradient>
  );
};
