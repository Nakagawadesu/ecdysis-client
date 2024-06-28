import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Layout, Input, Button, Text } from "@ui-kitten/components";
import { router } from "expo-router";

import { REACT_APP_API_URL } from "@/types/EnvGambiarra";
export default function RegisterScreen() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleRegister = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          confirmPassword,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      router.replace("Home");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Layout style={styles.container}>
      <Text category="h1" style={styles.title}>
        Cadastre-se
      </Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setUsername}
        style={styles.input}
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Input
        placeholder="Confirme sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {error ? <Text status="danger">{error}</Text> : null}
      <Button onPress={handleRegister} disabled={loading} style={styles.button}>
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
