import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { plus_icon } from '../constants/icons'
import appTheme from '../constants/theme'
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
            <View style={styles.pointsIcon}>
              <Image style={{ width: '100%', height: '100%' }} source={plus_icon} />
            </View>
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
    paddingHorizontal: appTheme.SIZES.padding,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: appTheme.COLORS.white,
    ...appTheme.FONTS.body3,
  },
  userName: {
    color: appTheme.COLORS.white,
    ...appTheme.FONTS.h2,
    fontWeight: 'bold',
  },
  points: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appTheme.COLORS.primary,
    borderRadius: 360,
    paddingStart: 4,
    paddingEnd: 10,
    paddingVertical: 5,
  },
  pointsIcon: {
    width: 30,
    height: 30,
    marginEnd: 10,
    backgroundColor: appTheme.COLORS.secondary + 'AA',
    borderRadius: 360,
    padding: 5,
  },
  pointsText: {
    color: appTheme.COLORS.white
  },
})