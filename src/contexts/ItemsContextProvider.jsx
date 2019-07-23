import { ItemsContext } from "./ItemsContext";
import React, { useState } from "react";

const ItemsContextProvider = (props) => {
    const [items, setItems] = React.useState(
        JSON.parse(localStorage.getItem('items')) || []
    );

    const handleChange = (id, property, newValue) => {
        // min max validation on input will not defend from typing.
        // create usable
        // further validation is required:
        if (property === 'quantity' && newValue > 99) {
            newValue = 99;
        } else if (property === 'quantity' && newValue < 1) {
            newValue = 1;
        }

        let newItems = [...items].map(item => {
            if (item.id === id) {
                item[property] = newValue
            }
            return item
        })
        setItems(newItems)
        localStorage.setItem('items', JSON.stringify(newItems));
    }

    const handleNewItem = (newItem) => {
        let newItems = [...items];
        newItem['id'] = newItems.length + 1;
        newItems.push(newItem);
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
    }

    const handleDelete = (id) => {
        let newItems = [...items].filter(item => {
            return item.id !== id;
        })
        setItems(newItems)
        localStorage.setItem('items', JSON.stringify(newItems));
    }

    return (
        <ItemsContext.Provider value={{ items, setItems, handleChange, handleNewItem, handleDelete }}>
            {props.children}
        </ItemsContext.Provider >
    );
};

export default ItemsContextProvider;