import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import { HomeScreen } from './screens';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <HomeScreen />
        <StatusBar style='auto' />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
