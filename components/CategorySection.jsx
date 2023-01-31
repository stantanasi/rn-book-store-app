import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  FlatList,
} from "react-native";
import { categories } from "../data/categories";
import Category from "./Category";
import CategorySelector from "./CategorySelector";
import { useState } from "react";
import { COLORS } from "../constants";

export default function CategorySection(props) {
  const [categoryIndex, setCategoryIndex] = useState(1);
  const category = categories.find((category) => {
    return category.id == categoryIndex;
  });

  return (
    <View style={styles.container}>
      <CategorySelector categoryId={categoryIndex} changeFn={(id) => setCategoryIndex(id)} />
      <Category category={category} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
