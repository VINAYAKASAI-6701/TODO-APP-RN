import useTheme from "@/hooks/useTheme";
import { Text, View, StyleSheet,TouchableOpacity } from "react-native";


import {Link } from "expo-router";
export default function Index() {
    const {toggleDarkMode}=useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Hero Vinay</Text>
      <Text>Hero</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>change background</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center", 
    gap: 10,
  },
  content: {
    fontSize: 22,
  },
});
