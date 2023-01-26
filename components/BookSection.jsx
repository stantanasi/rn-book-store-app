import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BookSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My books</Text>
        <Button title='See more' />
      </View>
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