import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CalendarScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Calendrier */}
      {/* Vous pouvez utiliser une bibliothèque comme `react-native-calendars` pour un calendrier complet */}
      <Text style={styles.label}>Calendrier ici</Text>
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
  },
});

export default CalendarScreen;
