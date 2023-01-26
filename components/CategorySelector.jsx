import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { categories } from "../data/categories";
import { COLORS } from "../constants";

export default function CategorySelector(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Categories</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <Pressable onPress={() => props.changeFn(category.id)}>
            <Text style={styles.categoryTitle}>{category.categoryName}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#123456",
  },
  headerTitle: {
    flex: 1,
    color: "white",
  },
  categoryTitle: {
    color: COLORS.white,
    width: 300,
    fontSize: 50,
  },
});
