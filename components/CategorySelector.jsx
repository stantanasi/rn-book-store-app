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
import { theme } from "../constants";

export default function CategorySelector(props) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: theme.SIZES.padding }}
      >
        {categories.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => props.changeFn(category.id)}
            style={{ marginStart: index !== 0 ? 24 : 0 }}
          >
            <Text
              style={[styles.categoryTitle, {
                color: props.categoryId === category.id ?
                  theme.COLORS.white :
                  theme.COLORS.lightGray
              }]}
            >
              {category.categoryName}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  categoryTitle: {
    color: theme.COLORS.lightGray,
    ...theme.FONTS.h2,
    fontWeight: 'bold',
  },
});
