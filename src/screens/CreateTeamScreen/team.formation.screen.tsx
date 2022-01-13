import React, {
  useRef,
  useState,
  createContext,
  useReducer,
  useEffect,
} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation, useRoute} from '@react-navigation/native';
import {FullScreenLoading, BlockScreenByLoading} from '../../sharedComponents/';
import LinearGradient from 'react-native-linear-gradient';
import PagerView from 'react-native-pager-view';
import TopBarCreateTeam from './atoms/TopBarCreateTeam';
import MatchStatus from './atoms/MatchStatus';
import TeamInfo from './molecules/TeamInfo';
import SelectionIndicator from './atoms/SelectionIndicator';
import Tabs from './atoms/Tabs';
import Line from './atoms/Line';
import BottomAction from './molecules/BottomAction';
import Page from './molecules/Page';
import {Modalize} from 'react-native-modalize';
import {
  updateCreditsAction,
  updatePlayerAction,
  updateTeamCountAction,
  clearTeamAction,
  updateBlockListAction,
  saveAllPlayersAction,
  updateErrorMsgAction,
  updateTeamAction,
} from '../../store/actions/teamActions';
// import {getMatchPlayersRemote} from '../../remote/serviceRemote';
import {getMatchPlayersRemote} from '../../remote/matchesRemote';
import {useQuery} from 'react-query';

import {useSelector, useDispatch} from 'react-redux';
import {
  creditLeft,
  rolesCount,
  blockList,
  selectedMatch,
} from '../../store/selectors';
// import {isPlayerCanBeSelectable} from '../../workers/decision';
import {errorBox} from '../../utils/snakBars';
import TabItem from './atoms/TabItem';
import ClearTeamSheet from './atoms/ClearTeamSheet';
import CreateTeamFilterSheetTitle from './atoms/CreateTeamFilterSheetTitle';
import PlayerFilterSheet from './molecules/PlayerFilterSheet';
import CreateTeamLoading from './atoms/CreateTeamLoading';
import ScrollTabs from './molecules/ScrollTabs';
import LoadFailedTeamFormation from './atoms/loadfailed.teamformation';
import {log} from '../../utils/logs';

export default function CreateTeamScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const pageRef = useRef<PagerView>(null);
  const clearRef = useRef<any>(null);
  const isScreenReady = useIsScreenReady();
  const dispatch = useDispatch();
  const filterSheet = useRef<Modalize>();
  const isMounted = useRef(false);

  const playersState: any = useSelector<any>(state => state.team.players);
  const userState: any = useSelector<any>(state => state.user.user_info);

  const SelectedMatchState: any = useSelector<any>(
    state => state.app.selected_match,
  );
  const ErrorMessageState: any = useSelector<any>(
    state => state.team.error_message,
  );

  // console.log('playersState', JSON.stringify(playersState));

  const matchSelector: any = useSelector(selectedMatch);
  const availableCredits = useSelector(creditLeft);
  const rolesCountSelector: any = useSelector(rolesCount);

  const [loading, setLoading] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // remote sevice query
  const players: any = useQuery(
    ['players', SelectedMatchState.match_key, userState.mobile],
    getMatchPlayersRemote,
  );

  // side effects

  useEffect(() => {
    if (route?.params?.from === 1) {
      // Dont clear its from clone or edit
    } else {
      dispatch(clearTeamAction());
    }
    dispatch(updateErrorMsgAction(null));
    dispatch(updateTeamAction([matchSelector.team_a, matchSelector.team_b]));
  }, []);

  useEffect(() => {
    if (players.data) {
      dispatch(saveAllPlayersAction(players.data));
    }
  }, [players]);

  useEffect(() => {
    dispatch(updateTeamCountAction(rolesCountSelector));
    dispatch(updateCreditsAction(availableCredits));
  }, [playersState]);

  useEffect(() => {
    if (ErrorMessageState?.message) {
      errorBox(ErrorMessageState?.message);
    }
  }, [ErrorMessageState]);

  const onPageSelectedAction = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };
  const onTabPressed = (index: number) => {
    pageRef.current?.setPage(index);
  };

  const checkPlayerSelection = (player_key: string, player_role: string) => {
    dispatch(updatePlayerAction({key: player_key, role: player_role}));
    return;
  };

  const clearTeam = () => {
    dispatch(clearTeamAction());
    clearRef?.current?.close();
  };

  const navigateToTeamPreviewScreeen = () => {
    navigation.navigate('TeamPreviewScreen', {
      from: 1,
      keepers: playersState.filter(
        (item: any) => item.seasonal_role === 'keeper',
      ),
      batsman: playersState.filter(
        (item: any) => item.seasonal_role === 'batsman',
      ),
      all_rounder: playersState.filter(
        (item: any) => item.seasonal_role === 'all_rounder',
      ),
      bowler: playersState.filter(
        (item: any) => item.seasonal_role === 'bowler',
      ),
      cap_key: 1,
      vc_key: 1,
      team_a: {
        key: matchSelector.team_a,
        count: rolesCountSelector[matchSelector.team_a],
      },
      team_b: {
        key: matchSelector.team_b,
        count: rolesCountSelector[matchSelector.team_b],
      },
      credits_left: availableCredits,
    });
  };

  const navigateToCapSelection = () => {
    try {
      if (playersState.length === 11) {
        navigation.navigate('CapSelectionScreen'),
          {
            match_key: !route?.params?.match_key,
          };
      } else {
        throw 'Team requires total 11 players';
      }
    } catch (err: any) {
      errorBox(err);
    }
  };

  if (isScreenReady === false || players.status === 'loading') {
    return <CreateTeamLoading text={``} />;
  }
  if (players.status === 'success' && !players.data) {
    return <LoadFailedTeamFormation />;
  }

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBarCreateTeam />
      <LinearGradient colors={['#172338', '#0D1320']}>
        <LinearGradient colors={['#172338', '#0D1320']}>
          <MatchStatus text={'MAX 7 PLAYERS FROM A TEAM'} />
          <Line />

          <TeamInfo
            teamname1={matchSelector.team_a}
            teamname2={matchSelector.team_b}
            teamcount1={rolesCountSelector[matchSelector.team_a]}
            teamcount2={rolesCountSelector[matchSelector.team_b]}
            credits_left={availableCredits}
          />
        </LinearGradient>
        <Line />
        <SelectionIndicator
          clearRef={clearRef}
          count={
            rolesCountSelector[matchSelector.team_a] +
            rolesCountSelector[matchSelector.team_b]
          }
        />
      </LinearGradient>

      {/* Tabs */}
      <View>
        <ScrollTabs
          activeIndex={activeIndex}
          onTabPressed={onTabPressed}
          rolesCountSelector={rolesCountSelector}
        />
      </View>

      <PagerView
        ref={pageRef}
        onPageSelected={onPageSelectedAction}
        style={{flex: 1}}
        initialPage={0}>
        <View>
          <Page
            filterSheet={filterSheet}
            checkPlayerSelection={checkPlayerSelection}
            id={'wkt'}
            title={'Select 1-4 Wicket Keepers'}
            data={players.data[0]?.keeper}
            rolesCountSelector={rolesCountSelector}
            index={0}
            activeIndex={activeIndex}
            team_a={matchSelector.team_a}
          />
        </View>
        <View>
          <Page
            filterSheet={filterSheet}
            checkPlayerSelection={checkPlayerSelection}
            id={'bat'}
            title={'Select 3-6 Batters'}
            data={players.data[0]?.batsman}
            rolesCountSelector={rolesCountSelector}
            index={1}
            activeIndex={activeIndex}
            team_a={matchSelector.team_a}
          />
        </View>
        <View>
          <Page
            filterSheet={filterSheet}
            checkPlayerSelection={checkPlayerSelection}
            id={'ar'}
            title={'Select 1-4 All Rounders'}
            data={players.data[0]?.all_rounder}
            rolesCountSelector={rolesCountSelector}
            index={2}
            activeIndex={activeIndex}
            team_a={matchSelector.team_a}
          />
        </View>
        <View>
          <Page
            filterSheet={filterSheet}
            checkPlayerSelection={checkPlayerSelection}
            id={'bwl'}
            title={'Select 3-6 Bowlers'}
            data={players.data[0]?.bowler}
            rolesCountSelector={rolesCountSelector}
            index={3}
            activeIndex={activeIndex}
            team_a={matchSelector.team_a}
          />
        </View>
      </PagerView>
      <View
        style={[tailwind('absolute bottom-0 w-full flex-row justify-center')]}>
        <BottomAction
          navigateToCapSelection={navigateToCapSelection}
          navigateToTeamPreviewScreeen={navigateToTeamPreviewScreeen}
        />
      </View>

      <Modalize
        ref={clearRef}
        useNativeDriver={true}
        modalTopOffset={200}
        adjustToContentHeight={true}
        disableScrollIfPossible={false}
        closeOnOverlayTap={true}>
        <ClearTeamSheet clearTeam={clearTeam} clearRef={clearRef} />
      </Modalize>

      <Modalize
        ref={filterSheet}
        useNativeDriver={true}
        modalTopOffset={100}
        adjustToContentHeight={true}
        HeaderComponent={
          <CreateTeamFilterSheetTitle filterSheet={filterSheet} />
        }>
        <PlayerFilterSheet />
      </Modalize>

      {loading && <BlockScreenByLoading />}
    </View>
  );
}