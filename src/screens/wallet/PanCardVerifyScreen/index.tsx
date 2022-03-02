import React, {useState} from 'react';
import {useMutation} from 'react-query';
import {errorBox, infoBox} from '../../../utils/snakBars';
import PanVerifyScreen from './pan.verify.screen';
import {useDispatch, useSelector} from 'react-redux';
import {userInfo} from '../../../store/selectors';
import {updateUserInfo} from '../../../store/actions/userAction';
import {useNavigation} from '@react-navigation/core';
import {useImageUpload} from '../../../shared_hooks/app.hooks';
import {uploadPanKYCRemote} from '../../../remote/userRemote';

export default function AddCashScreenHOC() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userMeta = useSelector(userInfo);
  const {image, openLibrary, removeImage} = useImageUpload();

  const [openDate, setOpenDate] = useState<any>(false);

  const [name, setName] = useState('Nmae');
  const [pan, setPan] = useState('PANCA3333F');
  const [dob, setDob] = useState<any>(null);
  const [error, setError] = useState<any>({
    target: null,
    msg: '',
  });

  function onDateChangedAction(e: any) {
    switch (e.type) {
      case 'dismissed':
        setOpenDate(false);
        break;
      case 'set':
        setOpenDate(false);
        setDob(e.nativeEvent.timestamp);
    }
  }

  function validateInputs() {
    const iName = name.replace(/ /g, '');
    const iPan = pan.replace(/ /g, '');
    setError({target: null, msg: ''});
    if (iName.length < 3) {
      setError({target: 'name', msg: 'invalid name'});
      return;
    }
    if (!iPan.match('[A-Z]{5}[0-9]{4}[A-Z]{1}')) {
      setError({target: 'pan', msg: 'Please enter valid 10 digit pan card'});
      return;
    }
    if (!dob) {
      setError({target: 'dob', msg: 'Please enter valid birthday'});
      return;
    }

    if (!image) {
      setError({target: 'image', msg: 'Pan Card Image is required'});
      return;
    }
    uploadPANCard();
  }

  async function uploadPANCard() {
    console.log(image);

    const formData = new FormData();
    formData.append('player_key', userMeta.mobile);
    formData.append('pan_name', name);
    formData.append('pan_card_num', pan);
    formData.append('pan_dob', dob);
    formData.append('pan_state', 'null');
    formData.append('image', {
      name: 'image111',
      type: image.mime,
      uri: image.path,
    });
    const response = await uploadPanKYCRemote(formData);

    console.log('response >>>', response);
  }

  return (
    <PanVerifyScreen
      name={name}
      setName={setName}
      pan={pan}
      setPan={setPan}
      dob={dob}
      setDob={setDob}
      image={image}
      validateInputs={validateInputs}
      error={error}
      openDate={openDate}
      setOpenDate={setOpenDate}
      onDateChangedAction={onDateChangedAction}
      openLibrary={openLibrary}
      removeImage={removeImage}
    />
  );
}
