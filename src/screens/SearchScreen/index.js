import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import SearchBar from '../../components/SearchBar'
import yelp from '../../api/yelp'
import useResult from '../../hooks/useResult'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResult()


    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>você encontrou um total de {results.length} resultados</Text>
        </View>
    )
}

export default SearchScreen