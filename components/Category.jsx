import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { theme } from "../constants";
import CategoryBook from "./CategoryBook";

export default function Category(props) {
  return (
    <View style={styles.category}>
      <ScrollView contentContainerStyle={{paddingHorizontal: theme.SIZES.padding}}>
        {props.category.books.map((book, index) => (
          <CategoryBook key={index} book={book} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    marginTop: 16,
  },
});
