import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Item from './Item';

@inject("InventoryItems")

@observer
class Market extends Component {

  addItem = (e) => {
    if (e.key === 'Enter') {
      this.props.InventoryItems.addItem(e.target.value)
    }
  }

  render() {
    let store = this.props.InventoryItems
    return (
      <div>
        <input onKeyDown={this.addItem} ></input>
        <h4> you add {this.props.InventoryItems.numItems}</h4>
        <ul id="ul">  {store.items.map(m =>
        
            <Item m={m} store={store} />
           
        )} </ul>
      </div>)
  }
}

export default Market