import React, { useState, useEffect } from "react";
import { StyleSheet, ToastAndroid } from "react-native";
import { Layout, Input, Button, Text } from "@ui-kitten/components";
import { router } from "expo-router";
import Toast from "react-native-toast-message";
import { REACT_APP_API_URL } from "@/types/EnvGambiarra";
import StoregeHandler from "@/services/StorageHandler";
const storegeHandler = new StoregeHandler();
const parseBlobToJson = async (blob: Blob) => {
  const text = await blob.text();
  return JSON.parse(text);
};

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  useEffect(() => {
    console.log("Component mounted");
    console.log("API URL:", REACT_APP_API_URL);
  }, []);

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
      if (!success) {
        //store token here
        storegeHandler.storeData(responseData.body);
      }
      setApiResponse(responseData.message);
      ToastAndroid.showWithGravity(
        `${responseData.message}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    } catch (err) {
      console.error("Login error:", err);
      setError((err as Error).message);
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
        secureTextEntry
        style={styles.input}
      />
      {error ? <Text status="danger">{error}</Text> : null}
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
    width: "100%",
  },
});
