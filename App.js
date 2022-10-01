import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Header from './Components/Header';
import Context from './Api/ContextApi';

function App() {
  return (
    <View style={{...styles.container , backgroundColor: "#282C35"}}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
});

export default ()=>{
  return (<Context>
    <App />
  </Context>);
}
