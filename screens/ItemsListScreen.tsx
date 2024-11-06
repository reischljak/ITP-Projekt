import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import items from "../components/ItemList";
import Item from "../components/Item";

const formatJSON = (item: Item) => {
    return `${item.name}
      ${item.amount}`;
};

const ItemsListScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.jsonContainer}>
                        <Text style={styles.jsonText}>{formatJSON(item)}</Text>
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
        backgroundColor: '#f8f9fa',
    },
    jsonContainer: {
        backgroundColor: '#f0f0f0',
        padding: 12,
        marginBottom: 8,
        borderRadius: 8,
    },
    jsonText: {
        fontFamily: 'Courier New',
        fontSize: 14,

    },
});

export default ItemsListScreen;
