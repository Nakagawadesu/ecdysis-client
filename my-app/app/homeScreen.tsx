import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import StoregeHandler from "@/services/StorageHandler";
const storegeHandler = new StoregeHandler();
export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/NotColorfullPatterns.png")}
          resizeMode="cover"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem Vindo ao Ecdysis!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">
          Faça o Login para usufluir da nossa plataforma
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <Link replace href="/loginScreen">
          Login
        </Link>
      </ThemedView>
      <ThemedView>
        <Link replace href="/registerScreen">
          Register
        </Link>
      </ThemedView>
      <ThemedView>
        <Link replace href="/homeScreen">
          Home
        </Link>
      </ThemedView>
      <ThemedView>
        <Link replace href="/TakePicture">
          TakePicture
        </Link>
      </ThemedView>
      <ThemedView>{`${storegeHandler.getItem("sessionToken")}`}</ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
