import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Button,
  Linking,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

export default function Index() {
  const onContactoHandler = () => {
    console.log("mailto:yerssondereck@gmail.com");
    Linking.openURL("mailto:yerssondereck@gmail.com");
  };
  return (
    <SafeAreaView style={styles.contenido}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Image
            source={{
              uri: "https://itspectrumsolutions.com/wp-content/uploads/2024/03/reactnative.jpg",
            }}
            style={styles.banner}
          />
          <Image
            source={require("@/assets/images/yo.jpg")}
            style={styles.imagenPersonal}
          />
          <Text style={styles.title}>Nestor Fernandez</Text>
          <View style={styles.contenedorIconos}>
            <FontAwesome6 name="github" size={24} color="darkblue" />
            <FontAwesome6 name="x-twitter" size={24} color="darkblue" />
            <FontAwesome6 name="at" size={24} color="darkblue" />
            <FontAwesome6 name="instagram" size={24} color="darkblue" />
            <FontAwesome6 name="facebook" size={24} color="darkblue" />
          </View>
          <Button title="Contacto" onPress={onContactoHandler} />
          <Text style={styles.bio}>Desarrollador en formación con pasión por la tecnología. Especializándome en React Native con ComIt y enfocado en crear soluciones innovadoras.</Text>
          <Text style={styles.experiencia}>Experiencia</Text>
        </View>
        <View style={{flex: 1, flexDirection: "row", alignItems: "flex-start", gap: 10, borderBottomColor: "#ddd", borderBottomWidth: 1, padding: 10,}}>
            <Image 
            style={{width: 80, height: 80}}
            source={{uri: "https://media.licdn.com/dms/image/v2/C560BAQFoMbh8Jawjhg/company-logo_100_100/company-logo_100_100/0/1631338342207?e=1749081600&v=beta&t=6fgq4Zi_lslt6EwSEinoOUmyLfOT2qaNu9C_ny94y9c",}}
          />

          <View style={{flex: 1, flexDirection: "column"}}>
            <Text style={styles.posicion}>Posición</Text>
            <Text style={styles.empresa}>Empresa</Text>
            <Text style={styles.fecha}>Fecha</Text>
            <Text style={styles.locacion}>Locación</Text>
            <Text style={styles.tecnologias}>Tecnologias</Text>
          </View>
        </View>

        <View style={{flex: 1, flexDirection: "row", alignItems: "flex-start", gap: 10, borderBottomColor: "#ddd", borderBottomWidth: 1, padding: 10,}}>
            <Image 
            style={{width: 80, height: 80}}
            source={require("@/assets/images/experiencia1.jpeg")}
          />

          <View style={{flex: 1, flexDirection: "column"}}>
            <Text style={styles.posicion}>Posición</Text>
            <Text style={styles.empresa}>Empresa</Text>
            <Text style={styles.fecha}>Fecha</Text>
            <Text style={styles.locacion}>Locación</Text>
            <Text style={styles.tecnologias}>Tecnologias</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  contenido: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "darkblue",
  },
  banner: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  imagenPersonal: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "white",
    marginTop: -100,
  },
  contenedorIconos: {
    flexDirection: "row",
    marginVertical: 10,
    gap: 10,
  },
  bio: {
    fontSize: 12,
    lineHeight: 18,
    paddingTop: 10,
    textAlign: "justify"
  },
  experiencia: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
    color: "darkblue",
    marginBlock: 10
  },
  posicion: {
    fontWeight: "bold",
    fontSize: 14
  },
  empresa: {
    fontSize: 12,
    lineHeight: 18
  },
  fecha: {
    fontSize: 12,
    color: "#808080",
    lineHeight: 18
  },
  locacion: {
    fontSize: 12,
    color: "#808080",
    lineHeight: 18,
    marginBottom: 10
  },
  tecnologias: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 18
  }
});
