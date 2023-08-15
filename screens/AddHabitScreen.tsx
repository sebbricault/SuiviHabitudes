import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const AddHabitScreen: React.FC = () => {
  const [habitName, setHabitName] = useState<string>('');

  const handleAddHabit = () => {
    // Logique pour ajouter une habitude (par exemple, mise à jour de l'état global ou de la base de données)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom de l'habitude:</Text>
      <TextInput
        style={styles.input}
        value={habitName}
        onChangeText={setHabitName}
        placeholder="Entrez le nom de l'habitude"
      />
      <Button title="Ajouter" onPress={handleAddHabit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default AddHabitScreen;
