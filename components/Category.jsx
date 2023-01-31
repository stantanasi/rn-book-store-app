import {
  StyleSheet,
  LogBox,
  Text,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import CategoryBook from "./CategoryBook";
import { myBooks } from "../data/myBooks";
import { categories } from "../data";
import { COLORS } from "../constants";

export default function Category(props) {
  return (
    <View style={styles.category}>
      <ScrollView>
        {props.category.books.map((book, index) => (
          <CategoryBook key={index} book={book} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    margin: 20,
  },
});
