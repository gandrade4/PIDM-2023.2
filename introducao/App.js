import { StyleSheet, View } from 'react-native';
//import HelloRN from './components/01HelloRN-v1'
import HelloRN_v2 from './components/02HelloRN-v2';
import MyCat from './components/03CatExample';


export default function App() {
  return (
    <View style={styles.container}>
      <MyCat />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },

  titulo: {
    fontSize: 50,
    fontWeight: "bold",
    color: "blue"
  }
});
