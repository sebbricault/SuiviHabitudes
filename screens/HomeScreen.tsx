import React from 'react';
import {Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen: React.FC = () => {
  interface Habit {
    id: string;
    name: string;
    isChecked: boolean;
  }

  const habitsData: Habit[] = [
    {id: '1', name: 'Méditer', isChecked: true},
    {id: '2', name: 'Lire 20 pages', isChecked: false},
    // ... autres habitudes
  ];
  return (
    <LinearGradient colors={['#AEDFF7', '#ECECEC']} style={styles.container}>
      {/* Liste des habitudes */}
      <FlatList
        data={habitsData}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.habitCard}>
            {/* Icône */}
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      {/* Bouton d'ajout flottant */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  habitCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // Ajoutez d'autres styles pour l'animation, l'icône, etc.
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#B76E79',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  addButtonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default HomeScreen;
