import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import useStorage from '../../hooks/userStorage';

export function Password() {
    const [passwords, setPasswords] = useState([]);
    const focused = useIsFocused();
    const { getItem } = useStorage();

    useEffect(() => {

        async function loadPassword() {
            const passwordsCurrent = await getItem('Gpass');
            console.log('----- retorno dados ---------', passwordsCurrent);
            setPasswords(passwordsCurrent);
        }

        loadPassword();
    }, [focused]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas Senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                style={{flex:1, paddingTop:14}}
                data={passwords}
                keyExtractor={({item})=>String(item)}
                renderItem={({item})=><Text>{item}</Text>}
                />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#392de9',
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    content:{
        flex:1,
        paddingLeft: 14,
        paddingRight: 14,
    }
});