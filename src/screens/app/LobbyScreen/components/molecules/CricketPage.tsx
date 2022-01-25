import React, {useEffect} from 'react';
import tailwind from '../../../../../../tailwind';
import {View, StyleSheet, Text, ToastAndroid} from 'react-native';
import SubTitle from '../SubTitle';
import UpcommingMatchTitle from './upcomming.match.title';
import ImageSlider from './ImageSlider';
import UpComingMatchesSlider from './UpComingMatchesSlider';
import {useNavigation} from '@react-navigation/native';
import {navigateMatchContestsAction} from '../../../../../store/actions/navigationActions';
import {errorBox} from '../../../../../utils/snakBars';

interface PropTypes {
  banners: Array<any>;
  upcomming: Array<any>;
}

export default function CricketPage(props: PropTypes) {
  const navigation = useNavigation();

  const navigateToMatchContests = (match_key: string) => {
    const match = props.upcomming.find((item: any) => item.key === match_key);
    if (match) {
      // console.log(match);
      navigateMatchContestsAction(navigation, {
        match_key: match.key,
        name: match.teams.tournament.short_name,
        team_a: match.teams.a.key,
        team_b: match.teams.b.key,
        team_a_name: match.teams.a.name,
        team_b_name: match.teams.b.name,
        start_at: match.start_at,
      });
    } else {
      errorBox('No Match Found');
    }
  };

  return (
    <View>
      <View style={[tailwind('pt-3')]}>
        <ImageSlider
          upcomming={props.upcomming}
          data={props.banners}
          status={props.banners}
          navigateToMatchContests={navigateToMatchContests}
        />
      </View>
      <View style={[tailwind('px-5 pt-4')]}>
        <UpcommingMatchTitle />
      </View>
      <UpComingMatchesSlider
        data={props.upcomming}
        status={props.upcomming}
        navigateToMatchContests={navigateToMatchContests}
      />
    </View>
  );
}