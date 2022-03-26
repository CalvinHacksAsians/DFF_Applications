import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { globalStyles } from '../styles/globalStyles';

export default function HomeScreen({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>This is the homescreen</Text>
            <View style={globalStyles.homeButton}>
                <Button
                    color='blue'
                    title="Start Cooking Dumbass"
                    onPress={() => {
                        navigation.navigate('Ingredients');
                    }
                    } />
            </View>

        </View>
    );
}