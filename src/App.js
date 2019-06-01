import React from 'react';
import List from './components/List';
import Shopping from './components/Shopping';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Container 
      style={{marginTop : 50, textAlign: 'center'}}>
      <List />
      <Shopping />
    </Container>
  );
}

export default App;
