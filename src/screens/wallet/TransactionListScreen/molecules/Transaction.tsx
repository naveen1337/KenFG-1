import React, {useState} from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import clr from '../../../../constants/colors';

interface PropTypes {
  amount: string;
  plus: boolean;
  title: string;
  open: boolean;
  dT: boolean;
}

export default function Transaction(props: PropTypes) {
  console.log(
    tailwind(
      'bg-dark-3 flex-row items-center justify-between border-b border-gray-800',
    ),
  );

  const [open, setOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setOpen(!open)}
        style={[ss.root, props.dT ? clr.bgd2 : clr.bgw]}>
        <Text style={[ss.amount]}>
          {props.plus ? '+ ' : '- '}
          {'\u20B9'}
          {props.amount}
        </Text>
        <Text style={[ss.subText, props.dT ? clr.td2 : clr.tdgray]}>
          {props.title}
        </Text>
        <Icon
          name={open ? 'chevron-up' : 'chevron-down'}
          size={24}
          color="#FFFFFF4D"
        />
      </TouchableOpacity>
      {open && (
        <View style={[ss.details, props.dT ? clr.bgd1 : clr.bgw]}>
          <Text style={[ss.subText]}>Transaction ID:</Text>
          <Text style={[ss.txt]}>549372982368264868</Text>

          <Text style={[ss.subText]}>Transaction Date:</Text>
          <Text style={[ss.txt]}>21 October</Text>

          <Text style={[ss.subText]}>Team Name</Text>
          <Text style={[ss.txt]}>Team 1</Text>
        </View>
      )}
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    alignItems: 'center',
    borderColor: 'rgba(31, 41, 55, 0.2)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  amount: {
    fontFamily: 'gadugi-bold',
    fontSize: 15,
  },
  subText: {
    fontFamily: 'gadugi-normal',
    fontSize: 13,
  },
  details: {
    marginHorizontal: 5,
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  txt: {
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    paddingTop: 4,
    paddingBottom: 12,
  },
});
