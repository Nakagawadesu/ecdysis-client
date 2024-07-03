import React, { useState } from "react";
import { StyleSheet, View, ToastAndroid } from "react-native";
import { Layout, Input, Button, Text, Modal, Card} from "@ui-kitten/components";
import { router } from "expo-router";

import { REACT_APP_API_URL } from "@/types/EnvGambiarra";
export default function RegisterScreen() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState< string | null>(null);
  const[success, setSuccess] = useState< string | null>(null);
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  }); 
  const [showPasswords, setShowPasswords] = useState(false); 

  const togglePasswordVisibility = () => {
    setShowPasswords((prev) => !prev);
  };
  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${REACT_APP_API_URL}/api/users/auth/register`, {
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
      
      if(response.status == 200)
      {
        setSuccess(`Enviamos um email de confirmação para:`);
        setVisible(true);
      }
      if(response.status >= 400)
      {
        const responseJson = await response.json(); 
        ToastAndroid.showWithGravity(
          `${responseJson.message}`,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
      const responseJson = await response.json(); 
      ToastAndroid.showWithGravity(
        `${responseJson.message}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
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
        secureTextEntry={!showPasswords}
        style={styles.input}
      />
      <Input
        placeholder="Confirme sua senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={!showPasswords}
      />
       <Button appearance="ghost" onPress={togglePasswordVisibility} style={styles.showPasswordButton}>
        {showPasswords ? "Ocultar Senhas" : "Mostrar Senhas"}
      </Button>
      {/* {error ? <Text status="danger">{error}</Text> : null} */}
      <Button onPress={handleRegister} disabled={loading} style={styles.button}>
        {loading ? "Processando..." : "Registrar"}
      </Button>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Card style={styles.card} disabled={true}>
            <Text category="h6">{modalContent.title}</Text>
              <Text>
              {success as string}
              </Text>
              <Text  style={{ fontWeight: "bold" }}>
              {email}
              </Text>
            <Button style={styles.button} onPress={() => setVisible(false)}>Fechar</Button>
          </Card>
        </View>
      </Modal>
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
    marginTop: 24,
  }, 

  card: {
    padding: 16,
    width: "80%", // Adjust width as needed
    backgroundColor: "#ffffff", // Background color of the card
    borderRadius: 8, // Optional: Adjust border radius
    shadowColor: "#000000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android shadow elevation
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }, 
  showPasswordButton: {
    top: 0,
    alignSelf: 'flex-end', 
  },
});
