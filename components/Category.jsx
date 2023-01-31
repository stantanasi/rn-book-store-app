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
  bookCover: {
    width: 170,
    height: 250,
  },
  infos: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoIcon: {
    width: 20,
    height: 20,
    marginEnd: 3,
  },
  infoText: {},
  bookTile: {
    backgroundColor: "#ffff",
  },
  category: {
    margin: 20,
    backgroundColor: COLORS.white,
  },
});
