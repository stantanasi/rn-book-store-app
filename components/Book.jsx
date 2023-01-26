import { Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function Book(props) {
  return (
    <Pressable>
      <Image style={styles.bookCover} source={props.book.bookCover} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  bookCover: {
    width: 170,
    height: 250,
  },
})