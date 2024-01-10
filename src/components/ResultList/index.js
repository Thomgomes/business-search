import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ResultDetail from '../ResultDetail'

const ResultList = ({ title, results }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {/* <Text>results: {results.length}</Text> */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <ResultDetail result={item}/>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10.
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
})

export default ResultList