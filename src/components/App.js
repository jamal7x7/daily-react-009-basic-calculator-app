import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Calculator</h1>
  </header>
)

const Screen = (props) => (
  <div className='screen'>
    <Operations />
    <Result />
  </div>
)

const Operations = (props) => (
  <div className='operations-screen'>
    1000 + 200 + 50 =
  </div>
)

const Result = (props) => (
  <div className='result-screen'>
    1250
  </div>
)

const NumPad = (props) => (
  <div className='num-pad'>
    <div className='pad-AC'>AC</div>              <div className='pad-plus-minus'>+/-</div>               <div className='pad-percent'>%</div>            <div className='pad-divid'>/</div>
    <div className='pad-7'>7</div>                <div className='pad-8'>8</div>                         <div className='pad-9'>9</div>                   <div className='pad-multi'>x</div>
    <div className='pad-4'>4</div>                <div className='pad-5'>5</div>                         <div className='pad-6'>6</div>                   <div className='pad-minus'>-</div>
    <div className='pad-1'>1</div>                <div className='pad-2'>2</div>                         <div className='pad-3'>3</div>                   <div className='pad-plus'>+</div>
    <div className='pad-0'>0</div>                                                                                  <div className='pad-point'>.</div>               <div className='pad-equal'>=</div>
  </div>
)

const BottomBar = (props) => (
  <div className='bottom-bar' />
)

const Calculator = (props) => (
  <div className='calculator'>
    <Screen />
    <NumPad />
    <BottomBar />
  </div>
)

class App extends Component {
  render () {
    return (
      <div className='App' >
        <Header />
        <Calculator />

      </div>
    )
  }
}

export default App
