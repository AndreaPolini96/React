import { Button, Input } from 'antd';
import React, { useState } from 'react';

export default function ListItemAdder(props: {
    readonly onAdd: (newItem: string) => void;
}) {
    const { onAdd } = props;
    const [newItem, setNewItem] = useState<string>('');

    function changingItem(ev: React.ChangeEvent<HTMLInputElement>) {
        setNewItem(ev.target.value);
    }

    function submitItem() {
        if (newItem.trim() !== '') {
            onAdd(newItem);
            setNewItem('');
        }
    }

    return (
        <div>
            <Input style={{ width: '200px' }} type="text" placeholder="Add new item" value={newItem} onChange={changingItem} />
            <Button onClick={submitItem}>Add</Button>
        </div>
    );
}