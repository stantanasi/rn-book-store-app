import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { categories } from "../data/categories";
import Category from "./Category";

export default function CategorySection(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Categories</Text>
      </View>
      <ScrollView horizontal>
        {categories.map((category, index) => (
          <Category key={index} category={category} />
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
});
