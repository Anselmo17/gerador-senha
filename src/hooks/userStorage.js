import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {

    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        } catch (error) {
            console.log('Erro ao buscar', error);
            return [];
        }
    }

    const saveItem = async (key, value) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            passwords.push(value);
            await AsyncStorage.setItem(key, JSON.stringify(passwords));
           
        } catch (error) {
            console.log('Erro ao salvar', error);
        }
    }

    const removeItem = async (key, item) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            const findPasswords = passwords.filter(password => password !== item);
            await AsyncStorage.setItem(key, JSON.stringify(findPasswords));
           return findPasswords;
        } catch (error) {
            console.log('Erro ao remover', error);
        }
    }

    return {
        getItem,
        saveItem,
        removeItem
    }
}