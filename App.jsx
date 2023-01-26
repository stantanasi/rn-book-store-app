import { StatusBar } from 'expo-status-bar';
import { StyleSheet, LogBox, Text, View, ScrollView } from 'react-native';
import BookSection from './components/BookSection';
import { COLORS } from './constants/theme'

// Hide Error FlatList using inside ScrollView
LogBox.ignoreLogs(['VirtualizedLists']);


export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.body}>
        <BookSection />
      </ScrollView>
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
  body: {
    flex: 1,
  },
});
