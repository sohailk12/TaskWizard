import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Components/Header';
import HandleTask from './Components/HandleTask';

function App() {
  
  return <Box pb={'10px'}>
          <Header/>
          <HandleTask/>
         </Box>
}

export default App;
