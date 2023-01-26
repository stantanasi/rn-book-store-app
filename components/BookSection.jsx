import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { myBooks } from '../data/myBooks'
import Book from './Book'

export default function BookSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My books</Text>
        <Button title='See more' />
      </View>
      <ScrollView horizontal>
        {myBooks.map((book, index) => (
          <Book key={index} book={book} />
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
  },
  headerTitle: {
    flex: 1,
    color: 'white',
  },
})