import { Button } from 'antd';
import React from 'react';

export default function ToDoListItem(props: {
    items: string[];
    onDelete: (index: number) => void;
}) {
    const { items, onDelete } = props;
    return (
        <div>
            <h2>ToDo List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {index} - {item} <Button onClick={() => onDelete(index)}>X</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
