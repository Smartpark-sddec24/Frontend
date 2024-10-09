import * as React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};
export default SearchBar;
