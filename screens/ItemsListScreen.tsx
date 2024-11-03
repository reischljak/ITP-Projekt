import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Item {
    id: string;
    name: string;
    amount: number;
}

const items: Item[] = [
    { id: '1', name: 'Apples', amount: 5 },
    { id: '2', name: 'Oranges', amount: 3 },
    { id: '3', name: 'Bananas', amount: 6 },
];

const formatJSON = (item: Item) => {
    return `{
  "id": "${item.id}",
  "name": "${item.name}",
  "amount": ${item.amount}
}`;
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
        backgroundColor: '#282c34',
        padding: 12,
        marginBottom: 8,
        borderRadius: 8,
    },
    jsonText: {
        fontFamily: 'Courier New',
        fontSize: 14,
        color: '#d4d4d4',
    },
});

export default ItemsListScreen;
