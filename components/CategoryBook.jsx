import { StyleSheet, Text, View, Pressable, Image } from "react-native";

import { page_filled_icon, read_icon } from "../constants/icons";
export default function CategoryBook(props) {
  return (
    <Pressable>
      <View style={styles.bookTile}>
        <Image style={styles.bookCover} source={props.book.bookCover} />
        <View style={styles.infoBox}>
          <View style={styles.info}>
            <Text style={styles.bookName}>{props.book.bookName}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.author}>{props.book.author}</Text>
          </View>
          <View style={styles.info}>
            <Image style={styles.infoIcon} source={page_filled_icon} />
            <Text style={styles.infoText}>{props.book.pageNo}</Text>
          </View>
          <View style={styles.info}>
            <Image style={styles.infoIcon} source={read_icon} />
            <Text style={styles.infoText}>{props.book.readed}</Text>
          </View>
        </View>
      </View>
    </Pressable>
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
  infoBox: {
    margin: 5,
  },
  bookTile: {
    flexDirection: "row",
  },
});
