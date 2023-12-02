import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import GoalList from './GoalList';

const App = () => {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const addGoalHandler = () => {
    if (goal.trim() !== '') {
      setGoals([...goals, goal]);
      setGoal('');
    }
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Введите цель"
          onChangeText={(text) => setGoal(text)}
          value={goal}
        />
        <Button title="Добавить" onPress={addGoalHandler} />
      </View>
      <GoalList goals={goals} />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    width: '70%',
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default App;
