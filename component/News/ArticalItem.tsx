import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Artical} from '../../models/Artical';

const ArticalItem: React.FC<{artical: Artical}> = ({artical}) => {
  const validImageUrl = artical.urlToImage
    ? artical.urlToImage
    : 'https://via.placeholder.com/150';

  return (
    <Pressable
      onPress={() => {
        console.log('artical: ' + JSON.stringify(artical));
      }}>
      <View style={styles.card}>
        <Image source={{uri: validImageUrl}} style={styles.image} />
        <Text style={styles.title}>{artical.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default ArticalItem;
