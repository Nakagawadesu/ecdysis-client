import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import { Button, Card, Modal,Text } from "@ui-kitten/components";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { REACT_APP_API_URL } from "@/types/EnvGambiarra";
import { FileSystemUploadType } from "expo-file-system";
import { classesEnum, ClassIndex,diseaseDescriptions } from "@/types/classes";

export default function ImagePickerComponent() {
  const [image, setImage] = useState<string | null>(null);
  const [imageSelected, setImageSelected] = useState(false);
  const [loading, setLoading] = useState(false);
 const [visible, setVisible] = useState(false);
 const [modalContent , setModalContent] = useState({
  title: '',
  description: '',
  details: ''
 });
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("Image Picker Result:", result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setImageSelected(true);
      setLoading(true);
    }
  };

  const handleUpload = async () => {
    setLoading(true);

    try {

      const apiUrl = `${REACT_APP_API_URL}/api/users/process/image`;
      const uploadResult = await FileSystem.uploadAsync(apiUrl, image as string, {
        httpMethod: 'POST',
        uploadType: FileSystemUploadType.MULTIPART,
        fieldName: 'image',
      });
     
      setLoading(false);

    

      const responseData = JSON.parse(uploadResult.body);

      const { payload, message } = responseData;
      setModalContent({
        title: message ,
        description: ` ${classesEnum[payload as ClassIndex]}`,
        details : ` ${diseaseDescriptions[payload as ClassIndex]}`
      });
      setVisible(true);
      console.log("Payload:", payload);
      console.log("Message:", message);
    } catch (err) {
      console.error("Error during fetch:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button style={styles.button} onPress={pickImage} disabled={loading}>
        {loading ? "Carregando..." : "Escolha uma imagem da Galeria"}
      </Button>
      {imageSelected && <Image source={{ uri: image }} style={styles.image} />}
      <Button style={styles.button} onPress={handleUpload} disabled={!imageSelected}>
        Upload Image
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
      O nossa IA classificou a imagem como:
      <Text style={{ fontWeight: "bold" }}>
        {modalContent.description}
      </Text>
    </Text>
            <Text>{modalContent.details}</Text>
            <Button onPress={() => setVisible(false)}>Fechar</Button>
          </Card>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginTop: 20,
    width: 300,
    height: 200,
    resizeMode: "cover",
  },
  button:{
    marginTop: 20,
    width:  "100%"
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
});