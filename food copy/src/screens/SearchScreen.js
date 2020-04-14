import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = ({}) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    const filterResultsByPrice = (price) => {
        //price === '$ || '$$ || '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>{results.length} results Found.</Text>
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')}category="Cost Effective"/>
                <ResultsList results={filterResultsByPrice('$$')} category="Bit Pricier"/>
                <ResultsList results={filterResultsByPrice('$$$')} category="Big Spender"/>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;