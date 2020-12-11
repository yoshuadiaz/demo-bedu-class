import React from 'react';
import Container from '@material-ui/core/Container';
import Ejemplo1 from './Ejemplo1'
import Ejemplo2 from './Ejemplo2'
import '../styles/App.css';

function App() {
  return (
    <div>
      <Ejemplo2 />
      <Container>
        {/* <Ejemplo1 /> */}
      </Container>
    </div>
  );
}

export default App;
