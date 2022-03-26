import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Alert, Button, FlatList, Linking, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import IngredientsScreen from './inputIngredients';

export default function RecipeListScreen({ route, navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getRecipes = async () => {
       try {
        const response = await fetch('https://raw.githubusercontent.com/CalvinHacksAsians/DFF_Database/main/recipedb.json');
        const json = await response.json();
        setData(json.recipes);
        const parseDB = JSON.parse(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getRecipes();
    }, []);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    // const parseDB = JSON.parse(json);
    // choices.contains(parseDB);

  
    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text onPress={() =>{
                  Alert.alert(
                      "Press 'OK' to go to source.",
                      item.recipeInfo.source,
                      [
                          {
                              text: "OK",
                              onPress: () => {
                                Linking.openURL(item.recipeInfo.source)
                              }
                          }
                      ]
                  )
                // alert(item.recipeInfo.source);
              }}> {item.recipeInfo.name}</Text>
            )}
          />
        )}
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});