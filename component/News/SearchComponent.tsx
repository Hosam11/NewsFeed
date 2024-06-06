import React, {useContext, useState} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {ArticlesContext} from '../../store/articals-context';
import {ThemeContext} from '../../store/theme-context';
import {colors} from '../UI/Colors';
import {getLocalizationText} from '../../Util/lang';

const SearchComponent = () => {
  const articlesContext = useContext(ArticlesContext);
  const themeContext = useContext(ThemeContext);
  const handleSearch = (text: string) => {
    articlesContext.filterArticlesHandler(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: themeContext.isDarkTheme() ? 'white' : 'grey',
            color: themeContext.isDarkTheme()
              ? colors.dark.title
              : colors.light.title,
          },
        ]}
        placeholder={getLocalizationText('search')}
        onChangeText={handleSearch}
        placeholderTextColor={
          themeContext.isDarkTheme() ? colors.dark.title : colors.light.title
        }
      />
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
    borderWidth: 1,
    marginTop: 4,
    paddingHorizontal: 10,
  },
  result: {
    paddingVertical: 8,
  },
});

export default SearchComponent;
