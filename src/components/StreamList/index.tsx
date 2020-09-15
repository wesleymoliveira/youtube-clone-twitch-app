import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { 
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagTexts,

 } from './styles';

const StreamList: React.FC = () => {
  const StreamItem =() => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail}/>

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar/>
            <StreamUsername numberOfLines={1}>rodzoficial</StreamUsername>
          </StreamHeader>
          <StreamDescription numberOfLines={1}> Front-End com Next Js, Chakra UI e GraphQL</StreamDescription>
          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>
        </StreamRow>
        <TagRow>
          <TagView>
            <TagTexts> Portuguese </TagTexts>
          </TagView>

          <TagView>
            <TagTexts> Web Development </TagTexts>
          </TagView>
          
        </TagRow>

      </StreamColumn>
    </StreamContainer>
  )

  return (
    <List>
      <StreamItem/>
      <StreamItem/>
      <StreamItem/>
    </List>
  );
}

export default StreamList;