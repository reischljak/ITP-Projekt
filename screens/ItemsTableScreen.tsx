import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native';

interface Item {
    id: string;
    name: string;
    icon: any; // Icon path or URL
}

// Sample items data
const items: Item[] = [
    { id: '1', name: 'Apples', icon: require('../assets/icon.png') },
    { id: '2', name: 'Oranges', icon: require('../assets/icon.png') },
    { id: '3', name: 'Bananas', icon: require('../assets/icon.png') },
    { id: '4', name: 'Grapes', icon: require('../assets/icon.png') },
    { id: '5', name: 'Pineapples', icon: require('../assets/icon.png') },
    { id: '6', name: 'Strawberries', icon: require('../assets/icon.png') },
];

const ItemsTableScreen = () => {
    // Calculate the number of columns based on the item count
    const numColumns = Math.ceil(Math.sqrt(items.length));

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                numColumns={numColumns}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={item.icon} style={styles.icon} />
                        <Text style={styles.itemName}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        margin: 8,
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 8,
    },
    itemName: {
        fontSize: 14,
        textAlign: 'center',
    },
});

export default ItemsTableScreen;
