import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.contanier}>
            <Text> sandbox </Text>
        </View>
        
    )
}

const styles = StyleSheet.create ({
    contanier: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "#ddd",

    }
})