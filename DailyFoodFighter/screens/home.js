import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import { homeStyle } from '../styles/globalStyles';
const fontStyles = ["normal", "italic"];

export default function HomeScreen({ navigation }) {
    return (
        <View style={homeStyle.container}>
            <Image
                style = {{width: 250, height: 85, marginTop: 0}}
                source={require('../pics/logo.jpg')} 
            />
            
            <Image
                style = {{width: 150, height: 200, marginTop: 20}}
                source = {{uri: 'https://thumbs.dreamstime.com/b/happy-chef-logo-cooking-restaurant-food-symbol-194682894.jpg'}}
            />

            <Text style = {{fontStyle: 'italic', fontSize: 13, fontWeight: ''}}>
                {"\n"}{"\n"}There is no love sincerer than the love of food.
            </Text>

            <Text style = {{fontStyle: 'italic', fontSize: 11, fontWeight: 'bold'}}>
                {"\n"} - George Bernard Shaw - {"\n"}
            </Text>
            
            <View style={homeStyle.homeButton} >
                <Button
                    color='black'
                    title="Press to start"
                    fontWeight= 'bold'
                    onPress={() => {
                        navigation.navigate('Ingredients');
                    }
                    } />
            </View>
            
            <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}CalvinHacks2022</Text>
            <Text>©Calvin University</Text>

        </View>
    );
}