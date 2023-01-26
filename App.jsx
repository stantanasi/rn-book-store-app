import { StatusBar } from 'expo-status-bar';
import { StyleSheet, LogBox, Text, View } from 'react-native';
import { COLORS } from './constants/theme'

// Hide Error FlatList using inside ScrollView
LogBox.ignoreLogs(['VirtualizedLists']);


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: 10,
  },
});
