// app/LoginScreen.tsx
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Input, Button, Text } from '@ui-kitten/components';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      // Handle successful login (e.g., navigate to home screen)
      router.replace('Home'); // Assuming you have a 'Home' screen
    } catch (err) {
    setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout style={styles.container}>
      <Text category='h1' style={styles.title}>Login</Text>
      <Input
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <Input
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {error ? <Text status='danger'>{error}</Text> : null}
      <Button onPress={handleLogin} disabled={loading} style={styles.button}>
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    marginBottom: 32,
  },
  input: {
    width: '100%',
    marginBottom: 16,
  },
  button: {
    width: '100%',
  },
});
