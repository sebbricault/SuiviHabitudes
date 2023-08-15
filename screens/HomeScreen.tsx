import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import HabitCard from '../components/HabitCard';

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

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes Habitudes</Text>
      <FlatList
        data={habitsData}
        renderItem={({item}) => (
          <HabitCard habitName={item.name} isChecked={item.isChecked} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
});

export default HomeScreen;
