import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import './style.scss';

function App() {
  return (
    <div className="AppStyle">
      <Formulario/>
      <Lista></Lista>
    </div>
  );
}

export default App;