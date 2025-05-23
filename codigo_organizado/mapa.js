import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const mockMotos = [
  { id: '1', modelo: 'Honda Biz', status: 'Disponível', zona: 'A1' },
  { id: '2', modelo: 'Yamaha Factor', status: 'Manutenção', zona: 'B2' },
  { id: '3', modelo: 'Shineray Phoenix', status: 'Em uso', zona: 'A2' },
];

export default function MapaPátioScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa do Pátio</Text>
      <FlatList
        data={mockMotos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.motoCard}>
            <Text>{item.modelo} - Zona: {item.zona}</Text>
            <Button title="Detalhes" onPress={() => router.push({ pathname: '/detalhes', params: { ...item } })} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
  motoCard: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    marginVertical: 5,
  },
});
