import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


import IngredientsScreen from './inputIngredients';
import RecipeScreen from './selectedRecipe';
import RecipeListScreen from './listRecipe';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is the homescreen</Text>
            <Button title="Start Cooking Dumbass" onPress={() => {
                navigation.navigate('Ingredients');
            }
            } />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});