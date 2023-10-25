import React from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';


export function PasswordItem({ data, remove }) {
    return (
        <Pressable key={data} onLongPress={remove} style={styles.container}>
            <Text style={styles.text} >
                {data}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0e0e0e',
        padding: 14,
        width: '100%',
        marginBottom: 14,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'#fff'
    }
})