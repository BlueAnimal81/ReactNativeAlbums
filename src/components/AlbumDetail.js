import React from 'react';
import { Image, Linking, Text, View } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) =>
(
  <Card>
    <CardSection>
      <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.thumbnailStyle}
          source={{ uri: album.thumbnail_image }}
        />
      </View>
      <View style={styles.headerContentStyle}>
        <Text style={styles.headerTextStyle}>{album.title}</Text>
        <Text>{album.artist}</Text>
      </View>
    </CardSection>

    <CardSection>
      <Image
        source={{ uri: album.image }}
        style={styles.imageStyle}
      />
    </CardSection>

    <CardSection>
      <Button onPress={() => Linking.openURL(album.url)}>
        Buy Now
      </Button>
    </CardSection>
  </Card>
);

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};
export default AlbumDetail;
