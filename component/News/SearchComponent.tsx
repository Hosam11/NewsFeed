import React, {useContext, useState} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {ArticlesContext} from '../../store/articals-context';
import language from '../Strings';

const SearchComponent = () => {
  const articlesContext = useContext(ArticlesContext);

  const handleSearch = (text: string) => {
    articlesContext.filterArticlesHandler(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={language.search}
        onChangeText={handleSearch}
      />
      <Text style={styles.result}>
        {`${language.result}: ${articlesContext.filtredArticles.length}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 4,
    paddingHorizontal: 10,
  },
  result: {
    paddingVertical: 8,
  },
});

export default SearchComponent;
