import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Fontisto name="search" size={35} style={styles.iconStyle}/>
      <TextInput 
      autoCapitalize='none'
      autoCorrect={false}
      style={styles.inputStyle} 
      placeholder='Procurar algo'
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#E6E6E6',
    height: 50,
    borderRadius: 20,
    borderColor: '#181717',
    borderWidth: 2,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconStyle: {
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
})
export default SearchBar