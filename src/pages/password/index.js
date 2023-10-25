import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import useStorage from '../../hooks/userStorage';
import { PasswordItem } from '../password/components/passwordItem';

export function Password() {
    const [passwords, setPasswords] = useState([]);
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {

        async function loadPassword() {
            const passwordsCurrent = await getItem('Gpass');
            setPasswords(passwordsCurrent);
        }

        loadPassword();
    }, [focused]);


    async function handlePasswordDelete(item) {
        const result = await removeItem('Gpass', item);
        alert('Item deletado com sucesso');
        setPasswords(result);
    }

    const EmptyListMessage = () => {
        return (
          <Text>
            Lista Vazia
          </Text>
        );
      };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas Senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                    ListEmptyComponent={EmptyListMessage}
                    style={{ flex: 1, paddingTop: 14 }}
                    data={passwords}     
                    renderItem={({ item }) => <PasswordItem data={item} remove={() => handlePasswordDelete(item)} />}
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
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
    }
});