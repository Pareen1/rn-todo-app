import { Button, StyleSheet, TextInput, View, FlatList } from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalVisible(true);
  };

  function addGoalHandler(enteredGoal) {
    if (enteredGoal.length === 0) {
      return;
    };
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { text: enteredGoal, key: Math.random().toString() },
    ]);
    closeGoalHandler();
  };

  function closeGoalHandler() {
    setModalVisible(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== id);
    });
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add a new goal' color={'#9BDBFA'} onPress={startAddGoalHandler} />
        <GoalInput addGoalHandler={addGoalHandler} visible={modalVisible} closeModal={closeGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false}
            renderItem={({ item }) => (
              <GoalItem text={item.text} onDeleteItem={deleteGoalHandler} id={item.key} />
            )}
            keyExtractor={(item) => item.key}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
