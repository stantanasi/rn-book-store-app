import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { clock_icon, page_icon } from '../constants/icons'

export default function Book(props) {
  return (
    <Pressable>
      <Image style={styles.bookCover} source={props.book.bookCover} />
      <View style={styles.infos}>
        <View style={styles.info}>
          <Image style={styles.infoIcon} source={clock_icon} />
          <Text style={styles.infoText}>{props.book.lastRead}</Text>
        </View>
        <View style={styles.info}>
          <Image style={styles.infoIcon} source={page_icon} />
          <Text style={styles.infoText}>{props.book.completion}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  bookCover: {
    width: 170,
    height: 250,
  },
  infos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    width: 20,
    height: 20,
    marginEnd: 3,
  },
  infoText: {},
})