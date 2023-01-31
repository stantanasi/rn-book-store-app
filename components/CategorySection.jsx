import {
  StyleSheet,
  View,
} from "react-native";
import { categories } from "../data/categories";
import Category from "./Category";
import CategorySelector from "./CategorySelector";
import { useState } from "react";

export default function CategorySection(props) {
  const [categoryId, setCategoryId] = useState(1);
  const category = categories.find((category) => {
    return category.id == categoryId;
  });

  return (
    <View style={styles.container}>
      <CategorySelector categoryId={categoryId} changeFn={(id) => setCategoryId(id)} />
      <Category category={category} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
