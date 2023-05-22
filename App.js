import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ImageViewScreen from './screens/ImageViewScreen';
import PreviewScreen from './screens/PreviewScreen';
import Navigator from './navigation/Navigator';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
