import React, { useState } from 'react';
import { Box, Heading, Input, List, Flex, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import TodoItem from './TodoItem';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  const moveUp = (index) => {
    if (index === 0) return; // Can't move the first task up

    const updatedTasks = [...tasks];
    const taskToMove = updatedTasks.splice(index, 1)[0];
    updatedTasks.splice(index - 1, 0, taskToMove);

    setTasks(updatedTasks);
  };

  const moveDown = (index) => {
    if (index === tasks.length - 1) return; // Can't move the last task down

    const updatedTasks = [...tasks];
    const taskToMove = updatedTasks.splice(index, 1)[0];
    updatedTasks.splice(index + 1, 0, taskToMove);

    setTasks(updatedTasks);
  };

  const CheckTask = (task) => {
    console.log("Check task");
  }

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <Box maxWidth="600px" mx="auto" mt="4" p="4" borderWidth="1px" borderRadius="lg" boxShadow="md" marginTop={150}>
      <Heading as="h1" fontSize="2xl" mb="4">
        Todo List
      </Heading>
      <Flex mb="4">
        <Input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          mr="2"
        />
        <IconButton
          aria-label="Add task"
          icon={<AddIcon />}
          onClick={addTask}
          colorScheme="blue"
        />
      </Flex>
      <List spacing={3}>
        {tasks.map((task, index) => (
          <TodoItem key={task} task={task} index={index} onDelete={deleteTask} onUp={moveUp} onDown={moveDown} onCheck={CheckTask}/>
        ))}
      </List>
    </Box>
  );
};

export default Todo;
