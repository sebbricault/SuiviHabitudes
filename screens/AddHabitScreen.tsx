import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const AddHabitScreen: React.FC = () => {
  const [habitName, setHabitName] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom de l'habitude:</Text>
      <TextInput
        style={styles.input}
        value={habitName}
        onChangeText={setHabitName}
        placeholder="Entrez le nom de l'habitude"
      />
      <Button
        title="Sauvegarder"
        onPress={() => {
          /* Logique de sauvegarde */
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ECECEC',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#AEDFF7',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#AEDFF7',
    marginBottom: 20,
    padding: 10,
  },
});

export default AddHabitScreen;
