import React from 'react';
import { View } from 'react-native';

import { 
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  UserName,
  Info,
  RightSide,
  WhiteCircle,


 } from './styles';

const ChannelList: React.FC = () => {
  const ChannelItems =() => (
    <ChannelContainer>
      <LeftSide>
        <Avatar/>
        <Column>
          <UserName>Wesley Oficial</UserName>
          <Info> 49 Videos</Info>
        </Column>
      </LeftSide>
      <RightSide>
        <WhiteCircle/>

      </RightSide>
    </ChannelContainer>
  )
  return (
    <List>
      <ChannelItems/>
      <ChannelItems/>
      <ChannelItems/>
      <ChannelItems/>
      <ChannelItems/>
      <ChannelItems/>


    </List>
  );
}

export default ChannelList;