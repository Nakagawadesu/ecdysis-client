import React, { useState, useEffect } from "react";
import { StyleSheet, ToastAndroid } from "react-native";
import { Layout, Input, Button, Text } from "@ui-kitten/components";
import { router } from "expo-router";
import { REACT_APP_API_URL } from "@/types/EnvGambiarra";
import StoregeHandler from "@/services/StorageHandler";
import { Stack, useNavigation } from "expo-router";

const storegeHandler = new StoregeHandler();
const parseBlobToJson = async (blob: Blob) => {
  const text = await blob.text();
  return JSON.parse(text);
};

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  const [showPasswords, setShowPasswords] = useState(false); 
  const togglePasswordVisibility = () => {
    setShowPasswords((prev) => !prev);
  };
  useEffect(() => {
    console.log("Component mounted");
    console.log("API URL:", REACT_APP_API_URL);
  }, []);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const handleLogin = async () => {
    setLoading(true);
    setError("");
    console.log("API URL in handleLogin:", REACT_APP_API_URL);

    const apiUrl = `${REACT_APP_API_URL}/api/users/auth/login`;

    if (!REACT_APP_API_URL) {
      setError("API URL is not defined");
      console.error("API URL is not defined");
      setLoading(false);
      return;
    }

    try {
      let response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const responseData = await response.json();

      console.log("Login response:", responseData);
      const message = responseData.message;
      const success = responseData.success;
      success ? router.replace("/") : setApiResponse(message);
      if (success) {
        storegeHandler.storeData(responseData.body);
        router.replace("/homeScreen");
      }
      setApiResponse(responseData.message);
      ToastAndroid.showWithGravity(
        `${responseData.message}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    } catch (err) {
      console.error("Login error:", err);
      ToastAndroid.showWithGravity(
        `${err}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout style={styles.container}>
      <Text category="h1" style={styles.title}>
        Login
      </Text>
      <Input
        placeholder="email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Input
        placeholder="senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPasswords}
      />
       <Button appearance="ghost" onPress={togglePasswordVisibility} style={styles.showPasswordButton}>
        {showPasswords ? "Ocultar Senhas" : "Mostrar Senhas"}
      </Button>
      {/* {error ? <Text status="danger">{error}</Text> : null} */}
      <Button onPress={handleLogin} disabled={loading} style={styles.button}>
        {loading ? "Logging in..." : "Login"}
      </Button>
      <Text
        style={{
          marginTop: 10,
          textAlign: "center",
          color: "red",
          fontSize: 15,
        }}
      >
        {apiResponse == "" ? "" : `${apiResponse}`}
      </Text>
      <Text
        style={{
          paddingBottom: 10,
          textAlign: "center",
          color: "black",
          fontSize: 15,
        }}
      >
         
        Não tem uma conta?
      </Text>
      <Button
        style={styles.button}
        onPress={() => router.push("/registerScreen")}
      >
        Cadastre-se
      </Button>
      <Button
        style={styles.button}
        onPress={() => router.replace("/homeScreen")}
      >
        Home
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    marginBottom: 32,
  },
  input: {
    width: "100%",
    marginBottom: 16,
  },
  button: {
    marginBottom: 16,
    width: "100%",
  },
  showPasswordButton: {
   top: 0,
    alignSelf: 'flex-end',
  },
  easyButton: {
    marginBottom: 16,
    width: "100%",
    backgroundColor: "grey",
  },
});
