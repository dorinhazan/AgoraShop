import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'


@inject("InventoryItems")
@observer
class Item extends Component {

    buyItem = (e) => {
        this.props.InventoryItems.buyItem(e.target.value)
    }
    changePrice = (e) => {
        let person = prompt("Change The Price", "30");
        this.props.InventoryItems.changePrice(e.target.id, person)
    }

    render() {
        let m = this.props.m
        return (
            
                <li onDoubleClick={this.changePrice} id={m.name}>{m.quantity} {m.name} available at {m.price} per <button value={m.name} onClick={this.buyItem}>BuyItem</button></li>
           )

    }
}

export default Item