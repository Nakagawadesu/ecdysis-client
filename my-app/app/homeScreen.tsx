import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Layout, Text, Button, Card } from "@ui-kitten/components";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Layout style={styles.headerContainer}>
        <Text category="h1" style={styles.title}>
          Bem-vindo ao Ecdysis
        </Text>
        <Text category="s1" style={styles.subtitle}>
          Envie fotos da sua pele para análise usando um modelo CNN
        </Text>
      </Layout>

      <Card style={styles.card}>
        <Text category="h5" style={styles.cardTitle}>
          Sobre o Projeto
        </Text>
        <Text>
          O Ecdysis é um aplicativo desenvolvido para ajudar na análise de
          doenças de pele. Utilizando um modelo de rede neural convolucional
          (CNN), você pode enviar fotos da sua pele para receber uma análise
          preliminar.
        </Text>
      </Card>

      <Card style={styles.card}>
        <Text category="h5" style={styles.cardTitle}>
          Doenças de Pele que nosso modelo pode analisar:
          {"\n"}- Eczema
          {"\n"}- Psoríase
          {"\n"}- Melanoma
          {"\n"}- Dermatite de Contato
        </Text>
      </Card>

      <Button style={styles.button} onPress={() => router.push("/takePicture")}>
        Enviar Foto
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    marginBottom: 24,
    alignItems: "center",
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "center",
  },
  card: {
    marginVertical: 8,
    padding: 16,
  },
  cardTitle: {
    marginBottom: 8,
  },
  button: {
    marginTop: 24,
  },
});
