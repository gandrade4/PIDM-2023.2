import { StyleSheet, Text, View } from 'react-native';
import HelloRN from './components/01helloRN'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo</Text>
      <HelloRN />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 50,
    fontWeight: "bold",
    color: "blue"
  }
});
