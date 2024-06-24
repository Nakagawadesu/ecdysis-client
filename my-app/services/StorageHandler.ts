import AsyncStorage from "@react-native-async-storage/async-storage";
import { sessionToken, userPreference, userProfile } from "@/types/storageData";
import {
  isSessionToken,
  isUserPreference,
  isUserProfile,
} from "@/helpers/TypeCheckers";

class StoregeHandler {
  public storeData = async (
    data: sessionToken | userPreference | userProfile
  ) => {
    try {
      let keyName!: string;
      isSessionToken(data)
        ? (keyName = "sessionToken")
        : isUserPreference(data)
        ? (keyName = "userPreference")
        : isUserProfile(data)
        ? (keyName = "userProfile")
        : null;
      if (!keyName) {
        throw new Error("Invalid data type");
      }
      await this.storeString(keyName, data);
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  private storeString = async (
    keyName: string,
    data: sessionToken | userPreference | userProfile
  ) => {
    Object.keys(data).forEach(async (key: string) => {
      try {
        await AsyncStorage.setItem(
          `${keyName}.${key}`,
          `${data[key as keyof (sessionToken | userPreference | userProfile)]}`
        );
      } catch (error) {
        console.log(error);
        return null;
      }
    });
  };

  public getItem = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

export default StoregeHandler;
