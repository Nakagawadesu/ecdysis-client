import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Layout, Text, Button, Card } from "@ui-kitten/components";
import { router } from "expo-router";
import ImagePickerComponent from "@/components/Atoms/ImagePicker";
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
          <Text>
          {"\n"}
          {"\n"}Queratose actínica:
          {"\n"}
          {"\n"}A queratose actínica é causada pela exposição ao sol, resultando em lesões ásperas e escamosas que aparecem nas áreas expostas ao sol. Essas lesões são potencialmente pré-cancerosas e podem evoluir para carcinoma espinocelular se não tratadas. O tratamento pode incluir crioterapia, laser e medicamentos tópicos.
          {"\n"}
          {"\n"}Carcinoma Basocelular:
          {"\n"}
          {"\n"}O carcinoma basocelular é uma forma comum de câncer de pele, causado principalmente por exposição ao sol. Apresenta-se como nódulos perolados ou úlceras, localizados nas áreas frequentemente expostas ao sol. Embora raramente entre em metástase, pode causar danos significativos. O tratamento geralmente envolve cirurgia, radioterapia ou terapia fotodinâmica.
          {"\n"}
          {"\n"}Dermatofibroma:
          {"\n"}
          {"\n"}O dermatofibroma é um nódulo benigno, resultante de uma reação a pequenas lesões na pele. Aparece como manchas firmes e marrom-avermelhados, geralmente indolores. Não há risco de tornar-se lesões malignas, e a remoção cirúrgica é realizada apenas se a lesão causar desconforto ou por razões estéticas.
          {"\n"}
          {"\n"}Melanoma:
          {"\n"}
          {"\n"}O melanoma é um câncer de pele agressivo, originado de danos ao DNA das células da pele, muitas vezes devido à exposição aos raios ultra-violeta. Manifesta-se como manchas irregulares e multicoloridas que crescem ou mudam de forma. Devido ao alto risco da lesão entrar em metástase, o melanoma é extremamente perigoso. O tratamento inclui cirurgia, imunoterapia e radioterapia.
          {"\n"}
          {"\n"}Pintas:
          {"\n"}
          {"\n"}As pintas são crescimentos benignos na pele, apresentando-se como manchas escuras, simétricas e uniformes. Embora a maioria seja inofensiva, algumas podem evoluir para melanoma. O monitoramento regular é recomendado, e a remoção é indicada se houver mudanças suspeitas na aparência da pinta.
          {"\n"}
          {"\n"}Ceratose Benigna Pigmentada:
          {"\n"}
          {"\n"}A ceratose benigna pigmentada é um crescimento benigno das células da pele, caracterizado por lesões escuras e ásperas. Estas lesões não apresentam risco de câncer e são tratadas apenas por razões estéticas, sendo sua remoção opcional.
          {"\n"}
          {"\n"}Ceratose Seborréica:
          {"\n"}
          {"\n"}A ceratose seborréica é um crescimento benigno das células da pele, surgindo como lesões marrons e cerosas que parecem "coladas" na pele. Essas lesões são comuns em adultos mais velhos e não apresentam risco de transformação maligna. A remoção é feita se houver desconforto ou por motivos estéticos.
          {"\n"}
          {"\n"}Lentigo Solar:
          {"\n"}
          {"\n"}O lentigo solar é causado pela exposição prolongada ao sol, resultando em manchas escuras e planas nas áreas expostas. Embora benigno, o lentigo solar indica dano solar acumulado. Tratamentos incluem laser, crioterapia e cremes despigmentantes.
          {"\n"}
          {"\n"}Carcinoma Espinocelular:
          {"\n"}
          {"\n"}O carcinoma espinocelular é um tipo de câncer de pele associado à exposição solar e histórico de queratoses actínicas. Aparece como lesões crostosas e vermelhas que podem ulcerar. Se não tratado, pode entrar em metástase. O tratamento inclui cirurgia, radioterapia e medicamentos tópicos.
          {"\n"}
          {"\n"}Lesões Vasculares:
          {"\n"}
          {"\n"}Lesões vasculares são ocorrem nos vasos sanguíneos e se manifestam como manchas vermelhas, púrpuras ou azuladas. Geralmente são benignas e tratadas por razões estéticas, utilizando laser ou escleroterapia.
</Text>
        </Text>
      </Card>

      <Button style={styles.button} onPress={() => router.push("/analiseScreen")}>
        Fazer uma análise
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
  button: {
    
    marginTop: 24,
  },
});
