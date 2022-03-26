import { StatusBar, useState } from 'expo-status-bar';
import { Picker, Button, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';



export default function IngredientsScreen({ navigation }) {
    // const App = () => {
    //     const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View>
            <Text style={styles.header}>This is where you input ingredients!{'\n'}</Text>
            <Text style={styles.blank}>  </Text>
            <Text style={styles.protein}>Please pick your protein!{'\n'}</Text>
            <Picker
            // selectedValue={selectedValue}

            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="--- Choose Your Protein ---" value="NULL" />
                <Picker.Item label="Bacon" value="bacon" />
                <Picker.Item label="Beef" value="beef" />
                <Picker.Item label="Chicken" value="chicken" />
                <Picker.Item label="Egg" value="egg" />
                <Picker.Item label="Lamb" value="lamb" />
                <Picker.Item label="Pork" value="pork" />
                <Picker.Item label="Salmon" value="salmon" />
                <Picker.Item label="Shrimp" value="Shrimp" />
                <Picker.Item label="NOT APPLICABLE" value="NULL" />





            </Picker>
            <Text style={styles.vege}>Please pick your vegetables! (if applicable)</Text>
            <Picker
            // selectedValue={selectedValue}

            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="--- Choose Your Vegetable ---" value="NULL" />
                <Picker.Item label="Avocado" value="avocado" />
                <Picker.Item label="Black Pepper" value="black pepper" />
                <Picker.Item label="Black Beans" value="black beans" />
                <Picker.Item label="Cabbages" value="cabbage" />
                <Picker.Item label="Carrots" value="carrot" />
                <Picker.Item label="Celery" value="celery" />
                <Picker.Item label="Chickpeas" value="chickpeas" />
                <Picker.Item label="Cilantro" value="cilantro" />
                <Picker.Item label="Corn" value="corn" />
                <Picker.Item label="Cucumber" value="cucumber" />
                <Picker.Item label="Garlic" value="garlic" />
                <Picker.Item label="Green Beans" value="green beans" />
                <Picker.Item label="Green Peas" value="green peas" />
                <Picker.Item label="Jalepeno" value="jalepeno" />
                <Picker.Item label="Mushrooms" value="mushrooms" />
                <Picker.Item label="Onions" value="onion" />
                <Picker.Item label="Potatoes" value="potato" />
                <Picker.Item label="Red Peppers" value="Red Peppers" />
                <Picker.Item label="Romain Lettuce" value="romain lettuce" />
                <Picker.Item label="Salad Greens" value="salad greens" />
                <Picker.Item label="Spinach" value="spinach" />
                <Picker.Item label="Tomatoes" value="tomatoes" />
                <Picker.Item label="NOT APPLICABLE" value="NULL" />


            </Picker>
            <Picker
            // selectedValue={selectedValue}

            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="--- Choose Your Vegetable ---" value="NULL" />
                <Picker.Item label="Avocado" value="avocado" />
                <Picker.Item label="Black Pepper" value="black pepper" />
                <Picker.Item label="Black Beans" value="black beans" />
                <Picker.Item label="Cabbages" value="cabbage" />
                <Picker.Item label="Carrots" value="carrot" />
                <Picker.Item label="Celery" value="celery" />
                <Picker.Item label="Chickpeas" value="chickpeas" />
                <Picker.Item label="Cilantro" value="cilantro" />
                <Picker.Item label="Corn" value="corn" />
                <Picker.Item label="Cucumber" value="cucumber" />
                <Picker.Item label="Garlic" value="garlic" />
                <Picker.Item label="Green Beans" value="green beans" />
                <Picker.Item label="Green Peas" value="green peas" />
                <Picker.Item label="Jalepeno" value="jalepeno" />
                <Picker.Item label="Mushrooms" value="mushrooms" />
                <Picker.Item label="Onions" value="onion" />
                <Picker.Item label="Potatoes" value="potato" />
                <Picker.Item label="Red Peppers" value="Red Peppers" />
                <Picker.Item label="Romain Lettuce" value="romain lettuce" />
                <Picker.Item label="Salad Greens" value="salad greens" />
                <Picker.Item label="Spinach" value="spinach" />
                <Picker.Item label="Tomatoes" value="tomatoes" />
                <Picker.Item label="NOT APPLICABLE" value="NULL" />
            </Picker>
            <Picker
            // selectedValue={selectedValue}

            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="--- Choose Your Vegetable ---" value="NULL" />
                <Picker.Item label="Avocado" value="avocado" />
                <Picker.Item label="Black Pepper" value="black pepper" />
                <Picker.Item label="Black Beans" value="black beans" />
                <Picker.Item label="Cabbages" value="cabbage" />
                <Picker.Item label="Carrots" value="carrot" />
                <Picker.Item label="Celery" value="celery" />
                <Picker.Item label="Chickpeas" value="chickpeas" />
                <Picker.Item label="Cilantro" value="cilantro" />
                <Picker.Item label="Corn" value="corn" />
                <Picker.Item label="Cucumber" value="cucumber" />
                <Picker.Item label="Garlic" value="garlic" />
                <Picker.Item label="Green Beans" value="green beans" />
                <Picker.Item label="Green Peas" value="green peas" />
                <Picker.Item label="Jalepeno" value="jalepeno" />
                <Picker.Item label="Mushrooms" value="mushrooms" />
                <Picker.Item label="Onions" value="onion" />
                <Picker.Item label="Potatoes" value="potato" />
                <Picker.Item label="Red Peppers" value="Red Peppers" />
                <Picker.Item label="Romain Lettuce" value="romain lettuce" />
                <Picker.Item label="Salad Greens" value="salad greens" />
                <Picker.Item label="Spinach" value="spinach" />
                <Picker.Item label="Tomatoes" value="tomatoes" />
                <Picker.Item label="NOT APPLICABLE" value="NULL" />
            </Picker>
            <Picker
            // selectedValue={selectedValue}

            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="--- Choose Your Vegetable ---" value="NULL" />
                <Picker.Item label="Avocado" value="avocado" />
                <Picker.Item label="Black Pepper" value="black pepper" />
                <Picker.Item label="Black Beans" value="black beans" />
                <Picker.Item label="Cabbages" value="cabbage" />
                <Picker.Item label="Carrots" value="carrot" />
                <Picker.Item label="Celery" value="celery" />
                <Picker.Item label="Chickpeas" value="chickpeas" />
                <Picker.Item label="Cilantro" value="cilantro" />
                <Picker.Item label="Corn" value="corn" />
                <Picker.Item label="Cucumber" value="cucumber" />
                <Picker.Item label="Garlic" value="garlic" />
                <Picker.Item label="Green Beans" value="green beans" />
                <Picker.Item label="Green Peas" value="green peas" />
                <Picker.Item label="Jalepeno" value="jalepeno" />
                <Picker.Item label="Mushrooms" value="mushrooms" />
                <Picker.Item label="Onions" value="onion" />
                <Picker.Item label="Potatoes" value="potato" />
                <Picker.Item label="Red Peppers" value="Red Peppers" />
                <Picker.Item label="Romain Lettuce" value="romain lettuce" />
                <Picker.Item label="Salad Greens" value="salad greens" />
                <Picker.Item label="Spinach" value="spinach" />
                <Picker.Item label="Tomatoes" value="tomatoes" />
                <Picker.Item label="NOT APPLICABLE" value="NULL" />
            </Picker>
            <Text style={styles.vege}>Please pick your Spices! (if applicable)</Text>
            <Picker
            // selectedValue={selectedValue}

            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="--- select Spice ---" value="NULL" />
                <Picker.Item label="Basil" value="basil" />
                <Picker.Item label="Chives" value="chives" />
                <Picker.Item label="Cinnamon" value="cinnamon" />
                <Picker.Item label="Cumin" value="Cumin" />
                <Picker.Item label="Oregano" value="oregano" />
                <Picker.Item label="Parsely" value="parsely" />
                <Picker.Item label="Rosemary" value="rosemary" />
                <Picker.Item label="Thyme" value="thyme" />
                <Picker.Item label="Shallots" value="shallots" />
                <Picker.Item label="NOT APPLICABLE" value="NULL" />


            </Picker>
            <Text style={styles.vege}>Others... (if applicable)</Text>
            <Picker
            // selectedValue={selectedValue}

            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="--- select Others ---" value="NULL" />
                <Picker.Item label="Brandy" value="brandy" />
                <Picker.Item label="Butter" value="butter" />
                <Picker.Item label="Chocolate" value="godiva chocolate" />
                <Picker.Item label="Cocoa Powder" value="cocoa powder" />
                <Picker.Item label="Cream Cheese" value="cream cheese" />
                <Picker.Item label="Dark Rum" value="dark rum" />
                <Picker.Item label="Golden Syrup" value="golden syrup" />
                <Picker.Item label="Lemon Juice" value="lemon juice" />
                <Picker.Item label="Pecan" value="pecan" />
                <Picker.Item label="Pie Shell" value="pie shell" />
                <Picker.Item label="Tar Tar" value="tar tar" />
                <Picker.Item label="Vanilla" value="vanilla" />
                <Picker.Item label="Whipping Cream" value="whipping cream" />
                <Picker.Item label="White Wine" value="white wine" />
                <Picker.Item label="NOT APPLICABLE" value="NULL" />





            </Picker>

            <Button style={styles.buttonStyle} title="Find possible recipes!" onPress={() => {
                navigation.navigate('List');
            }} />
            <StatusBar style="auto" />
        </View>);
    // };
}



const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    blank: {
        flex: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    protein: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    vege: {
        fontWeight: 'bold',
        fontSize: 14,
    },

});


