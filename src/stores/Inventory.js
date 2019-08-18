import { observable, action,computed } from 'mobx'
import { Item } from './Item'


export class Inventory {
    @observable items = []
    @computed get numItems() {
        return this.items.length
    } 
    @action addItem = (name) => {
       let item= this.items.find(i => i.name === name) 
       if (item){
                item.quantity++
            }
            else{
            let inventory = new Item(name)
            this.items.push(inventory)}
        
    }

    @action buyItem = (name) => {        
        let item = this.items.find(i => i.name === name)        
        if (item.quantity == 0) {
            this.items = this.items.filter(i => i.name !== name)     
        }
        item.quantity--
    }

    @action changePrice = (name, price) => {
        let item = this.items.find(i => i.name === name)
        item.price = price
    }
}
