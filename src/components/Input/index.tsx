import React from 'react';
import {TextInputProps} from 'react-native';

import * as S from './styles';

const Input: React.FC = ({...rest}: TextInputProps) => {
  return <S.Container {...rest} />;
};

export default Input;
