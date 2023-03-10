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
    <Pressable style={styles.container}>
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
              <Image style={styles.infoIcon} source={read_icon} />
              <Text style={styles.infoText}>{props.book.readed}</Text>
            </View>
          </View>
          <View style={styles.genres}>
            {props.book.genre.sort().map((genre, index) => (
              <View key={index} style={[styles.genre, {
                backgroundColor: getGenreColor(genre) + '60',
              }]}>
                <Text
                  key={index}
                  style={{ color: getGenreColor(genre) }}
                >
                  {genre}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  bookTile: {
    flexDirection: "row",
  },
  bookCover: {
    width: 120,
    height: 120 * (9 / 6),
    borderRadius: 20,
  },
  infoBox: {
    paddingHorizontal: 14,
    flexShrink: 1,
  },
  bookName: {
    color: theme.COLORS.white,
    ...theme.FONTS.h2,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  author: {
    color: theme.COLORS.lightGray,
    marginTop: 2,
  },
  infos: {
    flexDirection: "row",
    marginTop: 16,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
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
    marginTop: 20,
  },
  genre: {
    padding: 7,
    borderRadius: 4,
    marginRight: 5,
    marginBottom: 5,
  },
});
