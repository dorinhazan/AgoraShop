import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'

import * as serviceWorker from './serviceWorker';

import { Item } from '../src/stores/Item'
import { Inventory } from '../src/stores/Inventory'

let shirt = new Item("shirt")
let shoes = new Item("shoes")

let InventoryItems = new Inventory()

InventoryItems.items.push(shirt)
InventoryItems.items.push(shoes)

let stores= {InventoryItems}

ReactDOM.render(<Provider {... stores}><App /></Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
