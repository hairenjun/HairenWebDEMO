import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';
export default function App() {
  return (
    <WebView
    source={{uri:"https://hairenjun.link/"}}
    
    style={{flex:1}}
    onError={(syntheticEvent) => {
      const { nativeEvent } = syntheticEvent;
      console.warn('WebView error: ', nativeEvent);
      alert("要么是没网，要么是用的EEI")
      return TimeoutPage
    }}/>

  );
}
const TimeoutPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Timeout Error: Could not load page.</Text>
    </View>)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
