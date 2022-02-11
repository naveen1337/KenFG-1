import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../../sharedComponents';
import Date from './atoms/Date';
import Transaction from './molecules/Transaction';
import {} from 'react-native-gesture-handler';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function TransactionList() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Recent Transactions'} />
      <ScrollView>
        <View style={[tailwind('')]}>
          <Date date={'21 October, 2021'} />

          <Transaction
            amount={'32'}
            plus={true}
            title={'Deposited a Cash'}
            open={true}
          />
          <Transaction
            amount={'32'}
            plus={true}
            title={'Won a Contest'}
            open={false}
          />
        </View>

        <View style={[tailwind(''), {paddingTop: 18}]}></View>

        <View style={[tailwind('')]}>
          <Date date={'19 October, 2021'} />

          <Transaction
            amount={'42'}
            plus={false}
            title={'Deposited a Cash'}
            open={false}
          />
          <Transaction
            amount={'32'}
            plus={true}
            title={'Won a Contest'}
            open={false}
          />
        </View>
        <View style={[tailwind('h-20')]}></View>
      </ScrollView>
    </View>
  );
}
