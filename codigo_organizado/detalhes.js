import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function MotoDetailScreen() {
  const { id, modelo, status, zona } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Moto</Text>
      <Text>ID: {id}</Text>
      <Text>Modelo: {modelo}</Text>
      <Text>Status: {status}</Text>
      <Text>Zona Atual: {zona}</Text>
      <Button title="Editar Zona" onPress={() => router.push({ pathname: '/editar-zona', params: { id, modelo, zona } })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
});
