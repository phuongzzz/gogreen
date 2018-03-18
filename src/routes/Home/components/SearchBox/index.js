import React from "react";
import {Text} from "react-native";
import {View, InputGroup, Input} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from './SearchBoxStyles.js';

export const SearchBox = () => {
  return(
    <View style={styles.searchBox}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Search Location</Text>
        <InputGroup>
          <Icon name="search" size={15} color="#ff5e3a" />
          <Input style={styles.inputSearch} placeholder="Choose your location"/>
        </InputGroup>
      </View>
    </View>
  );
}

export default SearchBox;

