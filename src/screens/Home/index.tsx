import React from 'react';

import coverImg from '../../assets/cover.png';
import Input from '../../components/Input';
import Card from '../../components/Card';
import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.Header source={coverImg}>
        <Input placeholder="Pesquisar..." />
      </S.Header>

      <S.Content>
        <Card />
      </S.Content>
    </S.Container>
  );
};

export default Home;
