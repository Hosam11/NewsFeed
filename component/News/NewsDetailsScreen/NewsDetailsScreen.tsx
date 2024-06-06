import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {Props} from '../../../Util/types';
import ThemeText from '../../UI/ThemeText';
import {colors} from '../../UI/Colors';

const NewsDetailsScreen: React.FC<Props> = ({route}) => {
  const article = route.params.article;
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={{uri: article.urlToImage}} style={styles.image} />
        <ThemeText style={styles.title}>{article.title}</ThemeText>
        <ThemeText
          style={styles.author}
          darkColor={colors.dark.value}
          lightColor={colors.light.value}>
          By {article.author}
        </ThemeText>
        <ThemeText
          style={styles.description}
          darkColor={colors.dark.value}
          lightColor={colors.light.value}>
          {article.description}
        </ThemeText>
        <ThemeText
          style={styles.content}
          darkColor={colors.dark.value}
          lightColor={colors.light.value}>
          {article.content}
        </ThemeText>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  author: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default NewsDetailsScreen;
