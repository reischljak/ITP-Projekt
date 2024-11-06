import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native';
import items from "../components/ItemList";

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
