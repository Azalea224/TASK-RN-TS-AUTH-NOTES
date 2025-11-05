import AsyncStorage from "@react-native-async-storage/async-storage";

const storeToken = async (token: string) => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    console.error(error);
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    return token;
  } catch (error) {
    console.error(error);
  }
};

const deleteToken = async () => {
  try {
    await AsyncStorage.removeItem("token");
  } catch (error) {
    console.error(error);
  }
};

export { storeToken, getToken, deleteToken };
