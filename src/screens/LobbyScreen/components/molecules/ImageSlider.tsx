import React, {useState} from 'react';
import tailwind from '../../../../../tailwind';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import assets from '../../../../constants/assets_manifest';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

interface PropTypes {
  images: [];
  location: number;
}

const ImageSlider = (props: any) => {
  const navigation = useNavigation();
  const [height, setHeight] = useState(150);

  const calcHeight = (e: any) => {
    const {height} = e.nativeEvent.layout;
    setHeight(height);
  };

  const navigate = (item: any) => {
    return 0;
  };

  return (
    <Swiper
      loop={true}
      showsButtons={false}
      autoplay={false}
      showsPagination={false}
      loadMinimal={true}
      loadMinimalSize={1}
      removeClippedSubviews={false}
      style={[tailwind('my-2'), {height: height}]}>
      <TouchableOpacity style={[tailwind('mx-2'), {}]}>
        <Image
          resizeMode="contain"
          source={assets.banner1}
          style={{width: '100%', height: height}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[tailwind('mx-2')]}>
        <Image
          resizeMode="contain"
          source={assets.banner1}
          style={{width: '100%', height: height}}
        />
      </TouchableOpacity>
    </Swiper>
  );
};

export default ImageSlider;
