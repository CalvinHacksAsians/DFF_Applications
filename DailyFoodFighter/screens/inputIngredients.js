import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function IngredientsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is where you input ingredients!</Text>
            <Button title="this is where you will input ingredients" onPress={() => {
                navigation.navigate('List');
            }} />
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