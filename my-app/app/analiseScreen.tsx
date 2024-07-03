import React from "react";
import { StyleSheet, ScrollView ,View } from "react-native";
import { Layout, Text, Button, Card } from "@ui-kitten/components";
import { router } from "expo-router";

import ImagePickerComponent from "@/components/Atoms/ImagePicker";
export default function analiseScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
     <Text category="h1" style={styles.title}>
          Analise uma Imagem 
        </Text>
        
     
      <Card style={styles.card}>
        <Text category="h5" style={styles.cardTitle}>
          Antes de tudo
        </Text>
        <Text>
        Nosso modelo de aprendizado de máquina foi treinado para identificar condições de pele específicas com uma acurácia de 95%. Isso significa que, em 95% dos casos, o modelo faz previsões corretas sobre as doenças para as quais foi treinado. {"\n"} {"\n"}

No entanto, é crucial entender que o modelo pode cometer erros em suas predições. Um resultado fornecido pelo modelo não deve ser interpretado como um diagnóstico definitivo. A tecnologia de aprendizado de máquina é uma ferramenta poderosa, mas não substitui a avaliação e o julgamento de um profissional de saúde qualificado. {"\n"} {"\n"}

Portanto, recomendamos fortemente que você consulte um médico ou dermatologista para confirmar qualquer previsão feita pelo modelo. Apenas um profissional de saúde pode fornecer um diagnóstico preciso e aconselhamento apropriado baseado em uma avaliação completa de sua condição.
{"\n"} {"\n"}
Sua saúde é nossa prioridade, e a tecnologia deve ser utilizada como um suporte adicional ao cuidado médico profissional.
        </Text>
      </Card>
      
      <Card style={styles.card}>
      <Text category="h5" style={styles.cardTitle}>
          Selecione uma imagem 
        </Text>
        <Text>
       Evite Tirar selfies ou fotos de partes do corpo que não sejam a pele. {"\n"}
       Preferenciamnete tire fotos de partes do corpo que tenham uma boa iluminação e que a pele esteja bem visível  e com proximidade.{"\n"}
       Além disso se seu dispositivo tiver a função camera Macro utilize-a para tirar fotos mais detalhadas.
        </Text>
      <ImagePickerComponent/>
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.orDivider}>OU</Text>
        <View style={styles.dividerLine} />
      </View>
        <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={() => router.push("/camera")}>
        Tire uma Foto
      </Button>
      </View>


      </Card>

    
      
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
    marginTop: 24,
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
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  button: {
    marginTop: 24,
    width : "100%"
    
  },
  orDivider: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    paddingHorizontal: 10,
    
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
});
