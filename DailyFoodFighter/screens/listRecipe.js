import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function RecipeListScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is where the recipes are listed</Text>
            <Button title="select recipe" onPress={() => {
                navigation.navigate('Recipe');
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