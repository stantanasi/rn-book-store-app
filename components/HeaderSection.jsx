import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { user } from '../data/user'

export default function HeaderSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Good morning</Text>
          <Text style={styles.userName}>{user.name}</Text>
        </View>
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
  title: {
    color: '#fff',
  },
  userName: {
    color: '#fff',
    fontWeight: 'bold',
  },
})