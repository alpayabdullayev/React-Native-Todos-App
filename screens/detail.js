import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import styles from "../styles/Detail.styles.js";
import { StatusBar } from "expo-status-bar";


export default function DetailsScreen({ route }) {
  const { todo } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>Detail page for: {todo.todo}</Text>
        <Text style={styles.text}>Detail id: {todo.id}</Text>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
