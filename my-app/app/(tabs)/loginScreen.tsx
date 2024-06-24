import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Layout, Input, Button, Text } from "@ui-kitten/components";
import { router } from "expo-router";
import {REACT_APP_API_URL} from "@/types/EnvGambiarra";
export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");
  
    const MIN_WAIT_TIME = 2000; 
    const apiUrl = `${REACT_APP_API_URL}/api/users/auth/login`;
    const loginRequest = async () => {
      try {
        console.log(apiUrl)
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
  
        if (!response.ok) {
          throw new Error("Login failed");
        }
        const data = await response.json();
        router.replace("Home");
      } catch (err) {
        setError((err as Error).message);
        throw err; // Re-throw the error to ensure loading state is reset
      } finally {
        setLoading(false); // Move setLoading(false) inside the finally block
      }
    };
  
    const timer = new Promise<void>((resolve) => setTimeout(resolve, MIN_WAIT_TIME));
  
    try {
      await Promise.all([loginRequest(), timer]);
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
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {error ? <Text status="danger">{error}</Text> : null}
      <Button onPress={()=>handleLogin()} disabled={loading} style={styles.button}>
        {loading ? "Logging in..." : "Login"}
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
    width: "100%",
  },
});
