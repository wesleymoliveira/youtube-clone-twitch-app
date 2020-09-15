import React from 'react';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import ThemeToggler from '../ThemeToggler';

import { Container, Avatar, OnlineStatus, RightSide, ButtonHead} from './styles';
import colors from '../../styles/colors';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <OnlineStatus/>
      </Avatar>

      <RightSide>
        <ThemeToggler/>
        <ButtonHead>
          <MaterialIcons
            name="notifications-none"
            size= {26}
            color= {colors.black}
          />
        </ButtonHead>
        <ButtonHead>
          <MaterialCommunityIcons
            name="message-outline"
            size= {26}
            color= {colors.black}
          />
        </ButtonHead>
        <ButtonHead>
          <Feather
            name="search"
            size= {26}
            color= {colors.black}
          />
        </ButtonHead>
      </RightSide>

    </Container>
  );
}

export default Header;