import { StyleSheet, View } from 'react-native'
import React from 'react'

export default function HeaderSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})