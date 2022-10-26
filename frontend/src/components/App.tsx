import React from 'react'
import Header from './Header';
import Karousel from './Carousel';
import Home from './Home';
import Row1 from './Row1';

function App() {
  return (
    <div className='app'>
      {/* Header */}
      <Header />
      <Karousel />
      <Row1 />
      {/* Home */}
      {/* <Home /> */}
    </div>
  )
}

export default App
