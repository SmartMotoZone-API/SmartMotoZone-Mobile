import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditarZonaScreen() {
  const { id, modelo, zona } = useLocalSearchParams();
  const [novaZona, setNovaZona] = useState(zona);
  const router = useRouter();

  const salvarZona = async () => {
    try {
      await AsyncStorage.setItem(`zona_moto_${id}`, novaZona);
      alert('Zona atualizada com sucesso!');
      router.back();
    } catch (e) {
      alert('Erro ao salvar a zona');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Zona da Moto</Text>
      <Text>Modelo: {modelo}</Text>
      <TextInput
        style={styles.input}
        value={novaZona}
        onChangeText={setNovaZona}
        placeholder="Digite a nova zona (ex: A1)"
      />
      <Button title="Salvar" onPress={salvarZona} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, width: '100%', marginBottom: 10 },
});
