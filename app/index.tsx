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
import { TarjetaExperiencia } from "@/components/TarjetaExperiencia";
import { experiencias } from "@/data/experiencias";
import { Iconos } from "@/components/Iconos";

export default function Index() {
  const onGithubPressHandler = () => {
    Linking.openURL("https://github.com/Adrianfer4");
  };
  const onTwitterPressHandler = () => {
    Linking.openURL("https://x.com/yerssondereck");
  };
  const onAtPressHandler = () => {
    Linking.openURL("https://www.linkedin.com/in/nestor-fernandezb/");
  };
  const onInstagramPressHandler = () => {
    Linking.openURL("https://www.instagram.com/fernandez_pipe/");
  };
  const onFacebookPressHandler = () => {
    Linking.openURL("https://www.facebook.com/pipe.fernandez.1806");
  };

  const onContactoHandler = () => {
    Linking.openURL("mailto:yerssondereck@gmail.com");
  };
  const renderExperiencias = () =>
    experiencias.map((experiencia, index) => {
      return (
        <TarjetaExperiencia
          key={`${index}-${experiencia.empresa}-${experiencia.posicion}`}
          logo={experiencia.logo}
          posicion={experiencia.posicion}
          empresa={experiencia.empresa}
          fecha={experiencia.fecha}
          locacion={experiencia.locacion}
          tecnologias={experiencia.tecnologias}
        />
      );
    });
  return (
    <SafeAreaView style={styles.contenido}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Image
            source={require("@/assets/images/portada.png")}
            style={styles.banner}
          />
          <Image
            source={require("@/assets/images/yo1.png")}
            style={styles.imagenPersonal}
          />
          <Text style={styles.title}>Nestor Fernandez</Text>

          <Iconos
            onGithubPress={onGithubPressHandler}
            onTwitterPress={onTwitterPressHandler}
            onAtPress={onAtPressHandler}
            onInstagramPress={onInstagramPressHandler}
            onFacebookPress={onFacebookPressHandler}
          />

          <Button title="Contacto" onPress={onContactoHandler} />
          <Text style={styles.bio}>
            Desarrollador en formación con pasión por la tecnología.
            Especializándome en React Native con ComIt y enfocado en crear
            soluciones innovadoras.
          </Text>
          <Text style={styles.experiencia}>Experiencia</Text>
        </View>

        {renderExperiencias()}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  contenido: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: 900,
    color: "black",
  },
  banner: {
    width: "100%",
    aspectRatio: 15 / 7,
  },
  imagenPersonal: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: "white",
    marginTop: -75,
  },
  bio: {
    fontSize: 12,
    lineHeight: 18,
    paddingTop: 10,
    textAlign: "justify",
  },
  experiencia: {
    fontWeight: 900,
    fontSize: 20,
    marginTop: 20,
    color: "black",
    marginBlock: 10,
  },
});
