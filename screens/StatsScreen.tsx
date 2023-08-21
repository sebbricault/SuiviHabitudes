import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StatsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Graphiques */}
      <Text style={styles.label}>Graphiques ici</Text>
      {/* Vous pouvez utiliser une bibliothèque comme `react-native-svg-charts` pour les graphiques */}

      {/* Cartes pour les séries et les records */}
      <View style={styles.card}>
        <Text>Séries</Text>
        {/* Détails des séries */}
      </View>
      <View style={styles.card}>
        <Text>Records</Text>
        {/* Détails des records */}
      </View>
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
    color: '#AEDFF7',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default StatsScreen;
