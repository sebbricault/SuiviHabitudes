import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface HabitCardProps {
  habitName: string;
  isChecked: boolean;
}

const HabitCard: React.FC<HabitCardProps> = ({habitName, isChecked}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.habitName}>{habitName}</Text>
      <View style={isChecked ? styles.checked : styles.unchecked} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  habitName: {
    fontSize: 16,
    color: '#333',
  },
  checked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'blue',
  },
  unchecked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'gray',
  },
});

export default HabitCard;
