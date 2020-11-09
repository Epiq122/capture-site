import React from 'react';
import AboutUs from './pages/AboutUs';
import NavBar from './components/NavBar';
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
