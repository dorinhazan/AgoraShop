import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { observer } from 'mobx-react'
import Market from './components/Market';

@observer
class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render(){
    let store = this.props.store
    return (
      <div className="App">
        {/* < DevTools /> */}
        <Market store={store} />
      </div>
  )}
}

export default App;
