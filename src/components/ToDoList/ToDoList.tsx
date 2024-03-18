import React, { useState } from 'react';
import ToDoListItem from './ToDoListItem';
import ListItemAdder from './ListItemAdder';
import { Button } from 'antd';

export default function ToDoList() {
  const [items, setItems] = useState<string[]>([]);

  function addItem(newItem: string) {
    setItems([...items, newItem]);
  }

  function deleteItem(index: number) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  function clearList() {
    setItems([]);
  }

  return (
    <div>
      <ToDoListItem items={items} onDelete={deleteItem} />
      <ListItemAdder onAdd={addItem} />
      <Button onClick={clearList}>Clear</Button>
    </div>
  );
}
