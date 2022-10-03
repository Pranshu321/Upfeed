import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './Components/Header';
import Context from './Api/ContextApi';
import InshortTabs from './Components/InTabs';

function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282C35" }}>
      <InshortTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
});

export default () => {
  return (<Context>
    <App />
  </Context>);
}
