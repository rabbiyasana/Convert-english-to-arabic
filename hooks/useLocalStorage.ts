import AsyncStorage from '@react-native-async-storage/async-storage';

export function useLocalStorage() {

    const saveToStorage =  async (key: string, value: any) => {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        console.log('Data saved to local storage');
    }

    const getLocalStorage = async (key: string) => {
        const data = await AsyncStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    }

    const clearLocalStorage = async (key: string) => await AsyncStorage.removeItem(key);
 
    return {
        saveToStorage,
        getLocalStorage,
        clearLocalStorage
    }
}
