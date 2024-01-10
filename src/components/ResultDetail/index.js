import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const ResultDetail = ({ result }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={result.image_url ? { uri: result.image_url } : null }/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} Estrelas, {result.review_count} Análises
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
})

export default ResultDetail