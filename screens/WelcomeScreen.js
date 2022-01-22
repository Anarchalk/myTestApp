//rfs - react stateless function
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import colors from "../config/colors";
import ViewImageScreen from "./ViewImageScreen";

export default WelcomeScreen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("ViewImageScreen");
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <TouchableOpacity onPress={pressHandler} style={styles.loginButton}>
        <View style={styles.loginButton}>
          <Text>View Image Screen</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.registerButton}>
        <Text>Register</Text>
      </View>
    </ImageBackground>
  );
};

//rnss - stylesheet shortcut
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    position: "relative",
    alignItems: "center",
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    position: "relative",
    alignItems: "center",
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});
