import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Goal = ({ title }) => {
  return (
    <View style={styles.goalContainer}>
      <Text style={styles.goalText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  goalText: {
    fontSize: 18,
  },
});

export default Goal;
