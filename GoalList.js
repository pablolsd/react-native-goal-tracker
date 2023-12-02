import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Goal from './Goal';

const GoalList = ({ goals }) => {
  return (
    <ScrollView style={styles.goalListContainer}>
      {goals.map((goal, index) => (
        <Goal key={index} title={goal} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  goalListContainer: {
    margin: 10,
  },
});

export default GoalList;
