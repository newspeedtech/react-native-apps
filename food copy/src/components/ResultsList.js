import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';
import { isFrontCameraAvailable } from 'expo/build/AR';

const ResultsList = ({category, results, navigation}) => {
    if (!results.length){
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.category}>{category}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    category: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    },
    container: {
        marginBottom: 15
    }
});

export default withNavigation(ResultsList);