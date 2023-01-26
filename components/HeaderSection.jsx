import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { plus_icon } from '../constants/icons'
import { user } from '../data/user'

export default function HeaderSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Good morning</Text>
          <Text style={styles.userName}>{user.name}</Text>
        </View>

        <Pressable>
          <View style={styles.points}>
            <Image style={styles.pointsIcon} source={plus_icon} />
            <Text style={styles.pointsText}>{user.point} points</Text>
          </View>
        </Pressable>
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
  points: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 360,
  },
  pointsIcon: {
    width: 30,
    height: 30,
    marginEnd: 10,
  },
  pointsText: {
    color: '#fff'
  },
})