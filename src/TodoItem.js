import React, { useState } from 'react';
import { ListItem, Text, Flex, IconButton } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon, DeleteIcon, CheckIcon } from '@chakra-ui/icons';

const TodoItem = ({ task, onDelete, index, onUp, onDown, onCheck }) => {
  const [checked, setChecked] = useState(false);

  const handleDelete = () => {
    onDelete(task);
  };

  const moveTaskUp = () => {
    onUp(index);
  };

  const moveTaskDown = () => {
    onDown(index);
  };

  const handleCheck = () => {
    setChecked(!checked);
    onCheck(task);
  };

  return (
    <ListItem
      py="2"
      px="4"
      borderBottomWidth="1px"
      borderColor="gray.200"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex alignItems="center">
        {checked ? (
          <Text fontSize="md" textDecoration="line-through" mr="2">{task}</Text>
        ) : (
          <Text fontSize="md" mr="2">{task}</Text>
        )}
      </Flex>
      {!checked && (
        <Flex>
          <IconButton
            aria-label="Check task"
            icon={<CheckIcon />}
            colorScheme="green"
            size="sm"
            onClick={handleCheck}
            mr="2"
          />
          <IconButton
            aria-label="Move task up"
            icon={<ArrowUpIcon />}
            colorScheme="blue"
            size="sm"
            onClick={moveTaskUp}
            mr="2"
          />
          <IconButton
            aria-label="Move task down"
            icon={<ArrowDownIcon />}
            colorScheme="blue"
            size="sm"
            onClick={moveTaskDown}
            mr="2"
          />
          <IconButton
            aria-label="Delete task"
            icon={<DeleteIcon />}
            colorScheme="red"
            size="sm"
            onClick={handleDelete}
          />
        </Flex>
      )}
    </ListItem>
  );
};

export default TodoItem;
