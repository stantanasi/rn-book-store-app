import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { theme } from '../constants'
import { page_filled_icon, read_icon } from "../constants/icons";

const getGenreColor = (genre) => {
  switch (genre) {
    case 'Adventure':
      return theme.COLORS.lightGreen
    case 'Drama':
      return theme.COLORS.lightBlue
    case 'Romance':
      return theme.COLORS.lightRed
  }
  return theme.COLORS.lightGray
}

export default function CategoryBook(props) {
  return (
    <Pressable>
      <View style={styles.bookTile}>
        <Image style={styles.bookCover} source={props.book.bookCover} />
        <View style={styles.infoBox}>
          <Text style={styles.bookName}>{props.book.bookName}</Text>
          <Text style={styles.author}>{props.book.author}</Text>
          <View style={styles.infos}>
            <View style={styles.info}>
              <Image style={styles.infoIcon} source={page_filled_icon} />
              <Text style={styles.infoText}>{props.book.pageNo}</Text>
            </View>
            <View style={styles.info}>
              <Image style={styles.infoIcon} source={page_filled_icon} />
              <Text style={styles.infoText}>{props.book.pageNo}</Text>
            </View>
          </View>
          <View style={styles.genres}>
            {props.book.genre.sort().map((genre) => (
              <Text
                style={[styles.genre, {
                  backgroundColor: getGenreColor(genre) + '60',
                  color: getGenreColor(genre),
                }]}
              >
                {genre}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bookTile: {
    flexDirection: "row",
  },
  bookCover: {
    width: 170,
    height: 250,
  },
  infoBox: {
    margin: 5,
  },
  bookName: {
    color: theme.COLORS.white,
  },
  author: {
    color: theme.COLORS.lightGray,
  },
  infos: {
    flexDirection: "row",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoIcon: {
    width: 20,
    height: 20,
    marginEnd: 3,
    tintColor: theme.COLORS.lightGray,
  },
  infoText: {
    color: theme.COLORS.lightGray,
  },
  genres: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genre: {
  },
});
