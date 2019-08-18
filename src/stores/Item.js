import { observable } from 'mobx'

export class Item {
    @observable name
    @observable quantity = 1
    @observable price = 0
    constructor(name) {
        this.name = name
    }
}