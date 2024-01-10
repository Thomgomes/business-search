import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar'
import useResult from '../../hooks/useResult'
import ResultList from '../../components/ResultList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResult()

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList title='Custo-benefício' results={filterResultByPrice('$')} />
                <ResultList title='Pouco árduo' results={filterResultByPrice('$$')} />
                <ResultList title='Grandes Consumidores' results={filterResultByPrice('$$$')} />
            </ScrollView>
        </>
    )
}

// const styles = StyleSheet.create({

// })

export default SearchScreen