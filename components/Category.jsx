import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { theme } from "../constants";
import CategoryBook from "./CategoryBook";

export default function Category(props) {
  return (
    <View style={styles.category}>
      <FlatList
        data={props.category.books}
        contentContainerStyle={{paddingHorizontal: theme.SIZES.padding}}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) => (
          <CategoryBook book={item} />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    marginVertical: 16,
  },
});
