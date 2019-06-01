import React from 'react';
import List from './components/List';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Container style={{marginTop : 50, textAlign: 'center'}}>
      <List />
    </Container>
  );
}

export default App;
