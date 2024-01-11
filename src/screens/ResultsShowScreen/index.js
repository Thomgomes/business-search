import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import yelp from '../../api/yelp'


const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null)
  // const navigation = useNavigation()
  const id = route.params.item.id



  const getResult = async id => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item}}/>
        }}
      />
      {/* <TouchableOpacity onPress={() => navigation.goBack()}><Text>Voltar</Text></TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  }
})

export default ResultsShowScreen