import { StatusBar } from 'expo-status-bar';
import { StyleSheet, LogBox, View, ScrollView } from 'react-native';
import BookSection from './components/BookSection';
import HeaderSection from './components/HeaderSection';
import { COLORS } from './constants/theme'
import CategorySection from './components/CategorySection';

// Hide Error FlatList using inside ScrollView
LogBox.ignoreLogs(["VirtualizedLists"]);

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderSection />
      <ScrollView style={styles.body}>
        <BookSection />
        <CategorySection />
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
