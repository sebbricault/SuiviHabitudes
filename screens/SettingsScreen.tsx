import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';

const SettingsScreen: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false); // Pour le bouton basculant

  return (
    <View style={styles.container}>
      {/* Sliders et boutons basculants */}
      <View style={styles.settingRow}>
        <Text style={styles.label}>Notification</Text>
        <Switch
          trackColor={{false: '#767577', true: '#B76E79'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={() => setIsEnabled(previousState => !previousState)}
          value={isEnabled}
        />
      </View>

      {/* Bouton pour passer à la version premium */}
      <TouchableOpacity style={styles.premiumButton}>
        <Text style={styles.premiumButtonText}>
          Passer à la version Premium
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ECECEC',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#AEDFF7',
  },
  premiumButton: {
    backgroundColor: '#B76E79',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  premiumButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default SettingsScreen;
