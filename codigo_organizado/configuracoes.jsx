import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ConfiguracoesScreen() {
  const [ultimaZonaEditada, setUltimaZonaEditada] = useState('');

  useEffect(() => {
    const carregarZona = async () => {
      const keys = await AsyncStorage.getAllKeys();
      const zonas = await AsyncStorage.multiGet(keys);
      const ultima = zonas[zonas.length - 1];
      if (ultima) setUltimaZonaEditada(`${ultima[0]}: ${ultima[1]}`);
    };
    carregarZona();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <Text>Última zona editada: {ultimaZonaEditada || 'Nenhuma'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20 },
});
