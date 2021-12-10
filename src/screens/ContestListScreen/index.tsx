import React, {useEffect, useRef, useState} from 'react';
import {View, useWindowDimensions, ScrollView, FlatList} from 'react-native';
import tailwind from '../../../tailwind';
import {useNavigation, useRoute} from '@react-navigation/native';
import PagerView from 'react-native-pager-view';
import {contestListsRemote} from '../../remote/matchesRemote';
import {joinedTeamsRemote} from '../../remote/matchesRemote';
import {useIsScreenReady} from '../../utils/customHoooks';
import TopBarContest from '../../sharedComponents/atoms/TopbarContest';
import {FullScreenLoading} from '../../sharedComponents';
import Tabs from './molecules/TabsContest';
import ContestPage from './molecules/ContestPage';
import MyContestPage from './molecules/MyContestPage';
import MyTeamsPage from './molecules/MyTeamsPage';
import {useQuery} from 'react-query';
import {useSelector} from 'react-redux';
import {userInfo} from '../../store/selectors';
import CreateTeamButton from './atoms/CreateTeamButton';
const log = console.log;

export default function ContestListScreen() {
  const navigation = useNavigation();
  const route = useRoute<any>();

  const {width} = useWindowDimensions();
  const pagerRef = useRef<any>(null);
  const isScreenReady = useIsScreenReady();

  const [selectedTab, setSelectedTab] = useState(0);

  const userInfoSelector = useSelector(userInfo);

  const contests = useQuery(
    ['contests', route.params?.match_key],
    contestListsRemote,
  );

  const teams = useQuery(
    ['teams', userInfoSelector?.mobile, route.params?.match_key],
    joinedTeamsRemote,
  );

  // Side effects

  useEffect(() => {}, []);

  useEffect(() => {
    if (contests.data) {
      log(contests.data);
    }
  }, [contests.data]);

  const onPageSelectedAction = (e: any) => {
    setSelectedTab(e.nativeEvent.position);
  };

  const onTabPressed = (index: number) => {
    pagerRef.current?.setPage(index);
  };

  if (isScreenReady === false) {
    return (
      <FullScreenLoading
        title={`${route.params?.team_a} VS ${route.params?.team_b}`.toUpperCase()}
      />
    );
  }

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBarContest
        title={`${route.params?.team_a} VS ${route.params?.team_b}`}
        subtitle={'18h 11m left'}
      />
      <View style={[tailwind('')]}>
        <Tabs selectedTab={selectedTab} onTabPressed={onTabPressed} />
      </View>
      <PagerView
        ref={pagerRef}
        onPageSelected={onPageSelectedAction}
        style={[{flex: 1}]}
        initialPage={selectedTab}>
        <View style={{width: width}}>
          <ContestPage
            teams={`${route.params?.team_a} VS ${route.params?.team_b}`}
            status={contests.status}
            data={contests.data}
          />
        </View>
        <View style={{width: width}}>
          <MyContestPage />
        </View>
        <View style={{width: width}}>
          <MyTeamsPage teams={teams.data} status={teams.status} />
        </View>
      </PagerView>

      <View
        style={[
          tailwind(
            'absolute bottom-0 w-full flex-row items-center justify-center',
          ),
        ]}>
        <CreateTeamButton />
      </View>
    </View>
  );
}

/**
 * match_key is a mandatory params
 */
