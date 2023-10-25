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
            let passwords = await AsyncStorage.getItem(key);
            passwords = JSON.parse(passwords);
            passwords.push(value);
            console.log('------------adicionado saveItem---------', passwords);
            await AsyncStorage.setItem(key, JSON.stringify(passwords));
        } catch (error) {
            console.log('Erro ao salvar', error);
        }
    }

    const removeItem = async (key, item) => {
        try {
            let passwords = await AsyncStorage.getItem(key);
            passwords = JSON.parse(passwords);
            let findPasswords = passwords.filter(password => password !== item);
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

export default useStorage;