import React from 'react';

import unitedImg from '../../assets/united.png';
import * as S from './styles';

const Card: React.FC = () => {
  return (
    <S.Container animation="slideInDown" duration={2000}>
      <S.Image
        source={unitedImg}
        resizeMode="contain"
        animation="pulse"
        delay={100}
        duration={500}
        direction="alternate"
        iterationCount="infinite"
      />

      <S.Title>Manchester United</S.Title>
      <S.Foundation>1878</S.Foundation>
    </S.Container>
  );
};

export default Card;
