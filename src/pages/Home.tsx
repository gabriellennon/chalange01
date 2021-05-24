import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle !== ''){
      const dataTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }

      setTasks(oldState => [...oldState, dataTask])

    }else {
      Alert.alert('Digite o nome da tarefa ✍🏽')
    }
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists

    //pegando meu estado anterior de tasks e setando o novo estado com filter
    setTasks(oldState => oldState.filter(
      task => {
        if(task.id === id){
          task.done = true;
        }
      }
    ));
    
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state

    setTasks(oldState => oldState.filter(
      task => task.id !== id
    ))
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}