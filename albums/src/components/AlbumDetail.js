import React from 'react';
import { Text } from 'react-native';
import Card from './card';
import CardSection from './CardSection';

const AlbumDetail = (props) => (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
export default AlbumDetail;
