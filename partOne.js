// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   //Text,
//   // View,
//   // Image,
//   // TouchableOpacity,
//   // TouchableWithoutFeedback,
//   // TouchableNativeFeedback,
//   // TouchableHighlight,
//   // Alert,
//   SafeAreaView,
//   // Button,
//   View,
//   Platform,
//   // Dimensions
// } from "react-native";
// import {
//   useDimensions,
//   useDeviceOrientation,
// } from "@react-native-community/hooks";

// export default function App() {
//   //  const handlePress =()=> console.log("Text clicked")
//   // console.log(useDeviceOrientation());
//   const { landscape } = useDeviceOrientation();

//   return (
//     <SafeAreaView style={styles.container}>
//       <View
//         style={{
//           backgroundColor: "yellow",
//           width: "100%",
//           height: landscape ? "100%" : "30%",
//         }}
//       ></View>
//       {/* <StatusBar style="auto" /> */}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: "#fff",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     // justifyContent: "center",
//     // alignItems: "center",
//   },
// });

/**
 * import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 2,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          flex: 1,
        }}
      />
    </View>
  );
}



 * 
 */
/**
 * 
 * import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", //horizontal
        justifyContent: "center", //main
        alignItems: "center", //secondary
        alignContent: "center", // works with flexWrap
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          // flexBasis: 100, //width or height
          // flex: 1, //flex grow
          width: 100,
          // flexShrink: 1,
          height: 100,
          // alignSelf: "flex-start"
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          top: 20,
          left: 20,
          // position: "absolute",
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
      {/* <View
        style={{
          backgroundColor: "grey",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "greenyellow",
          width: 100,
          height: 100,
        }}
      // /> */
//   </View>
//   );
// }
