import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Book from './Book'
import appTheme from '../constants/theme'
import { myBooks } from '../data/myBooks'

export default function BookSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My book</Text>
        <Pressable>
          <Text style={styles.headerSeeMore}>see more</Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        style={styles.books}
        contentContainerStyle={{ paddingHorizontal: appTheme.SIZES.padding }}
      >
        {myBooks.map((book, index) => (
          <>
            {index !== 0 && <View style={{ width: 12 }} />}
            <Book book={book} />
          </>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: appTheme.SIZES.padding,
  },
  headerTitle: {
    flex: 1,
    color: 'white',
    ...appTheme.FONTS.h2,
    fontWeight: 'bold',
  },
  headerSeeMore: {
    color: appTheme.COLORS.lightGray,
    textDecorationLine: 'underline',
  },
  books: {
    marginTop: 25,
  },
})